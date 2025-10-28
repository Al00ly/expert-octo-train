import { useRouter } from 'next/router';
import mediaData from '../../data/projectsData';
import Head from 'next/head';

const MediaDetails = ({ media }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!media) {
    return <div className="text-center text-white text-xl mt-10">Media not found.</div>;
  }

  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      <Head>
        <title>{`CimaWatch - ${media.title} - مشاهدة`}</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <img
              src={media.posterPlaceholder}
              alt={media.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-5xl font-bold mb-4 text-blue-400">{media.title}</h1>
            <p className="text-gray-300 text-lg mb-4">{media.summary}</p>
            <div className="mb-4">
              <span className="font-semibold text-blue-300">النوع: </span>
              {media.genre.map((g, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm mr-2">
                  {g}
                </span>
              ))}
            </div>
            <p className="text-lg mb-4">
              <span className="font-semibold text-blue-300">التقييم: </span>
              <span className="text-yellow-400">{'★'.repeat(Math.round(media.rating / 2))}</span>
              <span className="text-gray-400">{'★'.repeat(5 - Math.round(media.rating / 2))}</span>
              ({media.rating}/10)
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold text-blue-300">النوع: </span>
              {media.type === 'Movie' ? 'فيلم' : 'مسلسل تلفزيوني'}
            </p>
            {/* Add more details as needed */}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = mediaData.map((media) => ({
    params: { id: media.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const media = mediaData.find((item) => item.id.toString() === params.id);

  if (!media) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      media,
      title: `CimaWatch - ${media.title} - مشاهدة`, // Pass title for _app.tsx
    },
    revalidate: 60, // Re-generate the page every 60 seconds
  };
}

export default MediaDetails;

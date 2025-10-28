import { NextPage } from 'next';

const TermsOfService: NextPage = () => {
  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">شروط الاستخدام</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="mb-4">مرحبًا بك في CimaWatch. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام التالية.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">قبول الشروط</h2>
          <p className="mb-4">باستخدامك لموقعنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">التغييرات على الشروط</h2>
          <p className="mb-4">نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">المحتوى</h2>
          <p className="mb-4">جميع المحتويات المعروضة على الموقع هي لأغراض المعلومات العامة فقط. نحن لا نضمن دقة أو اكتمال أي معلومات على هذا الموقع.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">الروابط الخارجية</h2>
          <p className="mb-4">قد يحتوي موقعنا على روابط لمواقع ويب خارجية لا يتم تشغيلها بواسطتنا. نحن لا نتحكم في محتوى أو سياسات الخصوصية لتلك المواقع.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">إنهاء الاستخدام</h2>
          <p className="mb-4">يجوز لنا إنهاء أو تعليق وصولك إلى موقعنا على الفور، دون إشعار مسبق أو مسؤولية، لأي سبب من الأسباب، بما في ذلك على سبيل المثال لا الحصر، خرقك للشروط.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
  return (
    <div dir="rtl" className="bg-gray-900 min-h-screen text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">سياسة الخصوصية</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="mb-4">هذه سياسة الخصوصية لموقع CimaWatch. نحن نلتزم بحماية خصوصية زوارنا ومستخدمينا.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">جمع المعلومات</h2>
          <p className="mb-4">قد نقوم بجمع معلومات غير شخصية مثل نوع المتصفح، نظام التشغيل، وعناوين IP لتحسين تجربتك على الموقع.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">استخدام المعلومات</h2>
          <p className="mb-4">نستخدم المعلومات التي نجمعها لتحسين محتوى الموقع، تخصيص تجربتك، وتحليل كيفية استخدام الموقع.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">مشاركة المعلومات</h2>
          <p className="mb-4">نحن لا نبيع أو نتاجر أو نؤجر معلومات التعريف الشخصية الخاصة بالمستخدمين للآخرين.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">ملفات تعريف الارتباط (الكوكيز)</h2>
          <p className="mb-4">يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم. يمكنك اختيار تعطيل ملفات تعريف الارتباط من إعدادات متصفحك.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">الموافقة على هذه الشروط</h2>
          <p className="mb-4">باستخدام هذا الموقع، فإنك توافق على هذه السياسة. إذا كنت لا توافق على هذه السياسة، يرجى عدم استخدام موقعنا.</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

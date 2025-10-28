import { NextApiRequest, NextApiResponse } from 'next'

interface ContactRequest {
  name: string
  email: string
  message: string
}

interface ApiResponse {
  success: boolean
  message: string
  data?: ContactRequest
  timestamp: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      timestamp: new Date().toISOString()
    })
  }

  try {
    const { name, email, message }: ContactRequest = req.body

    // التحقق من البيانات الواردة
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'جميع الحقول مطلوبة',
        timestamp: new Date().toISOString()
      })
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'البريد الإلكتروني غير صحيح',
        timestamp: new Date().toISOString()
      })
    }

    // محاكاة معالجة البيانات (في الواقع الحقيقي، هنا سنحفظ في قاعدة البيانات)
    console.log('📧 رسالة اتصال جديدة:')
    console.log('👤 الاسم:', name)
    console.log('📧 البريد الإلكتروني:', email)
    console.log('💬 الرسالة:', message)
    console.log('⏰ الوقت:', new Date().toLocaleString('ar-SA'))

    // محاكاة تأخير في المعالجة
    const processingTime = Math.random() * 1000 + 500
    await new Promise(resolve => setTimeout(resolve, processingTime))

    // الرد بنجاح
    return res.status(200).json({
      success: true,
      message: 'تم استلام رسالتك بنجاح، سنرد عليك قريباً',
      data: { name, email, message },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ خطأ في معالجة طلب الاتصال:', error)

    return res.status(500).json({
      success: false,
      message: 'حدث خطأ داخلي في الخادم',
      timestamp: new Date().toISOString()
    })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
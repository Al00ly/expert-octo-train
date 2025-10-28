import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real application, you would process the form data here
    // const { name, email, message } = req.body

    res.status(200).json({ success: true, message: 'تم استلام رسالتك بنجاح.' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

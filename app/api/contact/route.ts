import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export interface ContactFormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone?: string
  companySize: string
  situation: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const required = ['firstName', 'lastName', 'company', 'email', 'companySize', 'situation', 'message']
    for (const field of required) {
      if (!body[field as keyof ContactFormData]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"CliqAI Website" <${process.env.GMAIL_USER}>`,
      to: 'cliqaiinfo@gmail.com',
      replyTo: body.email,
      subject: `New Enquiry: ${body.firstName} ${body.lastName} — ${body.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #6366f1; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Discovery Call Request</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 40%; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${body.firstName} ${body.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${body.company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;"><a href="mailto:${body.email}" style="color: #6366f1;">${body.email}</a></td>
              </tr>
              ${body.phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${body.phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company Size</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${body.companySize}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Situation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${body.situation}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</p>
              <p style="background: white; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 15px; line-height: 1.6; margin: 0;">${body.message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 6px; border-left: 3px solid #6366f1;">
              <p style="margin: 0; font-size: 13px; color: #475569;">Reply directly to this email to respond to ${body.firstName} at <strong>${body.email}</strong></p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}

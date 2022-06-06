import type { NextApiRequest, NextApiResponse } from 'next'
import { createWorker } from 'tesseract.js'
import puppeteer from 'puppeteer-core';

type Data = {
  status: string
}

const URL = 'https://cvccorp.nexusweb.com.br/';
const makePoint: any = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-infobars'],
    executablePath: '/opt/google/chrome/google-chrome',
    userDataDir: '/home/felipecs/.config/google-chrome/Default'
  })

  const page = await browser.newPage()
  await page.goto(URL, {
    waitUntil: 'networkidle2'
  })

  await page.waitForFunction(
    'Boolean(document.querySelector(".notification"))'
  )

  await page.waitForSelector('#cboCampo')
  await page.$eval('#cboCampo', function (el: any) {
    el.value = '2'
  })

  await page.waitForSelector('#txtValor')
  await page.$eval('#txtValor', function (el: any) {
    el.value = '43185049802'
  })

  await page.waitForSelector('#txtSENHA')
  await page.$eval('#txtSENHA', function (el: any) {
    el.value = '431850498020208'
  })

  await page.waitForSelector('#cboLocal')
  await page.$eval('#cboLocal', function (el: any) {
    el.value = '6055'
  })

  await page.waitForSelector('#nexuscaptcha')
  await page.waitForSelector('#imgCaptcha')

  const imgCaptcha: any = await page.$('#imgCaptcha')
  const box = await imgCaptcha.boundingBox()
  const { x, y, width, height } = await box
  const base64: any = await page.screenshot({ clip: { x, y, width, height }, encoding: 'base64' })
  const imageBuffer = Buffer.from(base64, 'base64')

  const tesseract = createWorker();

  await tesseract.load()
  await tesseract.loadLanguage('eng')
  await tesseract.initialize('eng')
  
  const { data: { text }} = await tesseract.recognize(imageBuffer)

  await page.waitForSelector('#captchacode')
  await page.$eval('#captchacode', (el: any, value) => (el.value = value), text)

  // await page.click('#btOk')
  await page.screenshot();
  page.on('dialog', (dialog) => dialog.accept())

  await page.waitForFunction(
    'document.querySelector("#btOk")?.innerText?.includes("Registrar")'
  )

  await page.waitForSelector('.notification')
  const backgroundColor = await page.evaluate(() => {
    return (document as any).querySelector('.notification').style.backgroundColor
  })

  if (backgroundColor === 'goldenrod') {
    console.log('Wrong captcha retry')
    await browser.close()
    return makePoint()
  }

  page.on('dialog', (dialog) => dialog.accept())

  console.log('Beat time end')
  return await browser.close();
}

const point = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    makePoint().then(() => res.status(200).json({ status: 'ok' }));
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default point

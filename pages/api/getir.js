import puppeteer from 'puppeteer'

export default async (req, res) => {
    const {anaLink, isim, resim, link, eskiFiyat, yeniFiyat, sayfaSayisi} = req.body

    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ], headless: true
    });
    const page = await browser.newPage();
    var isimler = []
    var resimler = []
    var linkler = []
    var eskiFiyatlar = []
    var yeniFiyatlar = []
    for (let i = 1; i <= sayfaSayisi; i++) {
        await page.goto(anaLink + i);
        await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});

        const isimler_ = await page.evaluate((isim) => {
            const $ = window.$;
            return $(isim).map((i, el) => $(el).text()).get();
        }, isim)
        isimler.push(...isimler_)

        const resimler_ = await page.evaluate((resim) => {
            const $ = window.$;
            return $(resim).map((i, el) => $(el).attr("src")).get();
        }, resim)
        resimler.push(...resimler_)

        const linkler_ = await page.evaluate((link) => {
            const $ = window.$;
            return $(link).map((i, el) => $(el).attr("href")).get();
        }, link)
        linkler.push(...linkler_)

        const eskiFiyatlar_ = await page.evaluate((eskiFiyat) => {
            const $ = window.$;
            return $(eskiFiyat).map((i, el) => $(el).text()).get();
        }, eskiFiyat)
        eskiFiyatlar.push(...eskiFiyatlar_)

        const yeniFiyatlar_ = await page.evaluate((yeniFiyat) => {
            const $ = window.$;
            return $(yeniFiyat).map((i, el) => $(el).text()).get();
        }, yeniFiyat)
        yeniFiyatlar.push(...yeniFiyatlar_)
    }
    const urunler = []
    for (let i = 0; i < isimler.length; i++) {
        urunler.push({
            isim: isimler[i],
            resim: resimler[i],
            link: linkler[i],
            eskiFiyat: eskiFiyatlar[i],
            yeniFiyat: yeniFiyatlar[i]
        })
    }

    await page.close();
    await browser.close();

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(urunler))
}
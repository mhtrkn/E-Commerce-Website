# Frontend Developer Çalışması

## Genel Bilgilendirme: 
- Yapılan çalışmaları ifade etmek için " ✓ " kullanılmıştır.
- Yapılamamış çalışmaları ifade etmek için " × " kullanılmıştır.
	
## Genel Kriterler: 
- ✓ Çalışma içinde yapılacak save / load işlemlerinin localStorage’a kaydedilmesi gerekmektedir. 
- ✓ Uygulama içerisinde en az 1 servis isteği yapılmalıdır. 
- ✓ Çalışmanın görsel tasarımı için istenilen kütüphane kullanılabilir. 
- ✓ Çalışma responsive design kurallarına uygun olarak yapılmalıdır. 
- ✓ Yapılacak çalışmada en az 2 ayrı sayfa olmalıdır. 
     - Ürün Liste Sayfası 
     - Ürün Detay Sayfası 
- × Çalışma için <b>Unit</b> test yazılmalıdır. 

## Çalışma için tamamlanması gereken işler: 
✓ Uygulama, listeleme ekranı ile başlamalıdır. 
✓ Listenecek olan elemanlar [şu adres](https://5fc9346b2af77700165ae514.mockapi.io/products) üzerinden çekilip ekrana basılacaktır. 
× Ürünler 12’şer adet olarak ekranda gösterilmelidir. 12’den fazla ürün varsa pagination özelliği eklenmelidir.
✓ Listelenen ürünlerden biri seçildiğinde, o ürünün detaylarının bulunduğu ekrana yönlendirilecek ve ürün detayları gösterilecektir.
✓ Ekranda bulunan “add to cart” butonuna basarak sepete ürün eklenmelidir.
✓ Sepet alanında(en sağdaki bulunan alan) ürün sayısı arttırılıp azaltılabilmeli ve bu güncellemelere göre sepette güncellenmelidir.
✓ Sepete eklenen ürünler, browser’ı kapatılsa bile tekrar açıldığında kaldığı yerden devam edebilmelidir.
× Ekranın sol tarafında bulunan filtreler ile filtreleme işlemi yapılabilmelidir.
× Header alanında bulunan “Search“ alanı ile tüm ürünler arasında isim ile arama yapılıp, aşağıdaki liste güncellenmelidir.
✓ Ürünlerden herhangi birinin üzerine tıklandığında “Ürün Detay” ekranına gidebilmeli ve sepete ekleme işlemi bu alandan da yapılabilmelidir.
- Redux, Redux-Saga, ContextApi vb. kullanılması avantajlı olacaktır.

<b>API Link:</b> https://5fc9346b2af77700165ae514.mockapi.io/products


> Not: Ürünleri sepete ekledikten sonrasında gösterilecek bir sepet ekranı tasarlamadığım için konsol ekranından sepete eklendiğini kontrol edebilirsiniz.

## Ekran Görselleri:

### Anasayfa:

![products-page](https://user-images.githubusercontent.com/80522648/180655547-9ba029f0-dd6e-44fc-8dda-a6e58589f130.png)

### Detay Ekranı:

![detail-page](https://user-images.githubusercontent.com/80522648/180655554-f537802e-de54-4f78-86bf-2d8abd146f57.png)

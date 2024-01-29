const heartRate=async(request,response)=>{
    const rate=Number(request.params.rate)
    let songs = [];
  
    if (rate<= 60) {
      songs = ["Azhage-kathakali(2016)", "Azhagiye-Kaatru Veliyidai(2017)", "Halena-Irumugan(2018)","Hayati-Chekka Chevantha Vaanam(2019)","Kannamma-Ispade Rajavum Idhaya Raniyum(2020)","Kannala-Thani Oruvan(2015)","Kadhaley-Indru Nteru Naalai(2015)","Kanne-Ayogya(2022)","Mazhai Varapoguthey-Ennai Arindhal(2015)","Oxygen-kavan(2017)","Soul of Doctor-Doctor(2021)"];
    } else if (rate >= 80) {
      songs = ["Adiye Kolluthey-Vaaranam Aayiram(2008)", "Dippam-Kathuvaakula Rendu Kadhal(2022)", "Donu Donu-Maari(2015)","Kaara aatakaara-O Kadhal Kanmani(2015)","Kadhalikaathey-Imaikkaa Nodigal(2022)","Kannodu Kaanbathellam-Jeans(1998)","Marriage at 2AM-Vikram(2022)","Local boys-Ethir Neechal(2013)","Thangamey-Naanum Rowdy thaan(2015)","The Ecstasy Theme-Thalaiva(2013)","The Karama Theme-UTurn(2018)","Ullala-Petta(2019)","Veera Soora-Naane Varuven(2022)","Veyyon Silli-Soorarai Pottru(2020)","Wasted-Vikram(2022)","Yakkai Thiri-Aayutha Ezhuthu(2004)"];
    } else {
      songs = ["Konjam-M.S.Dhoni(2016)", "Thalli Pogathey-Achcham Yenbadhu Madamaiyada(2016)", "Kaarkuzhal Kadavaiye-Vadachennai(2019)","Hey Saandakaara-Iruthi Suttru(2016)","Hey Amigo-Kaappaan(2019)","Kaatu Payale-Soorarai Potru(2020)","Nenjil jil jil-Kannathil Muthamittal(2002)","Adiye-Bachelor(2021)","Ennadi Maayavi-Vadachennai(2019)"];
    }
  console.log(songs)
    response.json({ suggestions: songs });
  };
  module.exports = {heartRate}
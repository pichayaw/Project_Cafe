# announce

user  ที่ชื่อ Nuttaphong ที่ push ข้อมูลขึ้น git ในโปรเจคนี้ กับ user ที่ชื่อ iSerlord เป็นคนเดียวกันครับ
เพียงแต่ว่า ตอนที่ขณะทำโปรเจคนี้ iSerlord ได้ทำการเปลี่ยน config username เป็น Nuttaphong
เป็นเหตุทำให้เวลา push ข้อมูลขึ้น git กลายเป็นชื่อ Nuttaphong แทนที่จะเป็น iSerlord 
จึงแจ้งให้ทราบครับ

# project-cafe

## Project setup
```
npm install
npm install moment --save
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- - -
- - -
## Function ของร้าน CS cafe
1. เติมเงินเพื่อใช้สำหรับซื้อเครื่องดื่มและอาหาร
2. ซื้อเครื่องดื่มหรืออาหารในร้านเพื่อสะสมแต้มเพชร ทุกการซื้อขั้นต่ำ 25 บาท จะได้รับ 1 diamond
3. ใช้แต้มเพชรสำหรับแลกเครื่องดื่มและอาหาร
- - -
- - -
## การเข้าใช้งานของร้าน CS cafe สำหรับ addmin
1. เข้าไปที่หน้า LOG IN ใส่ 
    * username : admin@gmail.com
    * password : 123456
2. เข้าไปที่หน้า ADMIN REWARDS addmin สามารถแก้ไข เพิ่ม ลบ ของรางวัลได้ คลิกที่ปุ่ม ADD NEW REWARD เพื่อเพิ่มของรางวัล ใส่ชื่อเมนู แต้มเพชรที่ใช้แลก และจำนวนของรางวัลได้ คลิกปุ่ม EDIT ในตาราง เพื่อแก้ไขชื่อเมนู แต้มเพชรที่ใช้แลก และจำนวนของรางวัล และต้องการลบของรางวัลชิ้นนั้น ให้ก้ปุ่ม Delete ที่มีรูปถังขยะ
3. เข้าไปที่หน้า ADDMIN READERBOARD เพื่อดูแต้มเพชรของลูกค้าที่เรียงจากมากไปน้อย ช่อง date ช่องแรกคือ start date ช่องสองคือ end date เลือกวันก่อนหลังแล้ว ตรง diamonds ก็จะคำนวณให้ เมื่อกดปุ่มก็จะเรียงจน diamonds
- - -
- - -
## การเข้าใช้งานของร้าน CS cafe สำหรับ user
    >ลูกค้าที่ไม่มี username ไม่สามารถเข้ามาซื้อของในร้านและสะสมแต้มเพชรได้ ต้อง create account ก่อนที่หน้า register
1. เข้าไปที่หน้า REGISTER แล้ว create account เพื่อเข้าใช้งานในร้าน CS cafe
    * กรอก Username, Email, Password
    * ผู้ใช้ที่เคยมี username อยู่แล้วไม่สามารถใช้ซื้อเดิมซ้ำได้
2. ลูกค้าที่มี username แล้วเข้าไป log in ที่หน้า LOG IN เพื่อเข้ามาใช้งาน
3. ลูกค้าเติมเงินเข้าบัญชีตัวเองได้ในหน้า TOP UP เพื่อนำเงินไปซื้อสินค้าในร้าน
4. ลูกค้าสามารถเลือกซื้อสินค้าได้ในหน้า SHOP 
    * ทุกการซื้อขั้นต่ำ 20 บาท จะได้รับแต้มเพชร 1 แต้ม
5. ลูกค้าเข้าไปที่หน้า REWARDS เพื่อดูแต้มเพชรของตัวเองที่มุมขวาบน แล้วกดใช้แต้มแลกของรางวัลได้ต้ามแต้มที่ลูกค้ามีสะสม
6. ลูกค้าดูประวัติการซื้อ และประวัติการแลกของรางวัล ในหน้า HISTORY

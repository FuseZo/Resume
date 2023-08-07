function changeLanguage() {
    var languageSelect = document.getElementById("language-select");
    var selectedValue = languageSelect.value;
    
    if (selectedValue === "thai") {
        // Change content to Thai
        document.getElementById("namest").innerHTML = "บารมี ภูมิพันธ์";
        document.getElementById("position").innerHTML = "ช่างแมคคาทรอนิกส์";
        document.getElementById("contact").innerHTML = "ข้อมูลติดต่อ";
        document.getElementById("diploma").innerHTML = "ประกาศนียบัตรวิชาชีพชั้นสูง";
        document.getElementById("live").innerHTML = "1268 ถนน มิตภาพ<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตำบลในเมือง อำเภอเมือง <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;จังหวัดนครราชสีมา";
        document.getElementById("eduction").innerHTML = "การศึกษา";
        document.getElementById("year3").innerHTML = "2564 - 2566";
        document.getElementById("eduction3").innerHTML = "ประกาศนียบัตรวิชาชีพชั้นสูง";
        document.getElementById("college2").innerHTML = "วิทยาลัยเทคนิคนครราชสีมา";
        document.getElementById("year2").innerHTML = "2561 - 2564";
        document.getElementById("eduction2").innerHTML = "ประกาศนียบัตรวิชาชีพ";
        document.getElementById("college1").innerHTML = "วิทยาลัยเทคนิคนครราชสีมา";
        document.getElementById("year1").innerHTML = "2558 - 2561";
        document.getElementById("eduction1").innerHTML = "มัธยมศึกษาปีที่ 3";
        document.getElementById("school").innerHTML = "อุบลรัตนราชกัญญาราชวิทยาลัยนครราชสีมา";
        document.getElementById("languages").innerHTML = "ภาษา";
        document.getElementById("language").innerHTML = "ภาษาอังกฤษ";
        document.getElementById("skills").innerHTML = "ความสามารถ";
        document.getElementById("program").innerHTML = "ภาษาโปรแกรม: C++, C#, HTML5, CSS";
        document.getElementById("electric").innerHTML = "ทางด้านไฟฟ้า";
        document.getElementById("proplc").innerHTML = "ทาด้านPLC";
        document.getElementById("autocad").innerHTML = "ทางด้านการออกแบบด้วย AutoCad";
        document.getElementById("titlepf").innerHTML = "โปรไฟล์";
        document.getElementById("titlepf2").innerHTML = "ผมเป็นช่างแมคคาทรอนิกส์ที่เชี่ยวชาญในการออกแบบวงจรด้วยAutoCadและการพัฒนาจากประสบการณ์มากมายในโครงการต่าง ๆ ที่ต้องการความเข้าใจลึกซึ้งเกี่ยวกับความสามารถของระบบ รวมถึงความเชี่ยวชาญในการแก้ไขปัญหาที่ซับซ้อน<br>และเชี่ยวชาญในการออกแบบตู้ไฟฟ้าและโปรแกรม PLC<br>ให้เหมาะสมกับความต้องการของลูกค้าและอุตสาหกรรมที่หลากหลาย<br>";
        document.getElementById("titlets").innerHTML = "ทักษะทางเทคนิค";
        document.getElementById("abilities").innerHTML = "ความสามารถ:";
        document.getElementById("electrical").innerHTML = "<b>&#x2022;ความเชี่ยวชาญด้านไฟฟ้า<b/>";
        document.getElementById("electricals").innerHTML = "&nbsp;&nbsp;ผมมีความเชี่ยวชาญในด้านการออกแบบแผงควบคุมไฟฟ้าโดยใช้ &nbsp;&nbsp;AutoCADสำหรับออกแบบวงจรและการต่อสายไฟอย่างพิถีพิถัน<br>&nbsp;&nbsp;ในการออกแบบภายในตู้ที่เป็นระเบียบเรียบร้อยความเชี่ยวชาญของผมยัง<br>&nbsp;&nbsp;ครอบคลุมถึงความเข้าใจลึกซึ้งในองค์ประกอบทางไฟฟ้าและความ<br>&nbsp;&nbsp;แม่นยำในการคำนวณการใช้อุปกรณ์ไฟฟ้าทั้งหมดยึกความถูกต้องกับ<br>&nbsp;&nbsp;ความปลอดภัยและความสะดวกสบายของผู้ใช้เป็นหลัก";
        document.getElementById("plcpro").innerHTML = "<b>&#x2022;การเขียนโปรแกรมPLC<b/>";
        document.getElementById("plcpros").innerHTML = "&nbsp;&nbsp;ผมมีความรู้และประสบการณ์ในการเขียนโปรแกรมPLCอย่างเต็มที่<br>&nbsp;&nbsp;ผมเชี่ยวชาญในการออกแบบและปรับปรุงระบบควบคุมที่ให้ความสำคัญ<br>&nbsp;&nbsp;กับมาตรฐานความปลอดภัยและประสิทธิภาพทักษะเหล่านี้เป็นสิ่งสำคัญ<br>&nbsp;&nbsp;ในการผลิตผลิตภัณฑ์และระบบที่มีคุณภาพดีในเขตอุตสาหกรรม<br>&nbsp;&nbsp;ความเชี่ยวชาญของผมในการเขียนโปรแกรมPLCยังรวมการทำงานของ<br>&nbsp;&nbsp;ระบบที่ผู้ใช้งานใช้ได้อย่างราบรื่นอีกทั้งผมมีความสามารถในการร่วมมือ<br>&nbsp;&nbsp;กับผู้อื่นเพื่อสร้างผลิตภัณฑ์ที่ทันสมัยที่ตอบโจทย์ตลาดอย่าง<br>&nbsp;&nbsp;มีประสิทธิภาพ";
        document.getElementById("prol").innerHTML = "<b>&#x2022;ความเชียวชาญทางด้านภาษาโปรแกรม<b/>";
        document.getElementById("prols").innerHTML = "&nbsp;&nbsp;C#: ผมมีความเชี่ยวชาญในการใช้งานC#สำหรับการพัฒนาซอฟต์แวร์<br>&nbsp;&nbsp;ที่หลากหลายประเภท.<br>&nbsp;&nbsp;C++: ผมมีประสบการณ์ในการเขียนโปรแกรมด้วยC++สำหรับการ<br>&nbsp;&nbsp;พัฒนาแอปพลิเคชันที่หลากหลายในการใช้งาน<br>&nbsp;&nbsp;HTML5: ผมมีความเชี่ยวชาญในการสร้างเนื้อหาเว็บแบบแอ็คทิฟที่<br>&nbsp;&nbsp;สามารถปฏิสัมพันธ์ได้<br>&nbsp;&nbsp;CSS: ผมมีความสามารถในการสร้างการออกแบบเว็บที่มีลักษณะที่ดึงดูด<br>&nbsp;&nbsp;ตา<br>";
        document.getElementById("award").innerHTML = "<b>&#x2022;รางวัล</b>";
        document.getElementById("awards").innerHTML = "&nbsp;&nbsp;การแข่งขันทักษะวิชาชีพทักษะเมคคาทรอนิกส์และหุ่นยนต์ปวส.ระดับ<br>&nbsp;&nbsp;ชาติ</b><br>&nbsp;&nbspรางวัลชนะเลิสอันดับที่1";
    } else {
        // Change content to English
        document.getElementById("namest").innerHTML = "Baramee Phumphan";
        document.getElementById("position").innerHTML = "Mechatronicain";
        document.getElementById("contact").innerHTML = "ContactInfo";
        document.getElementById("diploma").innerHTML = "Diploma Degree";
        document.getElementById("live").innerHTML = "1268 Mittraphap Road<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nai Meung Meung <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nakhonrahasima";
        document.getElementById("eduction").innerHTML = "Eduction";
        document.getElementById("year3").innerHTML = "2021 - 2023";
        document.getElementById("eduction3").innerHTML = "Diploma Degree";
        document.getElementById("college2").innerHTML = "Nakhonrahasima Technical College";
        document.getElementById("year2").innerHTML = "2018 - 2021";
        document.getElementById("eduction2").innerHTML = "Vocational Certificate";
        document.getElementById("college1").innerHTML = "Nakhonrahasima Technical College";
        document.getElementById("year1").innerHTML = "2015 - 2018";
        document.getElementById("eduction1").innerHTML = "Ninth Grade";
        document.getElementById("school").innerHTML = "Ubolratanarajkanyaratchawitthayalai Nakhonratchasima School";
        document.getElementById("languages").innerHTML = "Language";
        document.getElementById("language").innerHTML = "English";
        document.getElementById("skills").innerHTML = "Mechatronic Skills";
        document.getElementById("program").innerHTML = "Programming: C++, C#, HTML5, CSS";
        document.getElementById("electric").innerHTML = "Electrical Skill";
        document.getElementById("proplc").innerHTML = "PLC Skill";
        document.getElementById("autocad").innerHTML = "Design: AutoCAd";
        document.getElementById("titlepf").innerHTML = "Profile";
        document.getElementById("titlepf2").innerHTML = "I am an mechatronic specialized in circuit design and development, boasting a wealth of experience in various projects that demand an in-depth understanding of system capabilities, as well as the adeptness to tackle intricate issues.<br>Proficient in designing electrical circuits and programming PLCs<br>I am both a creator and an innovator of products tailored to meet diverse customer and industry needs.<br>";
        document.getElementById("titlets").innerHTML = "Technical Skills";
        document.getElementById("abilities").innerHTML = "Abilities:";
        document.getElementById("electrical").innerHTML = "<b>&#x2022;Electrical Expertise</b>";
        document.getElementById("electricals").innerHTML = "&nbsp;&nbsp;I bring expertise as an accomplished electrical control &nbsp;&nbsp;panel designer adept at utilizing AutoCAD for circuit &nbsp;&nbsp;design and meticulous wiring. My specialization lies in &nbsp;&nbsp;crafting visually captivating and meticulously organized &nbsp;&nbsp;interior designs for control panels. My proficiency &nbsp;&nbsp;extends to a profound understanding of electrical &nbsp;&nbsp;components and precision in energy efficiency &nbsp;&nbsp;calculations, all underscored by a strong commitment &nbsp;&nbsp;to safety and user convenience.";
        document.getElementById("plcpro").innerHTML = "<b>&#x2022;PLC Programming</b>";
        document.getElementById("plcpros").innerHTML = "&nbsp;&nbsp;I possess extensive knowledge and experience in PLC &nbsp;&nbsp;programming. I specialize in designing and improving &nbsp;&nbsp;control systems with a strong emphasis on safety and &nbsp;&nbsp;efficiency standards. These skills are crucial for &nbsp;&nbsp;producing high-quality products and systems in the &nbsp;&nbsp;industrial sector. My expertise in PLC programming also &nbsp;&nbsp;includes optimizing user-friendly system operations. &nbsp;&nbsp;Additionally, I excel in collaborating with others to create &nbsp;&nbsp;modern and efficient products that meet market &nbsp;&nbsp;demands effectively.";
        document.getElementById("prol").innerHTML = "<b>&#x2022;Programming Languages</b>";
        document.getElementById("prols").innerHTML = "&nbsp;&nbsp;C#: Proficient in C# for versatile software development.<br>&nbsp;&nbsp;C++: Experienced in C++ programming for diverse &nbsp;&nbsp;applications.<br>&nbsp;&nbsp;HTML5: Expertise in crafting interactive web content.<br>&nbsp;&nbsp;CSS: Adept at creating visually appealing web designs.<br>";
        document.getElementById("award").innerHTML = "<b>&#x2022;Award</b>";
        document.getElementById("awards").innerHTML = "&nbsp;&nbsp;<b>National Vocational Skills Competition</b><br>&nbsp;&nbsp;Mechatronics and Robotics Skills, 1st Place at the &nbsp;&nbsp;Diploma Level";
    }
}
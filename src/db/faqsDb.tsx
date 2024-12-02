const faqsDb = [
  {
    id: 1,
    ask: '1. Tổ Sư Thiền là gì?',
    reply:
      'Tổ-sư-thiền là pháp Thiền-trực-tiếp do phật Thích-ca đích thân truyền cho sơ Tổ Ma-ha-ca-diếp, rồi truyền cho nhị Tổ A-nan, tam Tổ Thương-na-hòa-tu, từ Tổ từ Tổ truyền xuống, đến Tổ thứ 28 là Bồ-đề-đạt-ma truyền sang Trung quốc làm sơ Tổ Trung-quốc rồi truyền cho người Trung quốc là nhị Tổ Huệ Khả, tam Tổ Tăng Xán, tứ Tổ Đạo Tín, ngũ Tổ Hoằng Nhẫn, lục Tổ Huệ Năng... Đến Thầy Thích Duy Lực là đời thứ 88 (kể từ Tổ Ca-diếp).',
  },
  {
    id: 2,
    ask: '2. Những Điều Cần Lưu Ý Khi Tham Tổ Sư Thiền',
    reply:
      '✅ 1 – PHÁ NGÃ CHẤP / ' +
      '📌 Theo Phật pháp, bất cứ Tiểu thừa, Trung thừa, Đại thừa, cho đến Tối thượng thừa, chẳng có thừa nào là không phá ngã chấp cả. / ' +
      '📌 Nếu không phá ngã chấp thì không được giải thoát cái khổ sanh tử, không được ra khỏi sanh tử luân hồi. / ' +
      '📌 Vậy tham thiền phải phá ngã chấp bằng cách nào? Là bằng chín chữ: “VÔ SỞ ĐẮC, VÔ SỞ CẦU, VÔ SỞ SỢ” đó là cái căn bản để thực hành phá ngã chấp. / ' +
      '📌 Nếu có sở đắc là còn chấp ngã, có sở cầu là còn chấp ngã, có sở sợ là còn chấp ngã. / ' +
      '✅ 2 – PHÂN BIỆT HỔ NGHI VÀ CHÁNH NGHI / ' +
      '📌 THAM THIỀN là CHÁNH NGHI. Chánh nghi là chỉ cho tâm Nghi, chứ không cho tâm đi tìm hiểu so sánh, để nuôi cái NGHI TÌNH cho thật mạnh. / ' +
      '📌 Khi NGHI TÌNH mạnh tới cùng tột, thình lình bùng nổ gọi là KIẾN TÁNH. Kiến tánh là giác ngộ, là biết được chính mình mới làm chủ được mình. / ' +
      '📌 Tự làm chủ được mới tự do tự tại được. Tự do tự tại là vĩnh viễn giải thoát tất cả khổ, cho nên gọi là KIẾN TÁNH THÀNH PHẬT. / ' +
      '📌 Còn hồ nghi là lấy tâm đi tìm hiểu, hoặc giải thích câu thoại đầu cho ra đáp án, đó không phải là tham thiền, hồ nghi chỉ có thể được giải ngộ, chứ không được chứng ngộ, / ' +
      'cũng như nhà khoa học Newton thấy trái táo từ trên cây rơi xuống mà sanh ra Nghi vấn: Tại sao trái táo rớt xuống đất mà không bay lên trời? / ' +
      '📌 Từ đó, ông lấy tâm đi nghiên cứu tìm hiểu, cuối cùng ngộ được: Lực hấp dẫn vạn vật. Đó là hồ nghi. / ' +
      '📌 Hồ nghi chỉ có thể phát minh được đồ dùng của thế gian, chỉ có giá trị đối với thế gian vì không ngộ được chính mình nên không làm chủ mình được, ' +
      'không đạt đến tự do tự tại được. / ' +
      '✅ 3- CHẲNG CHO KHỞI BIỆT NIỆM / ' +
      '📌 Ngoài nghi tình ra không cho khởi niệm khác, không cho đè nén vọng tưởng, không cho buông bỏ vọng tưởng, ' +
      'cũng không cho trừ vọng tưởng, vọng tưởng khởi lên bao nhiêu cũng mặc kệ không cần biết tới có vọng tưởng hay không có vọng tưởng, ' +
      'vì nghi tình chính là cây chổi automatic, không cần sự tác ý, tự nó quét sạch tất cả. ' +
      '📌 Có vọng tưởng cũng quét, không có vọng tưởng nó cũng quét. Nếu nghi tình được miên mật thì tất nhiên vọng tưởng không có kẽ hở mà nổi lên, ' +
      'hễ có khởi lên một niệm khác tức là đã có kẽ hở rồi. / ' +
      '✅ 4 – NHÂN QUẢ, NGHI NGỘ / ' +
      '📌 Phải biết Nghi là Nhân, Ngộ là Quả. Không có nhân thì không có quả cho nên bất Nghi bất Ngộ, nhân nhỏ quả nhỏ, cho nên tiểu Nghi tiểu Ngộ, Nhân lớn Quả lớn cho nên Đại nghi Đại ngộ. / ' +
      '📌 Nếu Tham thiền lúc Nghi tình nặng, ảnh hưởng đến nhức đầu, tức ngực, khó thở, đó là đại nghi. ' +
      '📌 Khi đó, thì nhức nhiều chừng nào thì tốt chừng nấy, chớ nên sợ, đó là tình hình tốt bởi vì Đại nghi sẽ được Đại ngộ. / ' +
      '📌 Nhưng lúc ngồi mà có tình trạng như vậy thì không được. Không được thì phải làm sao? ' +
      '📌 Phải mau mau đứng dậy kiếm công việc làm nhưng vẫn phải tiếp tục tham cứu. ' +
      '📌 Nếu tham tới cảm thấy thần kinh căng thẳng quá chịu không nổi thì câu thoại đầu phải đề chậm lại từng chữ một, chậm thật chậm, ' +
      'mỗi chữ kéo dài độ 10 giây như vậy sự căng thẳng thần kinh sẽ dần dần được giải tỏa. / ' +
      '✅ 5- CHẲNG PHÂN BIỆT TƯ CÁCH / ' +
      '📌 Tham Tổ Sư Thiền không kể sơ tham, lão tham, thông minh, dốt nát, ngu si, người già hay trẻ con. / ' +
      '📌 Trong Kinh Pháp Hoa: Long Nữ 8 tuổi được thành Phật. Truyền Đăng Lục (lịch sử thiền tông Trung Hoa) có một cô họ Trịnh 13 tuổi kiến tánh, một cô họ Tô 15 tuổi được kiến tánh và nhiều Tổ ngu si dốt nát cũng Tham thiền được kiến tánh.  / ' +
      '📌 Người Tham thiền chỉ cần thống thiết vì việc sanh tử, dũng mãnh tham cứu thì bất cứ người nào cũng có thể kiến tánh thành Phật, ' +
      'không nên tự khinh khả năng thành Phật của mình. / ' +
      '✅ 6 – THÂM TÍN TỰ TÂM / ' +
      '📌 Tham thiền phải tin tự tâm, nếu chỉ tin pháp môn tham Thiền mà không tin tự tâm thì dù tinh tiến đến mức nào cũng không được kiến tánh, ' +
      'nên Ngài Bác Sơn nói: Tin có chánh, tà; tin “tự tâm tức Phật” là chánh, ngoài tâm chấp có pháp gọi là tà; ' +
      '“tức Phật” là cần phải tham cứu cho sáng tỏ tự tâm và phải đích thân dẫm đến tới chỗ chẳng nghi mới gọi là chánh tín, ' +
      'còn như mập mờ, lầm lạc, đoán mò chỉ nói “tức tâm tức Phật” mà thật không muốn tham cứu rõ tự tâm thì gọi là tà tín. / ' +
      '✅ 7 – PHẢI NGỘ TỰ TÁNH / ' +
      '📌 “Hàn lu trục khối, sư tử giảo nhân” (Chó Hàn đuổi cục xương, sư tử thì cắn người). / ' +
      '📌 Đây là hai câu thí dụ của Tổ Sư, nghĩa là: Một người quăng cục xương, con chó đuổi theo cục xương mà cắn, ' +
      'còn con sư tử thì không ngó tới cục xương, cứ cắn ngay người đó. ' +
      '📌 Người đó dụ cho Tự Tánh, cục xương dụ cho lời nói của Tổ, của Phật. ' +
      '📌 Nếu hướng vào lời nói của Tổ, của Phật mà ngộ là con chó, hướng vào Tự Tánh mà ngộ là con sư tử. ' +
      '📌 Cổ Đức nói: “Tử ư cú hạ” (chết trong ngữ cú), “Hướng cử khởi xứ thừa đương” (hướng vào chỗ lời nói mà nhận lấy), ' +
      'nghĩa là lời nói của Tổ vừa nói ra, vừa nghe hiểu liền cho đó là ngộ, ' +
      'nhưng sự hiểu ngộ đó còn nằm trong ý thức phân biệt, mặc dù đúng lý thế gian rất lô-gích, ' +
      'nhưng vì chẳng biết cần phải lìa ý thức mới chứng ngộ được. ' +
      '📌 Cho nên bị Tổ chê là Hàn lu (loại chó mực rất thông minh ở nước Hàn). / ' +
      '✅ 8 – KHÔNG LỌT VÔ KÝ / ' +
      '📌 Tham thiền nên tránh lọt vào “Vô ký không”. Pháp môn khác chỉ cầu được dứt niệm, ' +
      'nhưng Tham thiền trái lại không cho dứt niệm tức là Nghi tình phải luôn luôn tiếp tục, không cho gián đoạn. / ' +
      '📌 Nếu không có Nghi tình cũng không có vọng tưởng thì lọt vào Vô Ký Không là một thứ thiền bệnh, ' +
      '📌 Tổ Sư gọi là “ngâm nước chết”, mặc dù lúc ấy cảm thấy được thanh thanh tịnh tịnh, ' +
      'trong mình cảm thấy nhẹ nhàng nhưng chấp lấy cái đó thì vĩnh viễn không được kiến tánh, ' +
      'chẳng thà có Nghi tình, có vọng tưởng còn tốt hơn. Vậy tham thiền nếu chưa đến thoại đầu chớ nên bỏ câu thoại; ' +
      'có người bỏ câu thoại vẫn còn Nghi tình cho là tốt. Thực thì không đúng, vì có thể bị gián đoạn một khoảng thời gian lâu mà tự mình không hay, ' +
      'lại cũng dễ bị lọt vào vô Ký không nữa. / ' +
      '✅ 9 – HÀNH KHỞI GIẢI TUYỆT / ' +
      '📌 Theo giáo môn thông thường, sự tu hành phải trải qua bốn giai đoạn là: Tín, giải, hành, chứng. / ' +
      '📌 Ban đầu do tin rồi đi tìm hiểu (giải), theo sự hiểu mà thực hành, vừa thực hành vừa tìm hiểu thêm, vừa hiểu thêm vừa thực hành thêm từng bậc tiến lên chứng từ thập tín, thập trụ, thập hạnh, thập hồi hướng, thập địa cho đến đẳng giác, diệu giác. ' +
      '📌 Đó là cách tu thông thường. Còn Tổ Sư thiền thì không phải vậy. Trước tiên cũng phải có tin, có hiểu, nhưng khi bắt đầu thực hành thì không được tìm hiểu nữa. ' +
      '📌 Thiền môn gọi là “Hành khởi giải tuyệt” tức là đã bắt đầu tham thiền rồi thì sự tìm hiểu kiến giải phải chấm dứt. ' +
      '📌 Cho nên Tham thiền không cho hiểu thiền, hiểu đạo. Tại sao vậy? Vì đang tham thiền là đã có thiền, có đạo rồi. ' +
      '📌 Nếu đi tìm hiểu thiền hiểu đạo nữa thì cũng như mình đã có một cái đầu rồi còn sinh thêm một cái đầu thứ hai nữa. ' +
      '📌 Tổ Sư gọi: “Đầu thượng an đầu” (trên đầu thêm đầu) thì cái đầu thứ hai, không những không có ích cho cái đầu bổn lai, lại còn làm chướng ngại khổ sở cho cái đầu bổn lai nên phải mời Bác sĩ cắt bỏ mới được khôi phục sức khỏe lại. ' +
      '📌 Vậy hiểu thiền hiểu đạo còn không cho huống là đi tìm hiểu cái khác nữa. ' +
      '📌 Phải biết rằng ham tìm hiểu rất chướng ngại cho sự chứng ngộ. Thế nên “Hành khởi giải tuyệt” là vậy. / ' +
      '✅ 10 – CHÚ TRỌNG THỰC HÀNH / ' +
      '📌 Tổ Sư Thiền chỉ chú trọng thực hành không cần lý luận, nhưng khi đang thực hành sẽ tùy theo căn cơ trình độ khác biệt, tình chấp nặng nhẹ, ' +
      'kiến giải cao thấp và sự ham thích bất đồng của mỗi người mà sinh ra muôn ngàn lối tẻ sai biệt, ' +
      'cho nên quyển sách này chỉ được nêu ra những điều thực hành chung, còn nhiều chi tiết vi tế không thể kể hết ở trong này, ' +
      'phải tùy bệnh mà cho thuốc, vì thế mặc dù cách Tham thoại đầu rất dễ nhưng cũng phải có người lão Tham hướng dẫn mới được. ' +
      '📌 Nếu tự làm tài khôn mà không đi đúng với tôn chỉ chính xác tủa Tổ Sư Thiền thì sẽ có thể trở thành phỉ báng Phật pháp, ' +
      'tạo tội địa ngục mà tự mình không biết, xin người học thiền để ý cho.',
  },
  {
    id: 3,
    ask: '3. Tại sao pháp Tham Tổ Sư thiền dễ tu mà người ta không chịu tu?',
    reply:
      '📌 Vì người ta khó tin, lại cứu lý tìm hiểu; Tổ Sư thiền là không cho cứu lý, không cho tìm hiểu. ' +
      '📌 Nếu tin được thì dễ hơn các pháp môn khác. Nhưng nghịch với tư tưởng người ta, tức là không tin được tự tâm. ' +
      '📌 Họ tưởng là biết nhiều chừng nào tốt chừng nấy, nhưng sự thật hiểu biết đó là chướng ngại, Phật pháp gọi là sở tri chướng. / ' +
      '📌 Dẫu cho, hiểu biết của thế gian đã sạch, còn hiểu biết của xuất thế gian cũng là cực vi tế sở tri chướng. ' +
      '📌 Bộ óc không hiểu gọi là phiền não chướng, hiểu rồi gọi là sở tri chướng. Cho nên, người ta khó lãnh hội được chỗ này. ' +
      '📌 Vì cuộc sống hàng ngày đều phải dùng đến bộ óc, bây giờ bỏ hoạt động của bộ óc thì người ta không chịu.',
  },
  {
    id: 4,
    ask: '4. Xã hội ngày nay khoa học tiến bộ, con người không được rảnh rang như người xưa, nên không để ý sự tu, nhất là tu Tổ Sư thiền rất khó, vậy có phải không?',
    reply:
      '📌 Vì hiểu theo người thế gian, như nhà triết học, nhà khoa học,... thì sự tu của họ lại khó. ' +
      '📌 Vì cuộc sống hằng ngày đều phải dùng bộ óc để nghiên cứu triết học hay nghiên cứu khoa học, bất cứ nghiên cứu cái gì đều cũng nhờ bộ óc. ' +
      '📌 Nếu bây giờ chấm dứt hoạt động của bộ óc thì người ta phản đối, họ cho “đồ khùng”. Phải rồi, vì theo tư tưởng thế gian là vậy. / ' +
      '📌 Cho nên, thiền giải đáp công án ở Nhật Bản dễ truyền khắp thế giới. Hiện nay người Trung Quốc cũng đi học thiền giải công án, rồi về dạy cho người Hoa. ' +
      '📌 Chùa Cao Mân là Tổ đình của Thiền Tông nhưng cũng lọt vào kiến giải. ' +
      '📌 Ngày xưa Ngài Lai Quả không cho người ta giảng công án, khi tôi ở đó thấy đêm nào có vị Trưởng lão đều giảng công án.',
  },
  {
    id: 5,
    ask: '5. Những pháp thiền của các tôn giáo khác là để ngưng hoạt động của bộ óc hay để im lặng, vậy có khác với cách tu của Tổ Sư thiền không?',
    reply:
      '📌 Các thiền của tôn giáo khác là mục đích bỏ nhiễm duyên lấy cái tịnh duyên cho là ngộ. / ' +
      '📌 Tịnh duyên đối với nhiễm duyên thì tốt, còn đối với bản thể Phật tánh là chướng ngại. Bởi vì đối  với nhiễm nên mới nói tịnh thì còn nằm trong tương đối, tức là những thứ ấy có thể dùng bộ óc để giải thích được. / ' +
      '📌 Tổ Sư thiền không thể giải thích, tại bộ óc không thể tiếp xúc được, phải ngộ mới biết. / ' +
      '📌 Ngộ biết không phải cái biết của bộ óc là cái biết của Phật tánh, gọi là Bát Nhã. Ngộ là Phật tánh hiện lên, chứ không phải có năng ngộ sở ngộ. ' +
      '📌 Nếu có năng ngộ sở ngộ thì không được, vì còn có 4 tướng (ngã tướng, nhân tướng, chúng sanh tướng, thọ giả tướng).',
  },
  {
    id: 6,
    ask:
      '6. Tham Thiền Phổ Thuyết nói “người thích vật hoặc theo tình cảm, xưng hô lễ phép ấy là tình; lời nói, vấn đáp kiến giải hiểu biết ấy là thức. Chính tình thức làm cho thiền đường suy tệ”. Xin Sư Phụ khai thị?',
    reply:
      '📌 Cuộc sống hàng ngày, tất cả đều dùng tình thức. Kinh Lăng Nghiêm nói “tình nhiều chừng nào đọa xuống nhiều chừng nấy”, tình chỉ có đọa, không có lên; tưởng có cái đọa, có cái lên. ' +
      '📌 Như thiền quán tưởng thì lên, tưởng bậy bạ thì đọa. Thức là phân biệt, tánh của mình muốn cái tốt chê cái xấu. / ' +
      '📌 Như bây giờ vì phân biệt mà xẩy ra chiến tranh đổ máu. / ' +
      '📌 Cọp đối với con nó có tình thương mẹ con, nhưng phân biệt không phải con của nó, thì xé thịt cho con nó ăn. / ' +
      '📌 Người có kiến giải cao, nhưng ác hơn cọp không biết bao nhiêu lần. / ' +
      '📌 Cọp đói mới ăn thịt loại khác, con người chưa đói lại muốn hại người khác, vì muốn cho mình có nhiều tiền; do tiền mà anh em cha mẹ cũng hại được. / ' +
      '📌 Cọp không bao giờ giết hại đồng loại, vì lợi ích nên con người giết hại đồng loại; có khi giết một cách thê thảm, đó là do kiến giải mà ra. / ' +
      '📌 Bởi kiến giải, họ tổ chức chính trị ra lịnh giết biết bao nhiêu triệu người.',
  },
  {
    id: 7,
    ask:
      '7. Phương pháp tham Tổ sư thiền miên mật không có kẻ hở, nếu có kẻ hở thì vọng tưởng xen vào. / ' +
      'Vậy những người tham thiền ở công sở phải suy nghĩ thì có thích hợp với họ không?',
    reply:
      '📌 Thích hợp, ngày đêm là 24 tiếng, nếu có 10 tiếng làm việc thì cứ làm việc, đừng tập tham thiền; còn lại 14 tiếng thì tập tham thiền. / ' +
      'Khi nào 14 tiếng này tập tham thiền thành quen thuộc tự động. / ' +
      'Như tập xe đạp, ban đầu hai tay vịn nó cũng ngã lên ngã xuống, sau này hai tay vịn nó không ngã, sau này buông tay cũng không ngã, / ' +
      'sau này quẹo khỏi cần tay cũng quẹo được. Cần tập cho quen được tự động, lúc đang làm việc tự động thì mình không biết; / ' +
      'lúc ấy bộ óc không biết, nhưng cái biết của Phật tánh thay thế. Cho nên làm đúng hơn, nhanh và tỉ mỉ hơn.'
  },
  {
    id: 8,
    ask:
    '8. Đường lối Tổ sư thiền là nghĩ đến câu thoại đầu phải không?',
    reply:
    '📌 Không phải nghĩ! Mà hỏi và nhìn. Đến thoại đầu, theo người ta cho là điên khùng, nhưng chỗ đó là sắp kiến tánh. / ' +
    'Bây giờ, mình bắt đầu tham là mục đích đến thoại đầu, chưa đến thoại đầu là tham thoại đầu và khán thoại đầu. / ' +
    'Chỉ giữ nghi tình mà không có niệm muốn đến thoại đầu thì mới đến thoại đầu.'
  },
  {
    id: 9,
    ask:
      '9. Tâm không định làm sao tham thiền được?',
    reply:
      '📌 Đừng để ý tâm định hay không định, nên phải tập tham, nếu tham thiền mỗi ngày tăng được 1 phút thì 1 tháng tăng được 30 phút, 1 năm được 6 giờ, 4 năm tham được 24 giờ trong 1 ngày đêm thì đến thoại đầu. / ' +
      'Đến thoại đầu trong thời gian ngắn sẽ được kiến tánh. Nếu 1 ngày tăng được nửa phút thì 8 năm đến thoại đầu, 1 ngày tăng được ¼ phút thì 16 năm đến thoại đầu. / ' +
      'Tại sao dùng cái không biết để chấm dứt tất cả biết (tìm hiểu biết, suy nghĩ biết, ghi nhớ biết)? Vì cái biết đó là ý thức hoạt động. / ' +
      'Ngũ Đình Tâm Quán của Tiểu thừa mục đích đình chỉ hoạt động của tâm, hiện nay có người đang tu Sổ Tức Quán, nhưng họ tu còn rất thô nên không được chứng quả. / ' +
      'Không biết là phiền não chướng, biết là sở tri chướng. Những người tu Sổ Tức Quán còn dùng cái biết thô, chưa đến chỗ vi tế. / ' +
      'Vi tế sở tri ngu, còn tiến thêm là cực vi tế sở tri ngu. Vừa rồi nói sở tri chướng là ngu, nhưng người ta chưa tu đến mức đó.'
  },
  {
    id: 10,
    ask:
      '10. Hỏi câu thoại đầu muốn hiểu, giải đáp ra thì như thế nào?',
    reply:
      '📌 Tham thiền không dùng bộ óc tìm hiểu, cứ hỏi thầm trong bụng, có hỏi phải có đáp, hỏi không hiểu thì đáp không ra, tức lắm, hỏi nữa, khi nào thình lình đáp ra là kiến tánh. / ' +
      'Đáp ra được không phải do bộ óc tìm hiểu mà đáp ra, đáp ra là thình lình bừng sáng khắp không gian thời gian, tức là hiện lên bản thể, không phải do lời nói mà đáp.',
  },
  {
    id: 11,
    ask:
      '11. Thiết nghĩ, con đã trôi lăn trong biển sanh tử nhiều kiếp tạo nghiệp sâu dầy, nay tuy gặp chánh pháp, / ' +
      'nếu chỉ có câu tham thoại đầu trừ vọng tưởng thì đủ giải thoát không? / ' +
      'Lại nữa, chư Tổ dạy tụng kinh, niệm Phật, trì chú để chúng sanh bớt nghiệp chướng, tạo thêm phúc đức trợ duyên trên đường tu hành. / ' +
      'Vậy con có nên cùng tham thiền và tụng kinh, niệm Phật, trì chú được không?',
    reply:
      '📌 Nói tham thiền để trừ vọng là sai lầm, vì vọng tưởng là vô minh mới có; chứ không phải Phật tánh có vọng tưởng, Phật tánh là bất nhị, siêu việt số lượng. / ' +
      'Bản thể Phật tánh cùng khắp không gian thời gian. Nếu nổi vọng tưởng là có số lượng, có nổi tâm trừ vọng tưởng là hai lớp vọng. / ' +
      'Cho nên tu hành trừ vọng tưởng là sai lầm lớn. / ' +
      '📌 Tụng kinh là mục đích để biết ý của Phật dạy, mình theo đó để tu, chứ không phải tụng kinh để cho Phật nghe, mà nói là có công đức. / ' +
      'Kinh là lời Phật dạy nên Phật đâu cần nghe! / ' +
      '📌 Dùng niệm Phật, niệm chú để trừ vọng tưởng sẽ phát lên nguy hiểm, vọng tưởng được trừ, có sức định cao thì sẽ bị tẩu hỏa nhập ma, phát điên, ói máu. ' +
      'Sự thật tôi gặp người tu ở Việt Nam rất nhiều trong những trường hợp này. ' +
      'Những người không biết ý của Phật dạy, tưởng là tu để trừ vọng tưởng, đó là sai lầm rất lớn; mà bây giờ rất phổ biến trong giới Phật tử, ấy rất nguy hiểm. ' +
      'Tu hành uổng công, có quả không tốt. / ' +
      '📌 Phật dạy mình tin tự tâm, tất cả thần thông trí huệ bằng như Phật, không kém hơn Phật một chút nào. / ' +
      'Tham thiền là phát hiện cái mình sẵn có cùng khắp không gian thời gian, không có cái nào mà làm không được. ' +
      'Con dơi có ra đa là bản năng đầu thai thành con dơi phải có ra đa, con ong có kiến trúc, nhà kiến trúc học kiến trúc của con ong. / ' +
      'Kiến trúc của con ong không phải do học mà có, nó theo nghiệp mà có. Tham thiền không phải để tiêu nghiệp, nghiệp vốn không có, vì tâm mình tạo mới có. / ' +
      'Ngưng tâm không tạo nữa thì nghiệp ở đâu? Khỏi cần tiêu mà nó tự tiêu. Tâm tạo rồi tiêu, tiêu rồi tạo nữa, khi nào mới tiêu hết! / ' +
      '📌 Tu hành không phải để tiêu nghiệp, nghiệp khỏi cần tiêu, vọng tưởng khỏi cần trừ. Tự tánh mình là bất nhị, không có vọng tưởng, không có nghiệp chướng. / ' +
      'Thiền tông nói “nghiệp chướng bổn lai không” (nghiệp chướng vốn là không). / ' +
      'Kệ truyền pháp của 7 Phật trước Phật Thích Ca nói “không có nghiệp chướng”. / ' +
      '📌 Trong Thiền tông có công án: / ' +
      'Tăng hỏi Tổ kiến tánh: muốn trừ nghiệp chướng phải làm sao? / ' +
      'Tổ nói: nghiệp chướng bổn lai không. / ' +
      'Tăng hỏi: thế nào là bổn lai không?  Tổ nói: nghiệp chướng.  Tăng hỏi: thế nào là nghiệp chướng? / ' +
      'Tổ nói: bổn lai không. / ' +
      '📌 Nếu thật có nghiệp chướng, mình từ vô thỉ đến bây giờ đã tạo biết bao nhiêu nghiệp chướng, làm sao trừ cho hết! / ' +
      'Nhưng khỏi cần trừ, ngộ là xong. Nghiệp chướng ở trong chiêm bao, thức tỉnh chiêm bao thì nghiệp chướng đi đâu tìm! / ' +
      'Người ta thật sự không tu hành nên không hiểu được nghĩa này; / ' +
      'tự mình không biết rồi lấy cái sai lầm dạy người khác, thành ra vĩnh viễn ở trong biển khổ không ra được. / ' +
      'Vì vọng tưởng làm sao trừ, nghiệp chướng làm sao tiêu? Tham thiền là phát hiện nghiệp chướng, vọng tưởng vốn không có. / ' +
      'Không tạo nghiệp chướng, vọng tưởng thì không có nghiệp chướng, vọng tưởng. Do mình tạo nghiệp chướng, vọng tưởng nên mới có cái để trừ. / ' +
      'Không có vọng tưởng để trừ và không có nghiệp chướng để tiêu. Cho nên chư Tổ nói “không cần phí sức”. / ' +
      'Nếu đạt đến chỗ ít phí sức là được, có còn trừ vọng tưởng và tiêu nghiệp chướng là sai lầm lớn. / ' +
      'Tham câu thoại đầu mặc dù không tiêu nghiệp chướng và không trừ vọng tưởng, nhưng tự nhiên automatic trừ vọng tưởng và tiêu nghiệp chướng. / ' +
      '📌 Tại sao? Vì nghiệp chướng và vọng tưởng đều do bộ óc biết mới có, giữ không biết của bộ óc thì tự tiêu. / ' +
      'Những người tụng kinh, niệm Phật cứ suy nghĩ hoài, tạo hoài, làm sao tiêu trừ được! / ' +
      'Giữ được nghi tình là không tạo nữa, khi nào ngộ thì vọng tưởng nghiệp chướng hết. / ' +
      'Bát Nhã Tâm Kinh nói “vô vô minh diệc vô minh tận” (không có vô minh cũng không có hết vô minh), không có vô minh làm sao có vọng tưởng? / ' +
      'Có vô minh nên có vọng tưởng, có vô minh nên có nghiệp chướng. / ' +
      'Không có hết vô minh, nếu có vô minh mới có hết vô minh; tức là không có hết vọng tưởng nghiệp chướng, vì vọng tưởng nghiệp chướng vốn không có. / ' +
      '“Vô lão tử diệc vô lão tử tận” (không có già chết cũng không có hết già chết), sanh tử là chúng sanh, hết sanh tử là Phật. / ' +
      '📌 Kinh nói rõ ràng không chịu tin, cứ tạo nghịch lại cho là đúng! Mình đã sai, mà lại trách người đúng. Tại sao Giáo môn tụng kinh rồi tụng Bát Nhã? / ' +
      'Vì sợ người ta tụng kinh xong chấp kinh đó. Cho nên sau cùng một thời kinh, tụng Bát Nhã để quét sạch vừa rồi tụng. / ' +
      'Tuy nhiên, người tụng chỉ biết nhắm mắt tụng, chứ không biết kinh nói gì; cho là tụng kinh để tiêu nghiệp chướng. / ' +
      'Tại sao tụng kinh rồi không y theo mà làm, lại nghịch với kinh? Nghịch với kinh đã có tội, lại trách người đúng. / ' +
      'Người ta y theo kinh cho là sai, nghịch với kinh cho là đúng. Rất điên đảo!'
  },
  {
    id: 12,
    ask:
      '12. Khi mình đọc thoại đầu, bổng nhiên không còn nghi tình, mà nó giống như qua đi qua đi và trở thành trạng thái niệm thoại đầu. / ' +
      'Như trong trường hợp đó phải như thế nào?',
    reply:
      '📌 Niệm thoại đầu chỉ có thể trừ vọng tưởng, không đạt đến kiến tánh. / ' +
      'Tham thiền không phải trừ vọng tưởng, vọng tưởng khỏi cần trừ. / ' +
      'Niệm thoại đầu để trừ vọng tưởng là sai lầm. / ' +
      '📌 Nếu không phát khởi nghi tình, nhưng cũng phải hỏi hoài thì sẽ phát khởi nghi tình. / ' +
      'Bởi vì câu thoại đầu là có dấu hỏi. / ' +
      '📌 Như câu “Khi chưa có trời đất ta là cái gì?” / ' +
      'Có trời có đất thì mình ngồi đây, chưa có trời đất mình ở đâu không biết? / ' +
      'Cái không biết là nghi tình tức tham thiền rồi, rất giản dị chỉ cần không biết, việc thế gian muốn biết rất khó, không biết thì dễ. / ' +
      'Cho nên con nít 6, 7 tuổi cũng biết tham thiền. Hỏi câu thoại chứ không phải niệm câu thoại, hỏi đến khi nào thình lình đáp ra được, gọi là kiến tánh (chứng ngộ). / ' +
      'Nhưng khi đáp ra không phải có gì đáp ra, tức là bùng nổ phát hiện bản thể mình cùng khắp không gian thời gian, không có chỗ nào không biết, không có lúc nào không biết. / ' +
      '📌 Bộ óc ngủ mê không biết, chết giấc không biết, chết rồi không biết; cái biết Phật tánh gọi là chánh biến tri thì ngủ mê vẫn biết, chết rồi vẫn biết, chết giấc vẫn biết. / ' +
      'Nếu chết rồi không biết thì không phải cái biết của Phật tánh. / ' +
      'Cái biết Phật tánh khắp không gian thời gian, khắp không gian không có chỗ nào không biết. / ' +
      'Nếu có một chỗ không biết, không phải cái biết của Phật tánh. / ' +
      'Tham thiền là phát hiện cái biết Phật tánh thì phải dẹp cái biết của bộ óc. Vì cái biết Phật tánh bị cái biết bộ óc che khuất nên không hiện lên được. / ' +
      '📌 Kinh Viên Giác thí dụ “vàng thật đã thành sẵn trong quặng, nhưng lộn với đất cát tạp chất, nên vàng thật không hiện ra; vì vậy phải luyện bỏ đất cát tạp chất, vàng thật mới hiện ra”. / ' +
      'Nếu trong quặng không có vàng thật, luyện cách mấy cũng không có vàng thật hiện ra. / ' +
      'Phật tánh của mình lộn với tham sân si, nên Phật tánh không hiện lên. / ' +
      'Tham sân si là cái biết của bộ óc, dẹp hết tham sân si thì Phật tánh hiện lên.'
  },
  {
    id: 13,
    ask:
      '13. Tham thoại đầu thường hay tìm ra giải pháp để trả lời câu thoại, làm sao để tránh trường hợp đó xảy ra',
    reply:
      '📌 Phải thống thiết việc sanh tử, giải quyết việc sanh tử là cần nhất. / ' +
      'Cái năng biết của bộ óc sau khi chết đem thiêu thành tro, đi chôn thành đất. / ' +
      'Như vậy còn biết để làm chi? Biết bao nhiêu cũng hết. / ' +
      'Cái biết Phật tánh không thể biến thành tro thành đất, vĩnh viễn như vậy gọi là như như bất động, luôn luôn cùng khắp không gian thời gian, không có biến đổi, không có tiêu diệt.',
  }
]
export default faqsDb;

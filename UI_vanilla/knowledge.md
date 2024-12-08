- thuộc tính: _attribute_
- thẻ: _tag_
- _css_ từ trên xuống dưới nếu có 2 css thì ưu tiên cái _ở dưới_
- _div_ là môt thẻ _block_ - _block_ là thẻ có độ _rộng_ = _100%_ phần tử chứa nó
- _img_ là một thẻ inline, tự đóng - hiển thị ảnh với 2 thuộc tính là _src_, _alt_
- _alt_ viết tắt của _alternate_ nó dùng trong việc _SEO_, hiển thị khi ảnh lỗi
- _span_ là thẻ inline, dùng cho đoạn chữ ngắn
- _class_ là thuộc tính để style
- thẻ tiêu đề _h1 h2 h3 h4 h5 h6_
- _h1_ mỗi trong tối đa chỉ có _1_ thẻ _h1_ - dùng cho tiêu đề lớn
- _h2_ dùng được nhiều, dùng trong 1 block to
- _h3_ dùng được nhiều, dùng trong 1 block nhỏ
- h4,5,6 tương ứng cho các tiêu đề
- thẻ _a_ thẻ inline, chắc chắn dùng cho liên kết, có 3 thuộc tính _href_ _taget_ _rel_
      khi dùng _target_ có giá trị là blank thì thẻ nên có _rel_ = _noopener_, _noreferrer_
- fonts : có sẵn ở GoogleFonts, 
- _color_: màu chữ,
- _background-color_: màu nền


- **box-sizing**
      - _content-box_: độ rộng bằng box-content + padding + border
      - _boder-box_ : độ rộng bao gồm padding và border

- _text-decoration_ : gạch dưới thẻ a
- _border-radius_ : đọ bo góc
- _flex_ : 
- _align-items_ : mặc định là `stretch` làm cho các cột cao bằng nhau, có `flex end`     `flex-start` `center` `baseline`
- _flex-wrap_ : mặc định là `no-wrap` không cho rớt xuống hàng khi quá width
- _pug_
- _position_ : có 5 giá trị chính: static, relative, absolute, sticky, fixed
      relative: khi sử dụng gtri này phải lưu ý con của nó có dùng absolute không?, khi sử dụng đi kèm có top right button left

_breakpoint_ : 320 480 768 1024 1200 1366 1440 1600 1920

_transform_ : translate, skew, rotate, scale
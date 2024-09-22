$(function() {
    // クラス名btnがクリックされたら
    $('.btn').on('click', function() {
        // クラス名text-boxの値を変更
        $('.text-box').val('クリックしました！');
    });
});
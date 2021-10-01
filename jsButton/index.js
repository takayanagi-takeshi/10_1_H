
function disp_string(btn_num) {
  console.log(btn_num);
  // disp_stringという関数の役割
  if (btn_num == 1) {
    document.getElementById('monitor').innerHTML = btn_num;
  //ボタン1が押された時 
  } else if (btn_num == 2) {
    document.getElementById('monitor').innerHTML = btn_num;
  //ボタン2が押された時
  } else if (btn_num == 3) {
    document.getElementById('monitor').innerHTML = btn_num;
  //ボタン3が押された時
  } else {
    // どれでもない時
  }
}


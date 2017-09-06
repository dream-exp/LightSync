export default class Wait extends React.Component {
  render() {
    return (
		<div className="wait">
			<img src="logo.gif" className="logo">
			<h3>まもなくファッションショーが始まります<br>以下の項目をご確認ください</h3>
			<p>上演中、お持ちのスマートフォンが周りのお客様に当たらないようご注意ください</p>
			<p>スマートフォンの画面の明るさを最大に、画面の自動オフ設定を解除することをおすすめいたします</p>
			<p>スマートフォンをできるだけ充電しておくことをおすすめいたします</p>
			<p>画面の色が変わらない場合はページを再読み込みすると直ることがあります</p>
		</div>
    );
  }
}
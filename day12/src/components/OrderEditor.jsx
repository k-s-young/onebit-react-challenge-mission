import { useState } from 'react'

const OrderEditor = () => {
  const [menu, setMenu] = useState('')
  const [address, setAddress] = useState('')
  const [request, setRequest] = useState('')

  const onChangeMenu = (e) => {
    setMenu(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const onChangeRequest = (e) => {
    setRequest(e.target.value)
  }

  const onSubmit = () => {
    alert(`주문 완료되었습니다.\n메뉴: ${menu}\n주소: ${address}\n배달 요청사항: ${request}`)
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          메뉴 선택
        </div>
        <select style={{ width: 300, padding: 5 }} onChange={onChangeMenu} value={menu}>
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소
        </div>
        <input
          onChange={onChangeAddress}
          value={address}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          onChange={onChangeRequest}
          value={request}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          style={{ width: 300, padding: 5 }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
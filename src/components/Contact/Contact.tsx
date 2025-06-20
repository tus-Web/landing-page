import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームの送信処理を行います
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます！確認後、ご連絡いたします。');
    setFormData({ name: '', email: '', studentId: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>お気軽にお問い合わせください</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>参加をお考えの方へ</h3>
            <p>
              Webサークルへの参加に興味をお持ちいただき、ありがとうございます！
              初心者の方も大歓迎です。まずはお気軽にご連絡ください。
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>webcircle@university.ac.jp</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>SNS</h4>
                  <p>@webcircle_uni</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>活動場所</h4>
                  <p>情報学部棟 3F PC室</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>活動時間</h4>
                  <p>毎週火曜日 18:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="studentId">学籍番号</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">メッセージ *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="参加への意気込みや質問など、何でもお聞かせください！"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import './JoinFlow.css';

const JoinFlow: React.FC = () => {
  const steps = [
    // {
    //   number: "01",
    //   title: "申し込みボタンを押す",
    //   description: "まずはページ下部の申し込みボタンから申し込みフォームへ進んでください。",
    //   icon: "🖱️"
    // },
    {
      number: "1",
      title: "公式LINEを友達追加",
      description: "まずは右上のLINE登録ボタンから、公式LINEを友達追加してください。公式LINEでは、活動の案内や質問対応を行っています。",
      icon: "💬"
    },
    {
      number: "2",
      title: "体験参加してみる",
      description: "LINEで案内される活動に体験参加して、サークルの雰囲気を掴んでみましょう。",
      icon: "🚀"
    },
    {
      number: "3",
      title: "実際に入る！",
      description: "体験して気に入ったら正式に入会！一緒にスキルアップしていきましょう。",
      icon: "🎉"
    }
  ];

  return (
    <section id="join" className="join-flow">
      <div className="join-flow-container">
        <div className="section-header">
          <h2>参加の流れ</h2>
          <p>tus.Genesisに参加するまでの簡単なステップ</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-header">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
              </div>
              <div className="step-content">
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="cta-section">
          <h3>まずは気軽にお問い合わせください！</h3>
          <p>質問や不安なことがあれば、いつでもお気軽にご連絡ください。</p>
          <a href="#contact" className="btn btn-primary">お問い合わせ</a>
        </div> */}
      </div>
    </section>
  );
};

export default JoinFlow;

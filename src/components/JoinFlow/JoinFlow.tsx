import React from 'react';
import './JoinFlow.css';

const JoinFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "興味を持つ",
      description: "まずはTUS.Genesisに興味を持っていただき、活動内容を確認してください。",
      icon: "💡"
    },
    {
      number: "02",
      title: "説明会参加",
      description: "定期的に開催している説明会に参加して、詳しい活動内容を聞いてみましょう。",
      icon: "👥"
    },
    {
      number: "03",
      title: "体験参加",
      description: "実際の活動に体験参加して、雰囲気や内容を体感してください。",
      icon: "🚀"
    },
    {
      number: "04",
      title: "正式入会",
      description: "気に入ったら正式に入会！一緒にプログラミングスキルを向上させましょう。",
      icon: "🎉"
    }
  ];

  return (
    <section id="join" className="join-flow">
      <div className="join-flow-container">
        <div className="section-header">
          <h2>参加の流れ</h2>
          <p>TUS.Genesisに参加するまでの簡単なステップ</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>まずは気軽にお問い合わせください！</h3>
          <p>質問や不安なことがあれば、いつでもお気軽にご連絡ください。</p>
          <a href="#contact" className="btn btn-primary">お問い合わせ</a>
        </div>
      </div>
    </section>
  );
};

export default JoinFlow;

import React from 'react';
import './Activity.css';

const Activity: React.FC = () => {
  const learningActivities = [
    {
      title: "初心者講習",
      description: "プログラミング初心者向けに基礎から丁寧に指導します。Web開発の基本からスタート。"
    }
  ];

  const exchangeActivities = [
    {
      title: "学習会",
      description: "定期的な勉強会やLT大会で知識を共有し、お互いに学び合います。"
    }
  ];

  const developmentActivities = [
    {
      title: "プロジェクト",
      description: "チームでWebアプリやモバイルアプリなど様々なプロダクトを開発しています。"
    },
    {
      title: "理大祭",
      description: "年に一度の理大祭では、制作した作品を展示し、多くの人に見てもらっています。"
    }
  ];

  return (
    <section id="activity" className="activity">
      <div className="activity-container">
        <div className="section-header">
          <h2>活動内容</h2>
          <p>私たちの主な活動について</p>
        </div>
        
        <div className="activity-sections">
          {/* 学習セクション */}
          <div className="activity-section">
            <h3 className="section-title">
              <span className="section-icon">📚</span>
              学習
            </h3>
            <div className="activities-grid">
              {learningActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 交流セクション */}
          <div className="activity-section">
            <h3 className="section-title">
              <span className="section-icon">🤝</span>
              交流
            </h3>
            <div className="activities-grid">
              {exchangeActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 開発セクション */}
          <div className="activity-section">
            <h3 className="section-title">
              <span className="section-icon">🚀</span>
              開発
            </h3>
            <div className="activities-grid">
              {developmentActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;

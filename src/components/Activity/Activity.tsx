import React from 'react';
import './Activity.css';
import { MdSchool, MdCode } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';

const Activity: React.FC = () => {
  // ほんの少しだけ青みを強めた色
  const iconColor = "#7d6df6";

  const learningActivities = [
    {
      icon: <MdSchool size={36} color={iconColor} />,
      title: "初心者講習",
      description:
        "プログラミング初心者向けに基礎から丁寧に指導します。Web開発の基本からスタート。"
    }
  ];

  const exchangeActivities = [
    {
      icon: <FaChalkboardTeacher size={36} color={iconColor} />,
      title: "学習会",
      description:
        "定期的な勉強会やLT大会で知識を共有し、お互いに学び合います。"
    }
  ];

  const developmentActivities = [
    {
      icon: <MdCode size={36} color={iconColor} />,
      title: "プロジェクト",
      description:
        "チームでWebアプリやモバイルアプリなど様々なプロダクトを開発しています。"
    },
    {
      icon: <GiPartyPopper size={36} color={iconColor} />,
      title: "理大祭",
      description:
        "年に一度の理大祭では、制作した作品を展示し、多くの人に見てもらっています。"
    }
  ];

  return (
    <section id="activity" className="activity">
      <div className="activity-container">
        <div className="section-header">
          <h2>活動内容</h2>
        </div>

        <div className="activity-sections">
          {/* 学習セクション */}
          <div className="activity-section">
            <div className="section-title">
              <h3>学習</h3>
            </div>
            <div className="activities-grid">
              {learningActivities.map((a, i) => (
                <div key={i} className="activity-card">
                  <div className="activity-header">
                    <div className="activity-icon">{a.icon}</div>
                    <h4>{a.title}</h4>
                  </div>
                  <div className="activity-content">
                    <p>{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 交流セクション */}
          <div className="activity-section">
            <div className="section-title">
              <h3>交流</h3>
            </div>
            <div className="activities-grid">
              {exchangeActivities.map((a, i) => (
                <div key={i} className="activity-card">
                  <div className="activity-header">
                    <div className="activity-icon">{a.icon}</div>
                    <h4>{a.title}</h4>
                  </div>
                  <div className="activity-content">
                    <p>{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 開発セクション */}
          <div className="activity-section">
            <div className="section-title">
              <h3>開発</h3>
            </div>
            <div className="activities-grid">
              {developmentActivities.map((a, i) => (
                <div key={i} className="activity-card">
                  <div className="activity-header">
                    <div className="activity-icon">{a.icon}</div>
                    <h4>{a.title}</h4>
                  </div>
                  <div className="activity-content">
                    <p>{a.description}</p>
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

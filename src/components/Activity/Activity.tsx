import React from 'react';
import './Activity.css';

const Activity: React.FC = () => {
  const activities = [
    {
      title: "週次勉強会",
      description: "毎週火曜日に新しい技術や手法について学習し、知識を共有しています。",
      image: "📖",
      tags: ["学習", "技術共有"]
    },
    {
      title: "ハッカソン参加",
      description: "年2回、外部のハッカソンに参加してチーム開発のスキルを磨いています。",
      image: "💻",
      tags: ["チーム開発", "コンペティション"]
    },
    {
      title: "Webサイト制作",
      description: "地域の企業や団体のWebサイト制作を通じて実践的な経験を積んでいます。",
      image: "🌐",
      tags: ["実践", "クライアントワーク"]
    },
    {
      title: "技術ブログ運営",
      description: "学んだ技術や経験をブログにまとめ、アウトプットの習慣を身につけています。",
      image: "✍️",
      tags: ["アウトプット", "技術記事"]
    },
    {
      title: "オープンソース貢献",
      description: "GitHubでのオープンソースプロジェクトへの貢献を通じて開発力を向上させています。",
      image: "🔧",
      tags: ["OSS", "コミュニティ"]
    },
    {
      title: "学園祭展示",
      description: "年に一度の学園祭では、制作した作品を展示し、多くの人に見てもらっています。",
      image: "🎪",
      tags: ["展示", "作品発表"]
    }
  ];

  return (
    <section id="activity" className="activity">
      <div className="activity-container">
        <div className="section-header">
          <h2>Activities</h2>
          <p>私たちの主な活動内容</p>
        </div>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-image">{activity.image}</div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className="activity-tags">
                  {activity.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;

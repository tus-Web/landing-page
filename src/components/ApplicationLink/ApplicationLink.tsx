import React from 'react';
import './ApplicationLink.css';

const ApplicationLink: React.FC = () => {
  return (
    <section id="application" className="application-link">
      <div className="application-container">
        <div className="application-content">
          <h2>今すぐ参加しよう</h2>
          <p>
            tus.Genesisで一緒に「想像をともに」創造しませんか？<br />
            説明会への参加申し込みや気軽な質問もお待ちしています。
          </p>
          
          <div className="application-buttons">
            <a 
              href="https://forms.google.com/your-form-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📝 説明会参加申し込み
            </a>
            
            <a 
              href="https://line.me/your-line-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              💬 気軽に質問する
            </a>
          </div>

          <div className="application-note">
            <p>
              <strong>説明会開催日時:</strong> 毎週水曜日 18:00〜19:00<br />
              <strong>場所:</strong> 東京理科大学 野田キャンパス
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationLink;

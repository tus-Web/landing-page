import React from 'react';
import './Voice.css';

const Voice: React.FC = () => {
  return (
    <section id="voice" className="voice">
      <div className="voice-container">
        <div className="section-header">
          <h2>メンバーの声</h2>
          <p>tus.Genesisで活動するメンバーの生の声をお届けします</p>
        </div>
        
        <div className="coming-soon">
          <div className="coming-soon-content">
            <div className="coming-soon-header">
              <div className="coming-soon-icon">🎤</div>
              <h3>メンバーの声を準備中</h3>
            </div>
            <p>
              今後、サークルメンバーの生の声を追加予定です！<br />
              ご期待ください。
            </p>
          </div>
        </div>

        <div className="placeholder-members">
          <div className="member-card placeholder">
            <div className="member-avatar">👤</div>
            <div className="member-info">
              <h4>メンバーA</h4>
              <p className="member-year">2年生</p>
              <blockquote>
                「tus.Genesisでプログラミングの楽しさを知りました。初心者でも安心して参加できる環境が整っています。」
              </blockquote>
            </div>
          </div>

          <div className="member-card placeholder">
            <div className="member-avatar">👤</div>
            <div className="member-info">
              <h4>メンバーB</h4>
              <p className="member-year">3年生</p>
              <blockquote>
                「チーム開発を通じて、技術力だけでなくコミュニケーション能力も向上しました。」
              </blockquote>
            </div>
          </div>

          <div className="member-card placeholder">
            <div className="member-avatar">👤</div>
            <div className="member-info">
              <h4>メンバーC</h4>
              <p className="member-year">1年生</p>
              <blockquote>
                「先輩方のサポートが手厚く、分からないことも気軽に質問できる雰囲気です。」
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voice;

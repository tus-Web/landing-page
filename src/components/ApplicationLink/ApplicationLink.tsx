import React from 'react';
import './ApplicationLink.css';

const ApplicationLink: React.FC = () => {
  return (
    <section id="application" className="application-link">
      <div className="application-container">
        <div className="application-content">
          <h2>今すぐ参加しよう</h2>
          {/* <p>
            tus.Genesisで一緒に「想像をともに」創造しませんか？<br />
            説明会への参加申し込みをお待ちしています！
          </p> */}
          
          <div className="application-buttons">
            <a
              href="https://lin.ee/86atzK8"
              target="_blank"
              rel="noopener noreferrer"
              className="line-add-button"
            >
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                height="36"
                border={0}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationLink;

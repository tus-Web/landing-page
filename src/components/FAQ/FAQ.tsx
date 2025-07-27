import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <h4>{question}</h4>
        <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <FaChevronDown />
        </div>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "活動の頻度、場所、時間は？",
      answer: (
        <p>
          基本的に<strong>週1回</strong>、大学の教室で集まって活動しています。<br />
          通常は<strong>金曜日の18:00〜20:00</strong>に行っています。
        </p>
      )
    },
    {
      question: "長期休暇中の活動はありますか？",
      answer: (
        <p>
          長期休暇中も<strong>週1回のオフライン活動</strong>を予定しています。<br />
        </p>
      )
    },
    {
      question: "プログラミング経験がなくても大丈夫ですか？",
      answer: (
        <p>
          全く問題ありません！<br />
          基礎から学べるようにサポートしていますので、初心者も大歓迎です。
        </p>
      )
    },
    {
      question: "いつでも参加できますか？",
      answer: (
        <p>
          はい、いつでも参加できます！<br />
          途中からの参加も歓迎しています。興味があればぜひ一度活動にお越しください。
        </p>
      )
    },
    {
      question: "開発以外にどのようなイベントがありますか？",
      answer: (
        <p>
          技術イベントとして<strong>ハッカソン遠征</strong>を行う予定です。<br />
          また、メンバー同士の親睦を深めるための<strong>食事会</strong>なども定期的に開催しています。
        </p>
      )
    },
    {
      question: "サークルの目標は何ですか？",
      answer: (
        <ul className="faq-list">
          <li>ハッカソンなどの技術イベントへの積極的な参加</li>
          <li>技術を共有できるコミュニティの形成</li>
          <li>理科大生のためのアプリケーション開発</li>
        </ul>
      )
    },
    {
      question: "質問や相談はどこにすればいいですか？",
      answer: (
        <p>
          質問や相談は<strong>LINE公式アカウント</strong>までお願いします。<br />
          気軽にメッセージをお送りください。
        </p>
      )
    },
  ];

  return (
    <section id="faq-section" className="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2>よくある質問</h2>
          <p>tus.Genesisについてよくいただく質問</p>
        </div>
        
        <div className="faq-content">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

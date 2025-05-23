import { useState } from 'react';
import { Book, Clock, GraduationCap, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/Agpeya.css'; // Import the CSS file

export default function AgepyaPage() {
  return (
    <div className="agepya-container">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="content-wrapper">
          <a
            href="https://www.copticchurch.net/liturgy/agpeya/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >
              <h1>The Agpeya{' '} <ExternalLink /></h1>
          
           </a>
          

          <p>The sacred Book of Hours in the Coptic Orthodox tradition, guiding the faithful through daily prayer.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Definition Section */}
        <ContentSection 
          title="What is the Agepya?" 
          icon={<Book className="section-icon" />}
        >
          <p className="lead-text">
            The Agpeya is the Coptic Orthodox Church's book of canonical hours, 
            containing prayers for seven fixed times of the day. The name comes from the Coptic word 
            meaning "Hour Book," reflecting its purpose as a guide for daily prayer observance.
          </p>
          
          <div className="info-grid">
            <InfoCard title="Structure">
              Contains prayers for seven canonical hours: Midnight, Dawn, Third Hour, 
              Sixth Hour, Ninth Hour, Eleventh Hour (Vespers), and Twelfth Hour (Compline).
            </InfoCard>
            
            <InfoCard title="Content">
              Each hour includes the Lord's Prayer, Prayer of Thanksgiving, Psalm 50, 
              specific psalms for that hour, a Gospel reading, litanies, and absolutions.
            </InfoCard>
          </div>
          
          <QuoteBlock>
            "Seven times a day I praise You because of Your righteous judgments." — Psalm 119:164
          </QuoteBlock>
        </ContentSection>
        
        {/* Origin Section */}
        <ContentSection 
          title="Origin and History" 
          icon={<Clock className="section-icon" />}
        >
          <p className="lead-text">
            The tradition of praying at fixed hours dates back to ancient Christian practices, 
            influenced by Jewish prayer customs. The Agepya specifically developed within the 
            rich spiritual tradition of Egyptian Christianity, with its roots in desert monasticism.
          </p>
          
          <div className="timeline-box">
            <h3>Historical Development</h3>
            <ul className="timeline-list">
              <li>
                <span className="timeline-marker">1</span>
                <span>Early monastics in the Egyptian desert established regular prayer schedules.</span>
              </li>
              <li>
                <span className="timeline-marker">2</span>
                <span>St. Basil the Great and other Church Fathers formalized these prayer practices.</span>
              </li>
              <li>
                <span className="timeline-marker">3</span>
                <span>The Agepya evolved throughout centuries, preserving ancient prayers and traditions.</span>
              </li>
              <li>
                <span className="timeline-marker">4</span>
                <span>Today's version has been carefully translated from Coptic and Arabic sources.</span>
              </li>
            </ul>
          </div>
        </ContentSection>
        
        {/* Usage Section */}
        <ContentSection 
          title="How the Agepya is Used" 
          icon={<GraduationCap className="section-icon" />}
        >
          <p className="lead-text">
            The Agepya serves as a spiritual compass, structuring daily prayer life for clergy, 
            monastics, and laypeople. It ensures that prayer remains consistent and rooted in 
            biblical and patristic traditions.
          </p>
          
          <div className="info-grid three-columns">
            <InfoCard title="Personal Prayer">
              Many Coptic Orthodox faithful use the Agepya for personal devotions, 
              especially morning and evening prayers.
            </InfoCard>
            
            <InfoCard title="Monastic Life">
              In monasteries, the communal recitation of the Agepya structures the daily 
              rhythm of monastic life.
            </InfoCard>
            
            <InfoCard title="Liturgical Practice">
              Certain hours of the Agepya are incorporated into liturgical celebrations 
              throughout the ecclesiastical year.
            </InfoCard>
          </div>
          
          <div className="highlight-box">
            <h3>The Seven Canonical Hours</h3>
            <p>Each hour commemorates a significant event:</p>
            <div className="hours-grid">
              <div className="hour-item">
                <h4>Morning Prayer (Prime)</h4>
                <p>Commemorates Christ's resurrection</p>
              </div>
              <div className="hour-item">
                <h4>Third Hour (Terce)</h4>
                <p>Descent of the Holy Spirit at Pentecost</p>
              </div>
              <div className="hour-item">
                <h4>Sixth Hour (Sext)</h4>
                <p>Christ's crucifixion</p>
              </div>
              <div className="hour-item">
                <h4>Ninth Hour (None)</h4>
                <p>Christ's death on the cross</p>
              </div>
            </div>
          </div>
        </ContentSection>
        
        {/* Resources Section */}
        <ContentSection 
          title="Online Resources" 
          icon={<ExternalLink className="section-icon" />}
        >
          <p className="lead-text">
            Explore these valuable resources to deepen your understanding and practice of the Agepya.
          </p>
          
          <div className="resources-grid">
            <ResourceCard 
              title="Coptic Orthodox Diocese Resources" 
              description="Official translations and guides to praying the Agepya"
              linkText="Visit Diocese Website"
            />
            
            <ResourceCard 
              title="Digital Agepya Apps" 
              description="Mobile applications for convenient access to prayers"
              linkText="View Recommended Apps"
            />
            
            <ResourceCard 
              title="Audio Agpeya" 
              description="Listen to the hours of prayer recited by members of the church"
              linkText="Listen Now"
              linkUrl="https://www.youtube.com/playlist?list=PLd5sqGfYOck4IGRQQtMH22Be5GIVGpEz1"
            />
          </div>
        </ContentSection>
        
      </main>
    </div>
  );
}

// Reusable Components

function ContentSection({ title, icon, children }) {
  return (
    <section className="content-section">
      <div className="section-header">
        <div className="icon-container">
          {icon}
        </div>
        <h2>{title}</h2>
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function QuoteBlock({ children }) {
  return (
    <blockquote className="quote-block">
      {children}
    </blockquote>
  );
}

function ResourceCard({ title, description, linkText, linkUrl }) {
  return (
    <div className="resource-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <a href={linkUrl} 
        className="resource-link"
        target="_blank"
        rel="noopener noreferrer"
        >
          {linkText}
          <ExternalLink className="link-icon" />
        </a>
      </div>
    </div>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="accordion-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? 
          <ChevronUp className="accordion-icon" /> : 
          <ChevronDown className="accordion-icon" />
        }
      </button>
      {isOpen && (
        <div className="accordion-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
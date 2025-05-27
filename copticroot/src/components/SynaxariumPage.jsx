import React from 'react';
import { Book, Calendar, ExternalLink, Cross, Users, Clock, Globe, Youtube, Database } from 'lucide-react';
import '../styles/SynaxariumPage.css';

// Mock ContentSection component - replace with your actual component
const ContentSection = ({ children, className = "" }) => (
  <section className={`content-section ${className}`}>
    <div className="container">
      {children}
    </div>
  </section>
);

const SynaxariumPage = () => {
  return (
    <div className="synaxarium-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <div className="hero-icon">
            <Book size={64} />
          </div>
          <h1 className="hero-title">
            The Synaxarium
          </h1>
          <p className="hero-description">
            Daily commemorations of saints, martyrs, and significant events in the life of the Coptic Orthodox Church
          </p>
          <a 
            href="https://copticchurch.net/synaxarium" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-button"
          >
            Access Digital Synaxarium
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* What is the Synaxarium */}
      <ContentSection>
        <div className="section-header">
          <Cross size={32} />
          <h2>What is the Synaxarium?</h2>
        </div>
        <div className="section-content">
          <p className="section-paragraph">
            The Synaxarium (from Greek "synaxis" meaning gathering) is a liturgical book containing brief accounts of saints' lives, martyrdoms, and significant events commemorated each day of the Coptic calendar year. It serves as the official daily reading in Coptic Orthodox churches worldwide.
          </p>
          <p className="section-paragraph">
            Dating back to the early centuries of Christianity in Egypt, the Synaxarium preserves the rich heritage of Coptic saints and martyrs. Each entry provides historical context, spiritual lessons, and connections to the broader narrative of Christian faith in Egypt and beyond.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <Calendar size={32} />
              <h3>365 Daily Readings</h3>
              <p>Each day of the Coptic year has dedicated commemorations and stories</p>
            </div>
            <div className="info-card">
              <Users size={32} />
              <h3>Saints & Martyrs</h3>
              <p>Chronicles the lives of hundreds of holy men and women</p>
            </div>
            <div className="info-card">
              <Globe size={32} />
              <h3>Universal Use</h3>
              <p>Read daily in Coptic Orthodox churches around the world</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Structure of the Synaxarium */}
      <ContentSection className="alt-section">
        <div className="section-header">
          <Book size={32} />
          <h2>Structure of the Synaxarium</h2>
        </div>
        <div className="section-content">
          <p className="section-paragraph">
            The Synaxarium is organized according to the Coptic calendar, with each day containing multiple commemorations and readings:
          </p>
          <div className="structure-grid">
            <div className="resource-card">
              <div className="card-content">
                <Cross size={24} />
                <div className="card-text">
                  <h3>Daily Saints</h3>
                  <p>Commemorations of saints who reposed or were martyred on that day</p>
                </div>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <Users size={24} />
                <div className="card-text">
                  <h3>Martyrdoms</h3>
                  <p>Detailed accounts of Christian martyrs and their sacrifices</p>
                </div>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <Book size={24} />
                <div className="card-text">
                  <h3>Miracles</h3>
                  <p>Miraculous events and divine interventions throughout history</p>
                </div>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <Calendar size={24} />
                <div className="card-text">
                  <h3>Historical Events</h3>
                  <p>Significant moments in church history and biblical events</p>
                </div>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <Cross size={24} />
                <div className="card-text">
                  <h3>Feast Days</h3>
                  <p>Major and minor feasts of the liturgical calendar</p>
                </div>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <Book size={24} />
                <div className="card-text">
                  <h3>Spiritual Lessons</h3>
                  <p>Moral and theological teachings drawn from each account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* How It's Used */}
      <ContentSection>
        <div className="section-header">
          <Clock size={32} />
          <h2>How It's Used</h2>
        </div>
        <div className="section-content">
          <p className="section-paragraph">
            The Synaxarium plays a central role in the daily spiritual life of the Coptic Orthodox Church, serving multiple liturgical and devotional purposes:
          </p>
          <div className="info-grid">
            <div className="info-card">
              <Clock size={32} />
              <h3>Daily Divine Liturgy</h3>
              <p>Read during the morning service before the Gospel reading</p>
            </div>
            <div className="info-card">
              <Book size={32} />
              <h3>Personal Devotion</h3>
              <p>Used by individuals for daily spiritual reflection and inspiration</p>
            </div>
            <div className="info-card">
              <Users size={32} />
              <h3>Teaching Tool</h3>
              <p>Provides historical and spiritual education for the faithful</p>
            </div>
          </div>
          <div className="liturgical-box">
            <h3>
              <Calendar size={20} />
              Liturgical Integration
            </h3>
            <p>
              The Synaxarium reading is typically followed by intercessions for the commemorated saints, connecting the congregation with the communion of saints and providing models of Christian virtue and perseverance.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Resources */}
      <ContentSection className="alt-section">
        <div className="section-header">
          <ExternalLink size={32} />
          <h2>Resources</h2>
        </div>
        <div className="section-content">
          <p className="section-paragraph">
            Access digital versions of the Synaxarium and related educational content:
          </p>
          <div className="resources-grid">
            <a 
              href="https://copticchurch.net/synaxarium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Database size={32} />
              <h3>
                Coptic Church Synaxarium
                <ExternalLink size={16} />
              </h3>
              <p>Complete digital Synaxarium with daily readings and search functionality</p>
            </a>
            
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Book size={32} />
              <h3>
                Tasbeha.org Synaxarium
                <ExternalLink size={16} />
              </h3>
              <p>Comprehensive collection with Arabic and English versions</p>
            </a>
            
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Youtube size={32} />
              <h3>
                Daily Synaxarium Readings
                <ExternalLink size={16} />
              </h3>
              <p>Audio recordings of daily Synaxarium readings</p>
            </a>
            
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Users size={32} />
              <h3>
                Saints Biography Database
                <ExternalLink size={16} />
              </h3>
              <p>Detailed biographies of Coptic Orthodox saints</p>
            </a>
            
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Globe size={32} />
              <h3>
                SUS Copts Synaxarium
                <ExternalLink size={16} />
              </h3>
              <p>Modern presentation with study guides and reflections</p>
            </a>
            
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-link"
            >
              <Youtube size={32} />
              <h3>
                Coptic Studies Channel
                <ExternalLink size={16} />
              </h3>
              <p>Educational videos about Coptic saints and church history</p>
            </a>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default SynaxariumPage;
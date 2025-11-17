import { useEffect } from 'react'
import './NewsModal.css'

function NewsModal({ isOpen, onClose, article }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2 className="modal-title">{article.title}</h2>
          <p className="modal-date">{article.date}</p>
        </div>
        <div className="modal-body">
          {article.content.map((paragraph, index) => (
            <p key={index} className="modal-paragraph">{paragraph}</p>
          ))}
          {article.sections && article.sections.map((section, index) => (
            <div key={index} className="modal-section">
              <h3 className="modal-section-title">{section.title}</h3>
              <p className="modal-section-text">{section.text}</p>
            </div>
          ))}
          {article.boardMembers && (
            <div className="modal-board-members">
              <h3 className="modal-board-members-title">Advisory Board Members:</h3>
              {article.boardMembers.map((member, index) => (
                <div key={index} className="modal-board-member">
                  <h4 className="modal-board-member-name">{member.name}</h4>
                  <p className="modal-board-member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          )}
          {article.contacts && (
            <div className="modal-contacts">
              <h3 className="modal-contacts-title">Contacts:</h3>
              {article.contacts.map((contact, index) => (
                <div key={index} className="modal-contact">
                  <p className="modal-contact-name">{contact.name}</p>
                  <p className="modal-contact-title">{contact.title}</p>
                  {contact.phone && <p className="modal-contact-phone">{contact.phone}</p>}
                  {contact.email && <p className="modal-contact-email">{contact.email}</p>}
                </div>
              ))}
            </div>
          )}
          {article.link && (
            <div className="modal-link">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="modal-link-text">
                {article.linkText || "View Media Backgrounder"}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsModal


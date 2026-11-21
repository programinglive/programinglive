export type LegalSection = {
  heading: string
  items: string[]
}

export type LegalDocument = {
  eyebrow: string
  title: string
  description: string
  sections: LegalSection[]
}

export const TERMS_DOCUMENT: LegalDocument = {
  eyebrow: 'Legal',
  title: 'ProgramingLive Terms of Service',
  description:
    'These Terms of Service govern access to and use of ProgramingLive websites, learning programs, and community spaces. By participating, you agree to the conditions below and any policies referenced within them.',
  sections: [
    {
      heading: '1. Accounts & Eligibility',
      items: [
        'You must be at least 16 years old or have parental consent to participate.',
        'Provide accurate information when registering for programs or communication lists.',
        'You are responsible for safeguarding your account credentials and activity.',
      ],
    },
    {
      heading: '2. Acceptable Use',
      items: [
        'Follow the Community Guidelines.',
        'Do not misuse the Services by attempting unauthorized access, distributing malware, or spamming.',
        'Respect intellectual property and only share content that you have the rights to distribute.',
      ],
    },
    {
      heading: '3. Content & Ownership',
      items: [
        'You retain ownership of the content you create. You grant ProgramingLive a non-exclusive license to display and share contributions within our programs.',
        'ProgramingLive content, including curriculum, brand assets, and software, is protected and may not be reused without permission.',
      ],
    },
    {
      heading: '4. Program Changes',
      items: [
        'We may adjust or discontinue programs to improve learning experiences.',
        'Important updates will be shared via email or the channels you used to sign up.',
        'Participants may withdraw at any time by emailing creative@programinglive.com.',
      ],
    },
    {
      heading: '5. Disclaimers & Liability',
      items: [
        'Services are provided as is without warranties of any kind.',
        'ProgramingLive is not liable for indirect or consequential damages resulting from participation.',
        'Some jurisdictions do not allow limitations on implied warranties, so these limits may not apply to you.',
      ],
    },
    {
      heading: '6. Contact',
      items: [
        'Questions about these Terms can be sent to creative@programinglive.com.',
      ],
    },
  ],
}

export const GUIDELINES_DOCUMENT: LegalDocument = {
  eyebrow: 'Community',
  title: 'ProgramingLive Community Guidelines',
  description:
    'Our community thrives when everyone feels respected, supported, and empowered to build. These guidelines describe how we collaborate in online cohorts, live sprints, and shared tools and documentation.',
  sections: [
    {
      heading: 'What We Value',
      items: [
        'Kindness first: offer feedback with empathy and assume positive intent.',
        'Learning in public: share progress, challenges, and wins so others can grow with you.',
        'Crediting collaborators: recognize teammates and reference sources when inspired by others.',
      ],
    },
    {
      heading: 'Expectations for Conduct',
      items: [
        'Use inclusive language and avoid personal attacks, harassment, or discriminatory remarks.',
        'Keep spaces focused: move off-topic chats to the appropriate channels or threads.',
        'Do not share private information about yourself or others without explicit consent.',
      ],
    },
    {
      heading: 'Collaboration Standards',
      items: [
        'Document decisions and share updates so teammates can follow along asynchronously.',
        'Respect timezones: schedule live sessions thoughtfully and record when possible.',
        'Provide actionable feedback: highlight what works, what can improve, and next steps.',
      ],
    },
    {
      heading: 'Safety & Reporting',
      items: [
        'Flag concerning behavior by emailing creative@programinglive.com.',
        'In urgent situations, remove yourself from the space and alert the facilitation team immediately.',
        'Reports are handled confidentially and reviewed within three business days.',
      ],
    },
  ],
}

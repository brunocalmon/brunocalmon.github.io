import '../scss/styles.scss';

// Show current year
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear().toString();
}

// Remove no-js class
document.documentElement.classList.remove('no-js');

// Animate to section when nav is clicked
const navLinks = document.querySelectorAll('header a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Treat as normal link if no-scroll class
    if (link.classList.contains('no-scroll')) return;

    e.preventDefault();
    const heading = document.querySelector(link.getAttribute('href') || '') as HTMLElement;
    if (heading) {
      const scrollDistance = heading.offsetTop;
      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth',
      });

      // Hide the menu once clicked if mobile
      const header = document.querySelector('header');
      const body = document.querySelector('body');
      if (header && header.classList.contains('active') && body) {
        header.classList.remove('active');
        body.classList.remove('active');
      }
    }
  });
});

// Scroll to top
const toTopButton = document.getElementById('to-top');
if (toTopButton) {
  toTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Scroll to first element
const leadDownSpan = document.querySelector('#lead-down span');
if (leadDownSpan) {
  leadDownSpan.addEventListener('click', () => {
    const leadElement = document.getElementById('lead');
    if (leadElement) {
      const scrollDistance = leadElement.nextElementSibling?.getBoundingClientRect().top || 0;
      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth',
      });
    }
  });
}

// Create timeline
const experienceTimeline = document.getElementById('experience-timeline');
if (experienceTimeline) {
  const userContent = experienceTimeline.querySelectorAll('div');
  userContent.forEach(content => {
    content.classList.add('vtimeline-content');
    const timelinePoint = document.createElement('div');
    timelinePoint.classList.add('vtimeline-point');
    const timelineBlock = document.createElement('div');
    timelineBlock.classList.add('vtimeline-block');
    timelinePoint.appendChild(timelineBlock);
    timelineBlock.appendChild(content);
    experienceTimeline.appendChild(timelinePoint);
  });

  // Add icons to each block
  const timelinePoints = experienceTimeline.querySelectorAll('.vtimeline-point');
  timelinePoints.forEach(point => {
    const icon = document.createElement('div');
    icon.classList.add('vtimeline-icon');
    icon.innerHTML = '<i class="fa fa-map-marker"></i>';
    point.prepend(icon);
  });

  // Add dates to the timeline if exists
  const timelineContents = experienceTimeline.querySelectorAll('.vtimeline-content');
  timelineContents.forEach(content => {
    const date = content.getAttribute('data-date');
    if (date) {
      const dateSpan = document.createElement('span');
      dateSpan.classList.add('vtimeline-date');
      dateSpan.textContent = date;
      content.parentElement?.prepend(dateSpan);
    }
  });
}

// Open mobile menu
const mobileMenuOpen = document.getElementById('mobile-menu-open');
if (mobileMenuOpen) {
  mobileMenuOpen.addEventListener('click', () => {
    document.querySelector('header')?.classList.add('active');
    document.querySelector('body')?.classList.add('active');
  });
}

// Close mobile menu
const mobileMenuClose = document.getElementById('mobile-menu-close');
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    document.querySelector('header')?.classList.remove('active');
    document.querySelector('body')?.classList.remove('active');
  });
}

// Load additional projects
const viewMoreProjects = document.getElementById('view-more-projects');
if (viewMoreProjects) {
  viewMoreProjects.addEventListener('click', (e) => {
    e.preventDefault();
    viewMoreProjects.style.display = 'none'; // Hide the button
    const moreProjects = document.getElementById('more-projects');
    if (moreProjects) {
      moreProjects.style.display = 'block'; // Show additional projects
    }
  });
}

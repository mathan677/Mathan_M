import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Database,
  Brain,
  Award,
  BookOpen,
  User,
  Briefcase,
  Send,
  ExternalLink,
  Globe,
  Languages,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'certifications', 'languages', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document root
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mathan_M.pdf';
    link.download = 'Mathan_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
    }`}>
      {/* Floating 3D Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-xl opacity-20 animate-float-slow ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-full blur-xl opacity-20 animate-float-medium ${
          isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-20 left-1/3 w-40 h-40 rounded-full blur-xl opacity-20 animate-float-fast ${
          isDarkMode ? 'bg-pink-400' : 'bg-pink-300'
        }`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/90 border-gray-700' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold transition-all duration-300 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>Mathan M</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'languages', label: 'Languages' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    activeSection === item.id 
                      ? isDarkMode 
                        ? 'text-blue-400 bg-blue-900/50 shadow-lg shadow-blue-500/25' 
                        : 'text-blue-600 bg-blue-50 shadow-lg shadow-blue-500/25'
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                  isDarkMode 
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                    : 'bg-gray-800/20 text-gray-800 hover:bg-gray-800/30'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

            {/* Mobile menu button */}
              <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-colors duration-300 focus:outline-none ${
                    isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'education', label: 'Education' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 text-base font-medium rounded-md w-full text-left transition-all duration-300 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}>
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-3d ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-3d animation-delay-2000 ${
            isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-3d animation-delay-4000 ${
            isDarkMode ? 'bg-pink-500' : 'bg-pink-300'
          }`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 perspective-1000">
          <div className="transform hover:scale-105 transition-all duration-500 animate-float-gentle">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className={`gradient-text ${isDarkMode ? 'gradient-text-dark' : 'gradient-text-light'}`}>Mathan M</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Final-Year AI & Data Science Student | Aspiring Data Analyst
            </p>
            <p className={`text-lg mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Passionate about transforming complex data into actionable insights through innovative AI solutions and advanced analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-glow ${
                  isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/50'
                }`}
              >
                Get In Touch
              </button>
              <button
                onClick={downloadResume}
                className={`px-8 py-4 rounded-full font-semibold border-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2 justify-center ${
                  isDarkMode 
                    ? 'bg-transparent text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                    : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="mt-16 animate-bounce-gentle">
            <ChevronDown 
              size={32} 
              className={`mx-auto cursor-pointer transition-colors duration-300 hover:scale-110 transform ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`} 
              onClick={() => scrollToSection('about')} 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`w-32 h-32 rounded-full mx-auto md:mx-0 flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-2xl animate-float-gentle ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/25' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-600/25'
              }`}>
                <User size={64} className="text-white" />
              </div>
              <h3 className={`text-2xl font-semibold transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Final-Year B.Tech Student</h3>
              <p className={`leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm currently pursuing my B.Tech in Artificial Intelligence and Data Science at J C T College of Engineering and Technology, Coimbatore. My academic journey has equipped me with a robust foundation in data analytics, Python programming, and advanced visualization techniques.
              </p>
              <p className={`leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I thrive on solving intricate problems, leveraging statistical analysis and machine learning to uncover hidden patterns and deliver impactful solutions. My goal is to bridge the gap between raw data and strategic decision-making, constantly seeking innovative approaches to data-driven challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-2xl card-3d ${
                isDarkMode 
                  ? 'bg-blue-900/30 shadow-blue-500/10 hover:shadow-blue-500/25' 
                  : 'bg-blue-50 shadow-blue-500/10 hover:shadow-blue-500/25'
              }`}>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>2026</div>
                <div className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Graduation Year</div>
              </div>
              <div className={`p-6 rounded-xl text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-2xl card-3d ${
                isDarkMode 
                  ? 'bg-purple-900/30 shadow-purple-500/10 hover:shadow-purple-500/25' 
                  : 'bg-purple-50 shadow-purple-500/10 hover:shadow-purple-500/25'
              }`}>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>AI/DS</div>
                <div className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Specialization</div>
              </div>
              <div className={`p-6 rounded-xl text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-2xl card-3d ${
                isDarkMode 
                  ? 'bg-green-900/30 shadow-green-500/10 hover:shadow-green-500/25' 
                  : 'bg-green-50 shadow-green-500/10 hover:shadow-green-500/25'
              }`}>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>Python</div>
                <div className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Core Language</div>
              </div>
              <div className={`p-6 rounded-xl text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300 hover:shadow-2xl card-3d ${
                isDarkMode 
                  ? 'bg-red-900/30 shadow-red-500/10 hover:shadow-red-500/25' 
                  : 'bg-red-50 shadow-red-500/10 hover:shadow-red-500/25'
              }`}>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-red-400' : 'text-red-600'
                }`}>ML</div>
                <div className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Focus Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Education</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className="space-y-8">
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-blue-500/10 hover:shadow-blue-500/25' 
                : 'bg-white shadow-blue-500/10 hover:shadow-blue-500/25'
            }`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}>
                  <BookOpen size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>B.Tech in Artificial Intelligence and Data Science</h3>
                  <p className={`font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>J C T College of Engineering and Technology, Coimbatore</p>
                  <p className={`mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2022 - 2026</p>
                  <p className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Focusing on machine learning, deep learning, data analytics, and big data technologies with a strong foundation in AI principles and practical applications.</p>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-green-500/10 hover:shadow-green-500/25' 
                : 'bg-white shadow-green-500/10 hover:shadow-green-500/25'
            }`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-green-500' : 'bg-green-600'
                }`}>
                  <BookOpen size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Higher Secondary Education (12th Grade)</h3>
                  <p className={`font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>Jeeva Matric Hr. Sec. School, Cuddalore</p>
                  <p className={`mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2021 - 2022</p>
                  <p className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Completed with strong emphasis on science and mathematics, building the foundation for technical education.</p>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-purple-500/10 hover:shadow-purple-500/25' 
                : 'bg-white shadow-purple-500/10 hover:shadow-purple-500/25'
            }`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
                }`}>
                  <BookOpen size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Secondary Education (10th Grade)</h3>
                  <p className={`font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>Jeeva Matric Hr. Sec. School, Cuddalore</p>
                  <p className={`mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>2018 - 2019</p>
                  <p className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Completed foundational education with excellent academic performance in core subjects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Experience</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 shadow-blue-500/10 hover:shadow-blue-500/25' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-blue-500/10 hover:shadow-blue-500/25'
          }`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
              }`}>
                <Briefcase size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Data & Operations Intern</h3>
                <p className={`font-medium mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>Codesripe</p>
                <p className={`mb-4 transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>March 2024 - August 2024</p>
                <ul className={`space-y-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <span>Created comprehensive internal documentation for project workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <span>Mentored Python programming interns and optimized task allocation processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <span>Contributed innovative solutions to enhance team communication and efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></div>
                    <span>Streamlined task allocation processes using innovative methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Skills & Expertise</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-blue-500/10 hover:shadow-blue-500/25' 
                : 'bg-white shadow-blue-500/10 hover:shadow-blue-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}>
                  <Code size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Programming</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Python</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>90%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`} style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-green-500/10 hover:shadow-green-500/25' 
                : 'bg-white shadow-green-500/10 hover:shadow-green-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-green-500' : 'bg-green-600'
                }`}>
                  <Database size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Development Tools</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Jupyter Notebook</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>85%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-green-400' : 'bg-green-600'
                    }`} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>VS Code</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>80%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-green-400' : 'bg-green-600'
                    }`} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Google Colab</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>85%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-green-400' : 'bg-green-600'
                    }`} style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-purple-500/10 hover:shadow-purple-500/25' 
                : 'bg-white shadow-purple-500/10 hover:shadow-purple-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
                }`}>
                  <Brain size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Soft Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Leadership</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>85%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Creativity</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>90%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Team Work</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>88%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`} style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className={`transition-colors duration-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Problem-Solving</span>
                    <span className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>92%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div className={`h-2 rounded-full transition-all duration-1000 animate-skill-fill ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`} style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 shadow-blue-500/10 hover:shadow-blue-500/25' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-blue-500/10 hover:shadow-blue-500/25'
          }`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>
                <Brain size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Self-Balancing Robot</h3>
                <p className={`mb-4 transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>January 2024 - February 2024</p>
                <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Engineered and constructed a self-balancing robot utilizing C/C++ for firmware development and embedded systems for hardware control. Implemented advanced control algorithms, including PID (Proportional-Integral-Derivative) and Kalman filtering, to achieve real-time stability and precise balance adjustments.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['C/C++', 'PID Control', 'Kalman Filter', 'IMU Sensors', 'Microcontrollers', 'Embedded Systems', 'Mechatronics'].map((tech) => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-500/30' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Integrated microcontrollers with IMU sensors to enable accurate motion tracking and environmental sensing, critical for dynamic stability. Demonstrated proficiency in sensor fusion and real-time programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Certifications</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-blue-500/10 hover:shadow-blue-500/25' 
                : 'bg-white shadow-blue-500/10 hover:shadow-blue-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}>
                  <Award size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Python for Data Science and AI</h3>
              </div>
              <p className={`font-medium mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>Coursera</p>
              <p className={`transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Comprehensive course covering Python programming fundamentals for data science applications and artificial intelligence.</p>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-green-500/10 hover:shadow-green-500/25' 
                : 'bg-white shadow-green-500/10 hover:shadow-green-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-green-500' : 'bg-green-600'
                }`}>
                  <Award size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Prompt Engineering Applications</h3>
              </div>
              <p className={`font-medium mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}>Skillup</p>
              <p className={`transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Advanced techniques for effective prompt engineering in AI applications and language models.</p>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-purple-500/10 hover:shadow-purple-500/25' 
                : 'bg-white shadow-purple-500/10 hover:shadow-purple-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
                }`}>
                  <Award size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Python Programming</h3>
              </div>
              <p className={`font-medium mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>GreekforGreek</p>
              <p className={`transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>In-depth Python programming certification covering advanced concepts and practical applications.</p>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-red-500/10 hover:shadow-red-500/25' 
                : 'bg-white shadow-red-500/10 hover:shadow-red-500/25'
            }`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-red-500' : 'bg-red-600'
                }`}>
                  <Award size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>SQL for Data Analysis</h3>
              </div>
              <p className={`font-medium mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-red-400' : 'text-red-600'
              }`}>LinkedIn Learning</p>
              <p className={`transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Comprehensive SQL training focused on data analysis techniques and database management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Languages</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-500 hover:shadow-2xl text-center card-3d ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/30 shadow-blue-500/10 hover:shadow-blue-500/25' 
                : 'bg-gradient-to-r from-blue-50 to-blue-100 shadow-blue-500/10 hover:shadow-blue-500/25'
            }`}>
              <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-all duration-300 ${
                isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
              }`}>
                <Languages size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Tamil</h3>
              <p className={`font-medium transition-colors duration-500 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>Native</p>
            </div>
            
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl text-center card-3d ${
              isDarkMode 
                ? 'bg-gradient-to-r from-green-900/30 to-green-800/30 shadow-green-500/10 hover:shadow-green-500/25' 
                : 'bg-gradient-to-r from-green-50 to-green-100 shadow-green-500/10 hover:shadow-green-500/25'
            }`}>
              <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-all duration-300 ${
                isDarkMode ? 'bg-green-500' : 'bg-green-600'
              }`}>
                <Globe size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>English</h3>
              <p className={`font-medium transition-colors duration-500 ${
                isDarkMode ? 'text-green-400' : 'text-green-600'
              }`}>Intermediate</p>
            </div>
            
            <div className={`p-8 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-500 hover:shadow-2xl text-center card-3d ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-900/30 to-purple-800/30 shadow-purple-500/10 hover:shadow-purple-500/25' 
                : 'bg-gradient-to-r from-purple-50 to-purple-100 shadow-purple-500/10 hover:shadow-purple-500/25'
            }`}>
              <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-all duration-300 ${
                isDarkMode ? 'bg-purple-500' : 'bg-purple-600'
              }`}>
                <Languages size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Malayalam</h3>
              <p className={`font-medium transition-colors duration-500 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>Understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h2>
            <div className={`w-24 h-1 mx-auto transition-colors duration-500 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}></div>
            <p className={`mt-6 max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow professionals in the AI and Data Science field.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`flex items-center gap-4 p-6 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 card-3d ${
                isDarkMode 
                  ? 'bg-gray-800/80 shadow-blue-500/10 hover:shadow-blue-500/25' 
                  : 'bg-white shadow-blue-500/10 hover:shadow-blue-500/25'
              }`}>
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}>
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</h3>
                  <p className={`transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>mathan.m0301@gmail.com</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 p-6 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 card-3d ${
                isDarkMode 
                  ? 'bg-gray-800/80 shadow-blue-500/10 hover:shadow-blue-500/25' 
                  : 'bg-white shadow-blue-500/10 hover:shadow-blue-500/25'
              }`}>
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}>
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>LinkedIn</h3>
                  <a href="https://linkedin.com/in/mathan0301" target="_blank" rel="noopener noreferrer" className={`hover:underline flex items-center gap-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}>
                    linkedin.com/in/mathan0301
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 p-6 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 card-3d ${
                isDarkMode 
                  ? 'bg-gray-800/80 shadow-gray-500/10 hover:shadow-gray-500/25' 
                  : 'bg-white shadow-gray-500/10 hover:shadow-gray-500/25'
              }`}>
                <div className={`p-3 rounded-full transform hover:rotate-12 transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-900'
                }`}>
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>GitHub</h3>
                  <a href="https://github.com/mathan677" target="_blank" rel="noopener noreferrer" className={`hover:underline flex items-center gap-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}>
                    github.com/mathan677
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={`p-8 rounded-xl shadow-lg card-3d ${
              isDarkMode 
                ? 'bg-gray-800/80 shadow-blue-500/10' 
                : 'bg-white shadow-blue-500/10'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-400 placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-400 placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-400 placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 placeholder-gray-500'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 ${
                    isDarkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/50' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/50'
                  }`}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mathan M</h3>
            <p className={`mb-6 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-400'
            }`}>
              "Transforming data into insights, one algorithm at a time."
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:mathan.m0301@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/mathan0301" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mathan677" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
            </div>
            <div className={`border-t pt-8 transition-colors duration-500 ${
              isDarkMode ? 'border-gray-800' : 'border-gray-800'
            }`}>
              <p className={`transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-400'
              }`}>
                © 2024 Mathan M. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
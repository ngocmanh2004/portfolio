import {
  FaReact, FaAngular, FaNodeJs, FaJava, FaDocker, FaHtml5,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiExpress, SiDotnet, SiBun, SiMysql,
  SiVercel, SiRender, SiGooglegemini,
} from 'react-icons/si'
import { Brain, BarChart3, BotMessageSquare, Database } from 'lucide-react'

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    labelKey: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Angular 19', icon: <FaAngular /> },
      { name: 'HTML / CSS', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'backend',
    labelKey: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Java 21 / Spring Boot', icon: <FaJava /> },
      { name: '.NET', icon: <SiDotnet /> },
      { name: 'Bun', icon: <SiBun /> },
    ],
  },
  {
    id: 'cloud',
    labelKey: 'Database & Cloud',
    color: '#f59e0b',
    skills: [
      { name: 'MySQL 8.x', icon: <SiMysql /> },
      { name: 'Pinecone Vector DB', icon: <Database size={16} /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
    ],
  },
  {
    id: 'other',
    labelKey: 'Other / Business',
    color: '#22c55e',
    skills: [
      { name: 'System Analysis', icon: <BarChart3 size={16} /> },
      { name: 'Business Operation', icon: <Brain size={16} /> },
      { name: 'AI Chatbot Integration', icon: <BotMessageSquare size={16} /> },
      { name: 'Gemini / Langchain / Tavily', icon: <SiGooglegemini /> },
    ],
  },
]

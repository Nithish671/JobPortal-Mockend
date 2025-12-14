import { useEffect, useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavB from './components/NavB'
import Home from './components/Home'
import Break from './components/Break'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import UserList from './components/UserList'
import AddJob from './components/AddJob'
import api from './api/api'
import JobPoster from './components/JobPoster'
import JobSearch from './components/JobSearch'
import InterviewPreparation from './components/InterviewPreparation'
import InterviewQuestions from './components/InterviewQuestions'
import MockTests from './components/MockTests'
import ProgressTracking from './components/ProgressTracking'
import TechnicalQuestions from './pages/TechnicalQuestions'
import HrQuestions from './pages/HrQuestions'
import AptitudeQuestions from './pages/AptitudeQuestions'
import ResumeTips from './pages/ResumeTips'
import Footer from './components/Footer'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Scroll from './pages/Scroll'

function App() {

  const [log, setLog] = useState(null);
  const [search, setSearch] = useState('');

  const [profile, setProfile] = useState({
    email: '',
    skills: [],
    experience: [],
    summary: '',
    phone: '',
    location: ''
  });

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    getJobs();
  }, []);

  const getJobs = async () => {

    const res = (await api.get("/jobs")).data;

    setJobs(res);
  }

  const refLog = async () => {
    setLog(JSON.parse(localStorage.getItem("log"))[0]);
    setProfile(pro[0]);
  }

  return (
    <>
      <Router>
        <Scroll />
        <NavB log={log} search={search} setSearch={setSearch} setLog={setLog} setProfile={setProfile} />
        <Break />
        <Routes>
          <Route path='/' element={<Home jobs={jobs} log={log} setLog={setLog} />} />
          <Route path='/profile' element={<Profile setProfile={setProfile} profile={profile} log={log} setLog={setLog} />} />
          <Route path='/signup' element={<Signup setProfile={setProfile} profile={profile} log={log} setLog={setLog} />} />
          <Route path='/login' element={<Login setProfile={setProfile} log={log} setLog={setLog} />} />
          <Route path='/users' element={<UserList log={log} />} />
          <Route path='/add-job' element={<AddJob log={log} getJobs={getJobs} />} />
          <Route path='/job' element={<JobPoster log={log} setLog={setLog} refLog={refLog} />} />
          <Route path='/job-search' element={<JobSearch jobs={jobs} search={search} />} />
          <Route path='/interview' element={<InterviewPreparation />} />
          <Route path="/interview-questions" element={<InterviewQuestions />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/progress" element={<ProgressTracking />} />
          <Route path="/interview-questions/technical" element={<TechnicalQuestions />} />
          <Route path="/interview-questions/hr" element={<HrQuestions />} />
          <Route path="/interview-questions/aptitude" element={<AptitudeQuestions />} />
          <Route path="/resume-tips" element={<ResumeTips />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

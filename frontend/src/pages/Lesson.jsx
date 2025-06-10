import { useParams, useNavigate } from 'react-router-dom';
import { aesLesson } from '../data/aesLesson';

function Lesson() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const lesson = topic === 'aes' ? aesLesson : null;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{lesson.title}</h1>
      <p className="my-4 text-lg">{lesson.content}</p>
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded" 
        onClick={() => navigate(`/quiz/${topic}`)}>
        Take Quiz
      </button>
    </div>
  );
}

export default Lesson;

import React, { useState, useRef, Fragment, useEffect } from 'react';
const SAMPLE_STORY = `There was a cat that lived on the streets that really wanted to find a home. But nobody wanted him. "Stinky cat", said one boy to the cat. "Yucky cat", said a girl to the cat. Then on one cloudy day, the cat walked down a different street. He saw a boy with red hair sitting by himself, crying. The cat wanted to make him feel better. So the cat jumped up on the bench, and walked onto his lap. The cat looked straight up at the red headed boy and said "Meow". The boy looked down at the dirty cat. The boy pet the cat. The cat said "purrrrr". Then some boys started laughing at the red headed boy. "Hahaha. Now you're just as yucky as that dirty cat" shouted one of the boys. The boy hated being laughed at, so he quickly put the cat down. He shouted at the cat, "go away cat! You're making them laugh at me!" "Hey, you can come back and play basketball with us again, but after you wash your hands" shouted a boy. Then the red headed boy, and his friends, walked back home together and came across the cat again. As the cat was sitting in the rain, wet, cold, and shaking, the boys were being mean to it and laughed at the cat. "Haha it's about time you get a shower you stinky cat!" said one of the boys. The red headed boy saw how sad the cat was. He walked over to it. "Don't think I'll let you play basketball with us again if you touch that dirty cat", said one of the boys. The red headed boy bent down, and pet the cat anyways. He said to the cat, "hey there real friend. My name is Bruno, and I'm going to take you to your new home, my home".`;
const CATEGORIES = [
{
  id: 'E',
  label: 'Establisher',
  color: '#818CF8',
  bg: '#EEF2FF',
  border: '#C7D2FE'
},
{
  id: 'I',
  label: 'Initial',
  color: '#F59E0B',
  bg: '#FFFBEB',
  border: '#FDE68A'
},
{
  id: 'L',
  label: 'Prolongation',
  color: '#10B981',
  bg: '#ECFDF5',
  border: '#A7F3D0'
},
{
  id: 'P',
  label: 'Peak',
  color: '#EF4444',
  bg: '#FEF2F2',
  border: '#FECACA'
},
{
  id: 'R',
  label: 'Release',
  color: '#6366F1',
  bg: '#F5F3FF',
  border: '#DDD6FE'
}];

const INITIAL_BULLETS = [
{
  id: 1,
  text: 'There was a cat that lived on the streets that really wanted to find a home.',
  cat: 'E',
  selected: false
},
{
  id: 2,
  text: 'But nobody wanted him.',
  cat: 'I',
  selected: false
},
{
  id: 3,
  text: '"Stinky cat", said one boy to the cat.',
  cat: 'L',
  selected: false
},
{
  id: 4,
  text: '"Yucky cat", said a girl to the cat.',
  cat: 'L',
  selected: false
},
{
  id: 5,
  text: 'Then on one cloudy day, the cat walked down a different street.',
  cat: 'E',
  selected: false
},
{
  id: 6,
  text: 'He saw a boy with red hair sitting by himself, crying sitting on a bench.',
  cat: 'I',
  selected: false
},
{
  id: 7,
  text: 'The cat wanted to make him feel better.',
  cat: 'L',
  selected: false
},
{
  id: 8,
  text: 'So the cat jumped up on the bench, and walked onto his lap.',
  cat: 'P',
  selected: false
},
{
  id: 9,
  text: 'The cat looked straight up at the red headed boy and said "Meow".',
  cat: 'P',
  selected: false
},
{
  id: 10,
  text: 'The boy looked down at the dirty cat.',
  cat: 'R',
  selected: false
},
{
  id: 11,
  text: 'The boy pet the cat.',
  cat: 'R',
  selected: false
},
{
  id: 12,
  text: 'The cat said "purrrrr".',
  cat: 'R',
  selected: false
},
{
  id: 13,
  text: 'Then some boys (High school KIDS) started laughing at the red headed boy.',
  cat: 'I',
  selected: false
},
{
  id: 14,
  text: '"Hahaha. Now you\'re just as yucky as that dirty cat" shouted one of the boys.',
  cat: 'L',
  selected: false
},
{
  id: 15,
  text: 'The boy hated being laughed at, so he quickly put the cat down.',
  cat: 'P',
  selected: false
},
{
  id: 16,
  text: 'He shouted at the cat, "go away cat! You\'re making them laugh at me!"',
  cat: 'P',
  selected: false
},
{
  id: 17,
  text: '"Hey, you can come back and play basketball with us again, but after you wash your hands" shouted a boy.',
  cat: 'R',
  selected: false
},
{
  id: 18,
  text: '(THEN) The red headed boy, and his friends, walked back home together and came across the cat again.',
  cat: 'E',
  selected: false
},
{
  id: 19,
  text: 'As the cat was sitting in the rain, wet, cold, and shaking,',
  cat: 'L',
  selected: false
},
{
  id: 20,
  text: 'the boys were being mean to it and laughed at the cat.',
  cat: 'L',
  selected: false
},
{
  id: 21,
  text: '"Haha it\'s about time you get a shower you stinky cat!" said one of the boys.',
  cat: 'L',
  selected: false
},
{
  id: 22,
  text: 'The red headed boy saw how sad the cat was.',
  cat: 'I',
  selected: false
},
{
  id: 23,
  text: 'He walked over to it.',
  cat: 'L',
  selected: false
},
{
  id: 24,
  text: '"Don\'t think I\'ll let you play basketball with us again if you touch that dirty cat", said one of the boys.',
  cat: 'P',
  selected: false
},
{
  id: 25,
  text: 'The red headed boy bent down, and pet the cat anyways.',
  cat: 'P',
  selected: false
},
{
  id: 26,
  text: 'He said to the cat, "hey there real friend. My name is Bruno, and I\'m going to take you to your new home, my home".',
  cat: 'R',
  selected: false
}];

const SAMPLE_QUESTIONS = [
{
  id: 1,
  question: 'Why did the red headed boy keep the cat?',
  answers: []
}];

const COMIC_IMAGES: Record<number, string> = {
  1: "/image1.jpg",
  2: "/image2.jpg",
  3: "/image3.jpg",
  4: "/image4.jpg",
  5: "/image5.jpg",
  6: "/image6.jpg",
  7: "/image7.jpg",
  8: "/image8.jpg",
  9: "/image9.jpg",
  10: "/image10.jpg",
  11: "/image11.jpg",
  12: "/image12.jpg",
  13: "/image13.jpg",
  14: "/image14.jpg",
  15: "/image15.jpg",
  16: "/image16.jpg",
  17: "/image17.jpg",
  18: "/image18.jpg",
  19: "/image19.jpg",
  20: "/image20.jpg",
  21: "/image21.jpg",
  22: "/image22.jpg",
  23: "/image23.jpg",
  24: "/image24.jpg",
  25: "/image25.jpg",
  26: "/image26.jpg"
};
const REACTIONS = [
{
  emoji: '👍',
  label: 'Like'
},
{
  emoji: '❓',
  label: 'Question'
},
{
  emoji: '👎',
  label: 'Dislike'
}];

const MicIcon = ({ active }: {active: boolean;}) =>
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke={active ? '#EF4444' : 'currentColor'}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">

    <path
    d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
    fill={active ? '#FEE2E2' : 'none'} />

    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>;

const SparkleIcon = () =>
<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2">

    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
  </svg>;

const ImageIcon = () =>
<svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">

    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>;

const DragIcon = () =>
<svg
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#9CA3AF"
  strokeWidth="2">

    <circle cx="9" cy="5" r="1.5" />
    <circle cx="15" cy="5" r="1.5" />
    <circle cx="9" cy="12" r="1.5" />
    <circle cx="15" cy="12" r="1.5" />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="15" cy="19" r="1.5" />
  </svg>;

const CheckIcon = () =>
<svg
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="3"
  strokeLinecap="round">

    <path d="M5 12l5 5L20 7" />
  </svg>;

const PlayIcon = () =>
<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  stroke="none">

    <path d="M8 5v14l11-7z" />
  </svg>;

const StopIcon = () =>
<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  stroke="none">

    <rect x="6" y="6" width="12" height="12" rx="2" />
  </svg>;

const TrashIcon = () =>
<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">

    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
    <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>;

// Answer classification types
type AnswerClassification = 'local' | 'global' | 'both' | null;
type StudentAnswer = {
  id: number;
  text: string;
  audioUrl?: string;
  timestamp: string;
  classification: AnswerClassification;
  classificationReason?: string;
};
type ComprehensionQuestion = {
  id: number;
  question: string;
  answers: StudentAnswer[];
};
type ItemQA = {
  id: number;
  question: string;
  answers: Array<{
    text: string;
    timestamp: string;
  }>;
};
type StoryEntry = {
  id: number;
  title: string;
  preview: string;
  wordCount: number;
  grammarItems: number;
  status: 'draft' | 'analyzed' | 'in-progress';
  createdAt: string;
};
const countWords = (text: string) =>
text.
trim().
split(/\s+/).
filter(Boolean).
length;

const SAMPLE_LIBRARY: StoryEntry[] = [
{
  id: 1,
  title: 'The Street Cat and Bruno',
  preview: SAMPLE_STORY,
  wordCount: countWords(SAMPLE_STORY),
  grammarItems: INITIAL_BULLETS.length,
  status: 'analyzed',
  createdAt: 'Mar 1, 2026'
},
{
  id: 2,
  title: 'The Lost Kite',
  preview: 'A young girl named Maya found a kite tangled in a tree...',
  wordCount: 142,
  grammarItems: 0,
  status: 'draft',
  createdAt: 'Feb 28, 2026'
},
{
  id: 3,
  title: 'The Old Lighthouse',
  preview: 'Every night the lighthouse keeper climbed the spiral stairs...',
  wordCount: 198,
  grammarItems: 18,
  status: 'in-progress',
  createdAt: 'Feb 25, 2026'
}];

export function App() {
  const [userRole, setUserRole] = useState<'teacher' | 'student' | null>(null);
  const [isAddingStory, setIsAddingStory] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'library' | 'app'>(
    'library'
  );
  const [storyLibrary, setStoryLibrary] = useState<StoryEntry[]>(SAMPLE_LIBRARY);
  const [activeStoryId, setActiveStoryId] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState('story');
  const [story, setStory] = useState(SAMPLE_STORY);
  const [storySource, setStorySource] = useState('input');
  const [aiPrompt, setAiPrompt] = useState('');
  const [bullets, setBullets] = useState<typeof INITIAL_BULLETS>([]);
  const [dragItem, setDragItem] = useState<number | null>(null);
  const [dropIndicatorId, setDropIndicatorId] = useState<number | null>(null);
  const [editingCatItemId, setEditingCatItemId] = useState<number | null>(null);
  const [generatedComics, setGeneratedComics] = useState<
    Record<
      number,
      {
        desc: string;
        bg: string;
        image?: string;
        isRegenerating?: boolean;
      }>>(

    {});
  // Enhanced bullet item state
  const [itemReactions, setItemReactions] = useState<Record<number, string[]>>(
    {}
  );
  const [itemComments, setItemComments] = useState<Record<number, string>>({});
  const [expandedPanel, setExpandedPanel] = useState<
    Record<number, string | null>>(
    {});
  // Per-panel sentence editing (Step 2)
  const [editedBulletText, setEditedBulletText] = useState<Record<number, string>>(
    {}
  );
  const [isGeneratingPanelText, setIsGeneratingPanelText] = useState<
    Record<number, boolean>>(
    {}
  );
  const [showComicPrompt, setShowComicPrompt] = useState<
    Record<number, boolean>>(
    {});
  const [comicColumnWidth, setComicColumnWidth] = useState(300);
  const isResizingComicColumnRef = useRef(false);
  const resizeStartXRef = useRef(0);
  const resizeStartWidthRef = useRef(300);
  const galleryStripRef = useRef<HTMLDivElement | null>(null);
  // Gallery state
  const [selectedGalleryPanel, setSelectedGalleryPanel] = useState<
    number | null>(
    null);
  const prevSelectedGalleryPanelRef = useRef<number | null>(null);
  const [galleryNotes, setGalleryNotes] = useState<Record<number, string>>({});
  const [galleryNoteDrafts, setGalleryNoteDrafts] = useState<Record<number, string>>(
    {}
  );
  const [isEditingGalleryNote, setIsEditingGalleryNote] = useState<
    Record<number, boolean>>(
    {}
  );
  const [showGalleryDetails, setShowGalleryDetails] = useState(false);
  const [galleryReactions, setGalleryReactions] = useState<
    Record<number, string[]>>(
    {});
  const [studentReady, setStudentReady] = useState(false);
  const [comprehensionQuestions, setComprehensionQuestions] = useState<
    ComprehensionQuestion[]>(

    SAMPLE_QUESTIONS.map((q) => ({
      ...q,
      answers: []
    }))
  );
  const [newQuestionText, setNewQuestionText] = useState('');
  const [aiQuestionPrompt, setAiQuestionPrompt] = useState('');
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [isClassifying, setIsClassifying] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<number | null>(null);
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(
    null
  );
  const [editingQuestionText, setEditingQuestionText] = useState('');
  const [teacherAnswerMode, setTeacherAnswerMode] = useState<
    Record<number, 'record' | 'type' | null>>(
    {});
  const [typedAnswerText, setTypedAnswerText] = useState<
    Record<number, string>>(
    {});
  const handleInsertSample = () => setStory(SAMPLE_STORY);
  const handleAnalyzeStory = () => {
    setBullets(INITIAL_BULLETS);
    setGeneratedComics({});
    setItemReactions({});
    setItemComments({});
    setExpandedPanel({});
    setEditedBulletText({});
    setIsGeneratingPanelText({});
    setShowComicPrompt({});
    setEditingCatItemId(null);
    if (activeStoryId !== null) {
      setStoryLibrary((prev) =>
      prev.map((entry) =>
      entry.id === activeStoryId ?
      {
        ...entry,
        preview: story,
        wordCount: countWords(story),
        grammarItems: INITIAL_BULLETS.length,
        status: 'analyzed'
      } :
      entry
      )
      );
    }
    setActiveTab('grammar');
  };
  const openStory = (entry: StoryEntry) => {
    setIsAddingStory(false);
    setActiveStoryId(entry.id);
    setStory(entry.preview);
    setItemReactions({});
    setItemComments({});
    setExpandedPanel({});
    setEditedBulletText({});
    setIsGeneratingPanelText({});
    setShowComicPrompt({});
    setEditingCatItemId(null);
    if (userRole === 'student') {
      const bgs = [
      '#E0E7FF',
      '#DBEAFE',
      '#FEE2E2',
      '#FEF3C7',
      '#D1FAE5',
      '#F3E8FF'];

      const autoComics: Record<
        number,
        {
          desc: string;
          bg: string;
          image?: string;
          isRegenerating?: boolean;
        }> =
      {};
      INITIAL_BULLETS.forEach((b) => {
        autoComics[b.id] = {
          desc: b.text,
          bg: bgs[b.id % bgs.length],
          image: COMIC_IMAGES[b.id]
        };
      });
      setBullets(INITIAL_BULLETS);
      setGeneratedComics(autoComics);
      setActiveTab('gallery');
    } else if (entry.status === 'analyzed') {
      // Teacher opening an analyzed story: go straight to gallery with all comics pre-generated
      const bgs = [
      '#E0E7FF',
      '#DBEAFE',
      '#FEE2E2',
      '#FEF3C7',
      '#D1FAE5',
      '#F3E8FF'];

      const autoComics: Record<
        number,
        {
          desc: string;
          bg: string;
          image?: string;
          isRegenerating?: boolean;
        }> =
      {};
      INITIAL_BULLETS.forEach((b) => {
        autoComics[b.id] = {
          desc: b.text,
          bg: bgs[b.id % bgs.length],
          image: COMIC_IMAGES[b.id]
        };
      });
      setBullets(INITIAL_BULLETS);
      setGeneratedComics(autoComics);
      setActiveTab('gallery');
    } else {
      setBullets([]);
      setGeneratedComics({});
      setActiveTab('gallery');
    }
    setCurrentScreen('app');
  };
  const addNewStory = () => {
    setActiveStoryId(null);
    setStory('');
    setActiveTab('story');
    setBullets([]);
    setGeneratedComics({});
    setItemReactions({});
    setItemComments({});
    setExpandedPanel({});
    setEditedBulletText({});
    setIsGeneratingPanelText({});
    setShowComicPrompt({});
    setEditingCatItemId(null);
    setIsAddingStory(true);
    setCurrentScreen('app');
  };
  const handleGenerateComic = (
  bulletId: number,
  text: string,
  options?: {
    regenerate?: boolean;
  }) =>
  {
    const bgs = [
    '#E0E7FF',
    '#DBEAFE',
    '#FEE2E2',
    '#FEF3C7',
    '#D1FAE5',
    '#F3E8FF'];

    const isRegenerating = !!options?.regenerate;
    setGeneratedComics((prev) => ({
      ...prev,
      [bulletId]: {
        desc: text,
        bg: bgs[bulletId % bgs.length],
        image: isRegenerating ? undefined : COMIC_IMAGES[bulletId],
        isRegenerating
      }
    }));
    setShowComicPrompt((prev) => ({
      ...prev,
      [bulletId]: false
    }));
  };
  const updateBulletText = (id: number, newText: string) => {
    setBullets((b) =>
    b.map((x) =>
    x.id === id ?
    {
      ...x,
      text: newText
    } :
    x
    )
    );
  };
  const handleAIGeneratePanelText = (bulletId: number, baseText: string) => {
    setIsGeneratingPanelText((prev) => ({
      ...prev,
      [bulletId]: true
    }));
    setTimeout(() => {
      setEditedBulletText((prev) => ({
        ...prev,
        [bulletId]: baseText
      }));
      setIsGeneratingPanelText((prev) => ({
        ...prev,
        [bulletId]: false
      }));
    }, 900);
  };
  const changeBulletCat = (id: number, newCat: string) => {
    setBullets((b) =>
    b.map((x) =>
    x.id === id ?
    {
      ...x,
      cat: newCat
    } :
    x
    )
    );
  };
  const moveBulletBefore = (dragId: number, targetId: number) => {
    if (dragId === targetId) return;
    setBullets((prev) => {
      const dragIndex = prev.findIndex((b) => b.id === dragId);
      const targetIndex = prev.findIndex((b) => b.id === targetId);
      if (dragIndex === -1 || targetIndex === -1) return prev;
      const next = [...prev];
      const [dragged] = next.splice(dragIndex, 1);
      const insertAt = dragIndex < targetIndex ? targetIndex - 1 : targetIndex;
      next.splice(insertAt, 0, dragged);
      return next;
    });
  };
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingComicColumnRef.current) return;
      const delta = resizeStartXRef.current - e.clientX;
      const nextWidth = resizeStartWidthRef.current + delta;
      const clampedWidth = Math.max(220, Math.min(520, nextWidth));
      setComicColumnWidth(clampedWidth);
    };
    const handleMouseUp = () => {
      isResizingComicColumnRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  const toggleReaction = (bulletId: number, emoji: string) => {
    setItemReactions((prev) => {
      const current = prev[bulletId] || [];
      if (current.includes(emoji))
      return {
        ...prev,
        [bulletId]: current.filter((e) => e !== emoji)
      };
      return {
        ...prev,
        [bulletId]: [...current, emoji]
      };
    });
  };
  const updateItemComment = (bulletId: number, text: string) => {
    setItemComments((prev) => ({
      ...prev,
      [bulletId]: text
    }));
  };
  const togglePanel = (bulletId: number, panel: string) => {
    setExpandedPanel((prev) => ({
      ...prev,
      [bulletId]: prev[bulletId] === panel ? null : panel
    }));
  };
  const tabs = [
  {
    id: 'story',
    label: '1. Story Input'
  },
  {
    id: 'grammar',
    label: '2. Narrative Grammar & Comics'
  },
  {
    id: 'gallery',
    label: '3. Comic Gallery & Q&A'
  }];

  // Helper to get comic bullets in order
  const comicBullets = bullets.filter((b) => generatedComics[b.id]);
  const selectedGalleryIndex = selectedGalleryPanel ?
  comicBullets.findIndex((b) => b.id === selectedGalleryPanel) :
  -1;
  useEffect(() => {
    if (selectedGalleryPanel === null) {
      prevSelectedGalleryPanelRef.current = null;
      return;
    }
    const wasClosed = prevSelectedGalleryPanelRef.current === null;
    if (wasClosed) {
      setShowGalleryDetails(false);
    }
    setIsEditingGalleryNote((prev) => ({
      ...prev,
      [selectedGalleryPanel]: false
    }));
    prevSelectedGalleryPanelRef.current = selectedGalleryPanel;
  }, [selectedGalleryPanel]);
  const toggleGalleryReaction = (bulletId: number, emoji: string) => {
    setGalleryReactions((prev) => {
      const current = prev[bulletId] || [];
      if (current.includes(emoji))
      return {
        ...prev,
        [bulletId]: current.filter((e) => e !== emoji)
      };
      return {
        ...prev,
        [bulletId]: [...current, emoji]
      };
    });
  };
  const handleAddQuestion = () => {
    if (!newQuestionText.trim()) return;
    const newQuestion: ComprehensionQuestion = {
      id: Date.now(),
      question: newQuestionText.trim(),
      answers: []
    };
    setComprehensionQuestions((prev) => [...prev, newQuestion]);
    setNewQuestionText('');
  };
  const handleDeleteQuestion = (questionId: number) => {
    setComprehensionQuestions((prev) => prev.filter((q) => q.id !== questionId));
  };
  const handleStartEditQuestion = (questionId: number, currentText: string) => {
    setEditingQuestionId(questionId);
    setEditingQuestionText(currentText);
  };
  const handleSaveEditQuestion = () => {
    if (!editingQuestionId || !editingQuestionText.trim()) return;
    setComprehensionQuestions((prev) =>
    prev.map((q) =>
    q.id === editingQuestionId ?
    {
      ...q,
      question: editingQuestionText.trim()
    } :
    q
    )
    );
    setEditingQuestionId(null);
    setEditingQuestionText('');
  };
  const handleCancelEditQuestion = () => {
    setEditingQuestionId(null);
    setEditingQuestionText('');
  };
  const handleSubmitTypedAnswer = (questionId: number) => {
    const text = typedAnswerText[questionId]?.trim();
    if (!text) return;
    setIsClassifying(true);
    setActiveQuestionId(questionId);
    setTimeout(() => {
      const classifications: Array<{
        type: AnswerClassification;
        reason: string;
      }> = [
      {
        type: 'local',
        reason:
        'This answer directly references specific events from the text.'
      },
      {
        type: 'global',
        reason:
        'This answer uses inference and world knowledge beyond the text.'
      },
      {
        type: 'both',
        reason: 'This answer combines text evidence with broader inference.'
      }];

      const randomClassification =
      classifications[Math.floor(Math.random() * classifications.length)];
      const newAnswer: StudentAnswer = {
        id: Date.now(),
        text,
        timestamp: new Date().toLocaleTimeString(),
        classification: randomClassification.type,
        classificationReason: randomClassification.reason
      };
      setComprehensionQuestions((prev) =>
      prev.map((q) =>
      q.id === questionId ?
      {
        ...q,
        answers: [...q.answers, newAnswer]
      } :
      q
      )
      );
      setIsClassifying(false);
      setActiveQuestionId(null);
      setTypedAnswerText((prev) => ({
        ...prev,
        [questionId]: ''
      }));
      setTeacherAnswerMode((prev) => ({
        ...prev,
        [questionId]: null
      }));
    }, 1200);
  };
  const handleTeacherStartRecording = (questionId: number) => {
    setActiveQuestionId(questionId);
    setIsRecording(true);
    setRecordingTime(0);
    setCurrentTranscript('');
    const timer = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    (window as any).__recordingTimer = timer;
  };
  const handleGenerateAIQuestions = () => {
    setIsGeneratingQuestions(true);
    // Simulate AI generation
    setTimeout(() => {
      const aiQuestions: ComprehensionQuestion[] = [
      {
        id: Date.now(),
        question: 'What does the story teach us about friendship?',
        answers: []
      },
      {
        id: Date.now() + 1,
        question: 'Why do you think the other boys were mean to the cat?',
        answers: []
      },
      {
        id: Date.now() + 2,
        question: 'How did Bruno show courage at the end of the story?',
        answers: []
      }];

      setComprehensionQuestions((prev) => [...prev, ...aiQuestions]);
      setIsGeneratingQuestions(false);
      setAiQuestionPrompt('');
    }, 1500);
  };
  const handleStartRecording = (questionId: number) => {
    setActiveQuestionId(questionId);
    setIsRecording(true);
    setRecordingTime(0);
    setCurrentTranscript('');
    // Simulate recording timer
    const timer = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    (window as any).__recordingTimer = timer;
  };
  const handleStopRecording = () => {
    clearInterval((window as any).__recordingTimer);
    setIsRecording(false);
    // Simulate transcription result
    const sampleTranscripts = [
    'The kids were being mean to the cat',
    'The cat was homeless and needed help',
    'The kid is kind and wanted to save the cat',
    'He wanted to be a hero for the cat',
    'He is a brave kid and the cat wanted to make him feel better',
    'Because when an animal is being called bad names you need to help them'];

    const randomTranscript =
    sampleTranscripts[Math.floor(Math.random() * sampleTranscripts.length)];
    setCurrentTranscript(randomTranscript);
  };
  const handleSubmitAnswer = () => {
    if (!activeQuestionId || !currentTranscript.trim()) return;
    setIsClassifying(true);
    // Simulate AI classification
    setTimeout(() => {
      const classifications: Array<{
        type: AnswerClassification;
        reason: string;
      }> = [
      {
        type: 'local',
        reason:
        'This answer directly references specific events from the text.'
      },
      {
        type: 'global',
        reason:
        'This answer uses inference and world knowledge beyond the text.'
      },
      {
        type: 'both',
        reason: 'This answer combines text evidence with broader inference.'
      }];

      const randomClassification =
      classifications[Math.floor(Math.random() * classifications.length)];
      const newAnswer: StudentAnswer = {
        id: Date.now(),
        text: currentTranscript,
        timestamp: new Date().toLocaleTimeString(),
        classification: randomClassification.type,
        classificationReason: randomClassification.reason
      };
      setComprehensionQuestions((prev) =>
      prev.map((q) =>
      q.id === activeQuestionId ?
      {
        ...q,
        answers: [...q.answers, newAnswer]
      } :
      q
      )
      );
      setIsClassifying(false);
      setCurrentTranscript('');
      setActiveQuestionId(null);
      setRecordingTime(0);
    }, 1200);
  };
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const getClassificationStyle = (classification: AnswerClassification) => {
    switch (classification) {
      case 'local':
        return {
          bg: '#DBEAFE',
          color: '#1D4ED8',
          border: '#93C5FD',
          label: 'Local'
        };
      case 'global':
        return {
          bg: '#FEF3C7',
          color: '#92400E',
          border: '#FDE68A',
          label: 'Global'
        };
      case 'both':
        return {
          bg: '#D1FAE5',
          color: '#065F46',
          border: '#A7F3D0',
          label: 'Both'
        };
      default:
        return {
          bg: '#F1F5F9',
          color: '#64748B',
          border: '#E2E8F0',
          label: 'Unclassified'
        };
    }
  };
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: '#F8FAFC',
        minHeight: '100vh',
        color: '#1E293B'
      }}>

      {/* Login / Role Selection */}
      {!userRole &&
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
          'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F5F3FF 100%)'
        }}>

          <div
          style={{
            textAlign: 'center',
            maxWidth: 520,
            padding: '0 20px'
          }}>

            <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #818CF8, #6366F1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 22,
              margin: '0 auto 16px',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
            }}>

              M
            </div>
            <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              margin: '0 0 6px',
              color: '#1E293B'
            }}>

              MOSAIC
            </h1>
            <p
            style={{
              color: '#64748B',
              fontSize: 15,
              margin: '0 0 32px',
              lineHeight: 1.6
            }}>

              Multimodal Organizer for Story Analysis, Imagery &
              Comprehension.
            </p>
            <p
            style={{
              color: '#94A3B8',
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>

              I am a...
            </p>
            <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center'
            }}>

              <button
              onClick={() => setUserRole('teacher')}
              style={{
                flex: 1,
                maxWidth: 220,
                padding: '28px 20px',
                background: '#fff',
                border: '2px solid #E2E8F0',
                borderRadius: 16,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10
              }}>

                <span
                style={{
                  fontSize: 36
                }}>

                  👩‍🏫
                </span>
                <span
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#1E293B'
                }}>

                  Teacher
                </span>
                <span
                style={{
                  fontSize: 12,
                  color: '#94A3B8',
                  lineHeight: 1.4
                }}>

                  Create stories, analyze grammar, generate comics & questions
                </span>
              </button>
              <button
              onClick={() => setUserRole('student')}
              style={{
                flex: 1,
                maxWidth: 220,
                padding: '28px 20px',
                background: '#fff',
                border: '2px solid #E2E8F0',
                borderRadius: 16,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10
              }}>

                <span
                style={{
                  fontSize: 36
                }}>

                  👩‍🎓
                </span>
                <span
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#1E293B'
                }}>

                  Student
                </span>
                <span
                style={{
                  fontSize: 12,
                  color: '#94A3B8',
                  lineHeight: 1.4
                }}>

                  Read stories, view comics & answer comprehension questions
                </span>
              </button>
            </div>
          </div>
        </div>
      }

      {/* Main App */}
      {userRole && currentScreen === 'library' &&
      <div
        style={{
          minHeight: '100vh',
          background: '#F8FAFC'
        }}>

          {/* Library Nav */}
          <div
          style={{
            background: '#fff',
            borderBottom: '1px solid #E2E8F0',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}>

            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>

              <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #818CF8, #6366F1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14
              }}>

                M
              </div>
              <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#1E293B'
              }}>

                MOSAIC
              </span>
              <span
              style={{
                fontSize: 11,
                background: '#EEF2FF',
                color: '#6366F1',
                padding: '2px 8px',
                borderRadius: 99,
                fontWeight: 600
              }}>

                BETA
              </span>
            </div>
            <div
            style={{
              flex: 1
            }} />

            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }}>

              <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#64748B',
                background: userRole === 'teacher' ? '#EEF2FF' : '#FFFBEB',
                padding: '4px 10px',
                borderRadius: 99,
                border:
                userRole === 'teacher' ?
                '1px solid #C7D2FE' :
                '1px solid #FDE68A'
              }}>

                {userRole === 'teacher' ? '👩‍🏫 Teacher' : '👩‍🎓 Student'}
              </span>
              <button
              onClick={() => {
                setUserRole(null);
                setCurrentScreen('library');
              }}
              style={{
                padding: '6px 12px',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#64748B'
              }}>

                Log out
              </button>
            </div>
          </div>

          {/* Library Content */}
          <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '32px 20px'
          }}>

            {/* Header */}
            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 24
            }}>

              <div>
                <h1
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  margin: '0 0 4px',
                  color: '#1E293B'
                }}>

                  Story Library
                </h1>
                <p
                style={{
                  color: '#64748B',
                  fontSize: 14,
                  margin: 0
                }}>

                  {userRole === 'teacher' ?
                `${storyLibrary.length} stories · Click any row to open` :
                `${storyLibrary.filter((s) => s.status === 'analyzed').length} stories available`}
                </p>
              </div>
              {userRole === 'teacher' &&
            <button
              onClick={addNewStory}
              style={{
                padding: '10px 18px',
                background: '#6366F1',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>

                  + Add Story
                </button>
            }
            </div>

            {/* Table */}
            <div
            style={{
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              overflow: 'hidden'
            }}>

              {/* Table header */}
              <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 100px 110px 120px',
                gap: 0,
                padding: '10px 20px',
                background: '#F8FAFC',
                borderBottom: '1px solid #E2E8F0'
              }}>

                {['Title', 'Words', 'Items', 'Status', ''].map((h, i) =>
              <div
                key={i}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textAlign: i > 0 ? 'center' : 'left'
                }}>

                    {h}
                  </div>
              )}
              </div>

              {/* Rows */}
              {storyLibrary.map((entry, idx) => {
              const statusConfig = {
                analyzed: {
                  label: 'Analyzed',
                  bg: '#D1FAE5',
                  color: '#065F46'
                },
                'in-progress': {
                  label: 'In Progress',
                  bg: '#FEF3C7',
                  color: '#92400E'
                },
                draft: {
                  label: 'Draft',
                  bg: '#F1F5F9',
                  color: '#475569'
                }
              };
              const wordCount = countWords(entry.preview);
              const grammarItems = entry.grammarItems;
              const sc = statusConfig[entry.status];
              const canOpen =
              userRole === 'teacher' || entry.status === 'analyzed';
              return (
                <div
                  key={entry.id}
                  onClick={() => canOpen && openStory(entry)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 100px 110px 120px',
                    padding: '14px 20px',
                    borderBottom:
                    idx < storyLibrary.length - 1 ?
                    '1px solid #F1F5F9' :
                    'none',
                    cursor: canOpen ? 'pointer' : 'default',
                    transition: 'background 0.12s',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    if (canOpen) e.currentTarget.style.background = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#fff';
                  }}>

                    {/* Title */}
                    <div>
                      <div
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#1E293B',
                        marginBottom: 2
                      }}>

                        {entry.title}
                      </div>
                      <div
                      style={{
                        fontSize: 12,
                        color: '#94A3B8'
                      }}>

                        {entry.createdAt}
                      </div>
                    </div>
                    {/* Words */}
                    <div
                    style={{
                      textAlign: 'center',
                      fontSize: 13,
                      color: '#475569',
                      fontVariantNumeric: 'tabular-nums'
                    }}>

                      {wordCount}
                    </div>
                    {/* Grammar Items */}
                    <div
                    style={{
                      textAlign: 'center',
                      fontSize: 13,
                      color: grammarItems > 0 ? '#475569' : '#CBD5E1',
                      fontVariantNumeric: 'tabular-nums'
                    }}>

                      {grammarItems > 0 ? grammarItems : '—'}
                    </div>
                    {/* Status */}
                    <div
                    style={{
                      textAlign: 'center'
                    }}>

                      <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: 99,
                        fontSize: 11,
                        fontWeight: 600,
                        background: sc.bg,
                        color: sc.color
                      }}>

                        {sc.label}
                      </span>
                    </div>
                    {/* Action */}
                    <div
                    style={{
                      textAlign: 'center'
                    }}>

                      {userRole === 'teacher' ?
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openStory(entry);
                      }}
                      style={{
                        padding: '5px 14px',
                        background: 'transparent',
                        border: '1px solid #E2E8F0',
                        borderRadius: 7,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: '#4F46E5'
                      }}>

                          {entry.status === 'analyzed' ? 'Edit' : 'Open'} →
                        </button> :
                    canOpen ?
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openStory(entry);
                      }}
                      style={{
                        padding: '5px 14px',
                        background: '#6366F1',
                        border: 'none',
                        borderRadius: 7,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: '#fff'
                      }}>

                          Open
                        </button> :

                    <span
                      style={{
                        fontSize: 12,
                        color: '#CBD5E1'
                      }}>

                          Unavailable
                        </span>
                    }
                    </div>
                  </div>);

            })}
            </div>
          </div>
        </div>
      }

      {/* Main App */}
      {userRole && currentScreen === 'app' &&
      <>
          {/* Top Nav */}
          <div
          style={{
            background: '#fff',
            borderBottom: '1px solid #E2E8F0',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>

            {/* Logo */}
            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexShrink: 0
            }}>

              <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #818CF8, #6366F1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: 14
              }}>

                M
              </div>
              <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#1E293B'
              }}>

                MOSAIC
              </span>
              <span
              style={{
                fontSize: 11,
                background: '#EEF2FF',
                color: '#6366F1',
                padding: '2px 8px',
                borderRadius: 99,
                fontWeight: 600
              }}>

                BETA
              </span>
            </div>

            {/* Back to library */}
            <button
            onClick={() => {
              if (userRole === 'student') {
                setCurrentScreen('library');
                return;
              }
              const visibleTabs = tabs.filter(
                (t) => t.id !== 'story' || isAddingStory
              );
              const activeIndex = visibleTabs.findIndex(
                (t) => t.id === activeTab
              );
              if (activeIndex > 0) {
                setActiveTab(visibleTabs[activeIndex - 1].id);
                return;
              }
              setCurrentScreen('library');
            }}
            style={{
              padding: '6px 12px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flexShrink: 0
            }}>

              ← Library
            </button>

            {/* Horizontal Stepper — non-interactive, centered */}
            <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}>

              {(() => {
              const visibleTabs = tabs.filter(
                (t) => t.id !== 'story' || isAddingStory
              );
              const activeIndex = visibleTabs.findIndex(
                (t) => t.id === activeTab
              );
              const stepLabels: Record<string, string> = {
                story: 'Story Input',
                grammar: 'Grammar & Comics',
                gallery: 'Gallery & Q&A'
              };
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0
                  }}>

                    {visibleTabs.map((t, i) => {
                    const isCompleted = i < activeIndex;
                    const isActive = i === activeIndex;
                    const isFuture = i > activeIndex;
                    return (
                      <Fragment key={t.id}>
                          {/* Step */}
                          <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 4
                          }}>

                            {/* Circle */}
                            <div
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: '50%',
                              background: isCompleted ?
                              '#4F46E5' :
                              isActive ?
                              '#4F46E5' :
                              '#fff',
                              border: isFuture ?
                              '2px solid #CBD5E1' :
                              '2px solid #4F46E5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              transition: 'all 0.2s',
                              boxShadow: isActive ?
                              '0 0 0 3px rgba(99,102,241,0.15)' :
                              'none'
                            }}>

                              {isCompleted ?
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              strokeLinecap="round">

                                  <path d="M5 12l5 5L20 7" />
                                </svg> :

                            <span
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: isActive ? '#fff' : '#CBD5E1',
                                lineHeight: 1
                              }}>

                                  {i + 1}
                                </span>
                            }
                            </div>
                            {/* Label */}
                            <span
                            style={{
                              fontSize: 11,
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ?
                              '#4F46E5' :
                              isCompleted ?
                              '#6366F1' :
                              '#94A3B8',
                              whiteSpace: 'nowrap',
                              transition: 'color 0.2s'
                            }}>

                              {stepLabels[t.id]}
                            </span>
                          </div>

                          {/* Connector line between steps */}
                          {i < visibleTabs.length - 1 &&
                        <div
                          style={{
                            width: 60,
                            height: 2,
                            marginBottom: 18,
                            background:
                            i < activeIndex ? '#4F46E5' : '#E2E8F0',
                            transition: 'background 0.2s',
                            flexShrink: 0
                          }} />

                        }
                        </Fragment>);

                  })}
                  </div>);

            })()}
            </div>

            {/* Go Next button */}
              {(() => {
              const visibleTabs = tabs.filter(
                (t) => t.id !== 'story' || isAddingStory
              );
            const activeIndex = visibleTabs.findIndex(
              (t) => t.id === activeTab
            );
            const isLast = activeIndex >= visibleTabs.length - 1;
            return (
              <button
                onClick={() =>
                !isLast && setActiveTab(visibleTabs[activeIndex + 1].id)
                }
                disabled={isLast}
                style={{
                  padding: '7px 14px',
                  background: isLast ? '#F8FAFC' : '#4F46E5',
                  border: `1px solid ${isLast ? '#E2E8F0' : '#4F46E5'}`,
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: isLast ? 'not-allowed' : 'pointer',
                  color: isLast ? '#CBD5E1' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  flexShrink: 0,
                  transition: 'all 0.15s'
                }}>

                  Go Next →
                </button>);

          })()}

            {/* Role badge + logout */}
            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0
            }}>

              <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#64748B',
                background: userRole === 'teacher' ? '#EEF2FF' : '#FFFBEB',
                padding: '4px 10px',
                borderRadius: 99,
                border:
                userRole === 'teacher' ?
                '1px solid #C7D2FE' :
                '1px solid #FDE68A'
              }}>

                {userRole === 'teacher' ? '👩‍🏫 Teacher' : '👩‍🎓 Student'}
              </span>
              <button
              onClick={() => {
                setUserRole(null);
                setCurrentScreen('library');
              }}
              style={{
                padding: '6px 12px',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#64748B'
              }}>

                Log out
              </button>
            </div>
          </div>

          <div
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '24px 20px'
          }}>

            {/* STEP 1: Story Input */}
            {activeTab === 'story' &&
          <div>
                <div
              style={{
                marginBottom: 20
              }}>

                  <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  margin: '0 0 6px'
                }}>

                    Insert a Story
                  </h2>
                  <p
                style={{
                  color: '#64748B',
                  margin: 0,
                  fontSize: 14
                }}>

                    Paste a story, write one, or let AI generate it for you.
                  </p>
                </div>
                <div
              style={{
                display: 'flex',
                gap: 8,
                marginBottom: 16
              }}>

                  {(['input', 'ai'] as const).map((s) =>
              <button
                key={s}
                onClick={() => setStorySource(s)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  border:
                  storySource === s ?
                  '2px solid #6366F1' :
                  '2px solid #E2E8F0',
                  background: storySource === s ? '#EEF2FF' : '#fff',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                  color: storySource === s ? '#4F46E5' : '#64748B'
                }}>

                      {s === 'input' ? '✏️ Input Story' : '✨ AI Generate'}
                    </button>
              )}
                </div>
                {storySource === 'ai' &&
            <div
              style={{
                background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
                border: '1px solid #C7D2FE'
              }}>

                    <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 10
                }}>

                      <SparkleIcon />
                      <span
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#4F46E5'
                  }}>

                        AI Story Generator
                      </span>
                    </div>
                    <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder='e.g. "Write a story a cat..."'
                style={{
                  width: '100%',
                  minHeight: 70,
                  border: '1px solid #C7D2FE',
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fff'
                }} />

                    <button
                onClick={handleInsertSample}
                style={{
                  marginTop: 10,
                  padding: '10px 20px',
                  background: '#6366F1',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 13,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}>

                      <SparkleIcon /> Generate Story
                    </button>
                  </div>
            }
                <div
              style={{
                position: 'relative'
              }}>

                  <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Type or paste your story here..."
                style={{
                  width: '100%',
                  minHeight: 220,
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  padding: 16,
                  fontSize: 15,
                  lineHeight: 1.7,
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fff'
                }} />

                  <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10
                }}>

                    <span
                  style={{
                    fontSize: 12,
                    color: '#94A3B8'
                  }}>

                      {story.split(/\s+/).filter(Boolean).length} words
                    </span>
                    <div
                  style={{
                    display: 'flex',
                    gap: 8
                  }}>

                      {!story &&
                  <button
                    onClick={handleInsertSample}
                    style={{
                      padding: '10px 16px',
                      background: '#F1F5F9',
                      color: '#475569',
                      border: 'none',
                      borderRadius: 8,
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: 13
                    }}>

                          Load Sample Story
                        </button>
                  }
                      <button
                    onClick={handleAnalyzeStory}
                    disabled={!story}
                    style={{
                      padding: '10px 24px',
                      background: story ? '#6366F1' : '#CBD5E1',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      cursor: story ? 'pointer' : 'not-allowed',
                      fontWeight: 600,
                      fontSize: 13,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6
                    }}>

                        Analyze with Narrative Grammar →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          }

            {/* STEP 2: Narrative Grammar */}
            {activeTab === 'grammar' &&
          <div>
                <div
              style={{
                marginBottom: 20,
                display: 'flex',
                alignItems: 'flex-start'
              }}>

                  <div>
                    <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    margin: '0 0 6px'
                  }}>

                      Narrative Grammar & Comics
                    </h2>
                    <p
                  style={{
                    color: '#64748B',
                    margin: 0,
                    fontSize: 14
                  }}>

                      AI categorized story elements. Add reactions, notes,
                      questions, and generate comics.
                    </p>
                    <div
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                  }}>

                      {CATEGORIES.map((c) =>
                  <span
                    key={c.id}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: c.color,
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: 999,
                      padding: '4px 10px'
                    }}>

                          {c.label} ({c.id})
                        </span>
                  )}
                    </div>
                  </div>
                </div>

                {/* Ordered items list */}
                <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>

                  {bullets.map((item, idx) => {
                const cat = CATEGORIES.find((c) => c.id === item.cat);
                const hasComic = !!generatedComics[item.id];
                const reactions = itemReactions[item.id] || [];
                const comment = itemComments[item.id] || '';
                const editingText = editedBulletText[item.id] || item.text;
                const isEditing = !!showComicPrompt[item.id];
                const isTextGenerating = !!isGeneratingPanelText[item.id];
                return (
                  <div
                    key={item.id}
                    onDragOver={(e) => {
                      e.preventDefault();
                      if (dropIndicatorId !== item.id) setDropIndicatorId(item.id);
                    }}
                    onDrop={() => {
                      if (dragItem !== null) {
                        moveBulletBefore(dragItem, item.id);
                        setDragItem(null);
                      }
                      setDropIndicatorId(null);
                    }}
                    style={{
                      background: '#fff',
                      border: `1px solid ${cat?.border || '#E2E8F0'}`,
                      borderRadius: 12,
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      {dragItem !== null && dropIndicatorId === item.id &&
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 3,
                        background: '#4F46E5',
                        zIndex: 3
                      }} />
                    }
                      <div
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 10,
                      minWidth: 22,
                      height: 22,
                      padding: '0 6px',
                      borderRadius: 999,
                      background: cat?.bg || '#EEF2FF',
                      border: `1px solid ${cat?.border || '#C7D2FE'}`,
                      color: cat?.color || '#4F46E5',
                      fontSize: 12,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}>

                        {idx + 1}
                      </div>

                              {/* Main row: text + comic side by side */}
                              <div
                            style={{
                              display: 'flex'
                            }}>

                                {/* Left: text and controls */}
                                <div
                              style={{
                                flex: 1,
                                padding: '12px 14px 12px 44px'
                              }}>

                                  <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 10,
                                  marginBottom: 8
                                }}>

                                    <div
                                  style={{
                                    marginTop: 1,
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6
                                  }}>

                                      <div
                                    draggable
                                    onDragStart={() => {
                                      setDragItem(item.id);
                                      setDropIndicatorId(item.id);
                                    }}
                                    onDragEnd={() => {
                                      setDragItem(null);
                                      setDropIndicatorId(null);
                                    }}
                                    style={{
                                      cursor: 'grab',
                                      opacity: 0.6,
                                      display: 'flex',
                                      alignItems: 'center'
                                    }}>

                                          <DragIcon />
                                        </div>
                                      <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setEditedBulletText((prev) => ({
                                        ...prev,
                                        [item.id]: prev[item.id] || item.text
                                      }));
                                      setShowComicPrompt((prev) => ({
                                        ...prev,
                                        [item.id]: !prev[item.id]
                                      }));
                                    }}
                                    style={{
                                      padding: '3px 8px',
                                      borderRadius: 6,
                                      border: '1px solid #C7D2FE',
                                      background: '#EEF2FF',
                                      cursor: 'pointer',
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: '#4F46E5'
                                    }}>

                                        {isEditing ? 'Close' : 'Edit'}
                                      </button>
                                    </div>
                                    <p
                                  style={{
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                    color: '#334155',
                                    flex: 1,
                                    margin: 0
                                  }}>

                                      {item.text}
                                    </p>
                                  </div>
                                  <div
                                style={{
                                  marginBottom: isEditing ? 0 : 2
                                }}>
                                    <button
                                  onClick={() =>
                                  setEditingCatItemId((prev) =>
                                  prev === item.id ? null : item.id
                                  )
                                  }
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '3px 10px',
                                    borderRadius: 99,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    background: cat?.bg || '#F1F5F9',
                                    color: cat?.color || '#64748B',
                                    border: `1px solid ${cat?.border || '#E2E8F0'}`,
                                    cursor: 'pointer'
                                  }}>

                                      {cat?.label || item.cat} ({item.cat}) ▾
                                    </button>
                                    {editingCatItemId === item.id &&
                                <div
                                  style={{
                                    marginTop: 8,
                                    display: 'flex',
                                    gap: 6,
                                    flexWrap: 'wrap'
                                  }}>

                                        {CATEGORIES.map((c) =>
                                    <button
                                      key={c.id}
                                      onClick={() => {
                                        changeBulletCat(item.id, c.id);
                                        setEditingCatItemId(null);
                                      }}
                                      style={{
                                        padding: '4px 10px',
                                        borderRadius: 999,
                                        border: `1px solid ${c.border}`,
                                        background: c.bg,
                                        color: c.color,
                                        fontSize: 11,
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                      }}>

                                          {c.label} ({c.id})
                                        </button>
                                    )}
                                      </div>
                                }
                                  </div>
                                  {/* Sentence editing and comic regeneration */}
                                  {isEditing &&
                              <div
                                style={{
                                  marginTop: 10,
                                  padding: '10px 12px',
                                  background:
                                  'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
                                  borderRadius: 8,
                                  border: '1px solid #C7D2FE'
                                  }}>

                                      <div
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: '#6366F1',
                                    marginBottom: 6,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 4
                                  }}>

                                        <SparkleIcon /> Edit sentence before
                                        generating comic
                                      </div>
                                      <textarea
                                  value={editingText}
                                  onChange={(e) =>
                                  setEditedBulletText((prev) => ({
                                    ...prev,
                                    [item.id]: e.target.value
                                  }))
                                  }
                                  placeholder="Edit this story sentence..."
                                  style={{
                                    width: '100%',
                                    minHeight: 50,
                                    border: '1px solid #C7D2FE',
                                    borderRadius: 6,
                                    padding: 8,
                                    fontSize: 12,
                                    resize: 'vertical',
                                    fontFamily: 'inherit',
                                    boxSizing: 'border-box',
                                    background: '#fff',
                                    lineHeight: 1.5
                                  }} />

                                      <div
                                  style={{
                                    display: 'flex',
                                    gap: 6,
                                    marginTop: 8
                                  }}>

                                        <button
                                    onClick={() =>
                                    handleAIGeneratePanelText(
                                      item.id,
                                      editingText
                                    )
                                    }
                                    disabled={isTextGenerating}
                                    style={{
                                      padding: '6px 14px',
                                      background: isTextGenerating ?
                                      '#CBD5E1' :
                                      '#0EA5E9',
                                      color: '#fff',
                                      border: 'none',
                                      borderRadius: 6,
                                      cursor: isTextGenerating ?
                                      'not-allowed' :
                                      'pointer',
                                      fontSize: 12,
                                      fontWeight: 600
                                    }}>

                                          {isTextGenerating ?
                                      'Generating...' :
                                      'AI Generate Text'}
                                        </button>
                                        <button
                                    onClick={() =>
                                    {
                                      const nextText = editingText.trim();
                                      if (!nextText) return;
                                      updateBulletText(item.id, nextText);
                                      handleGenerateComic(item.id, nextText, {
                                        regenerate: true
                                      });
                                    }
                                    }
                                    disabled={!editingText.trim()}
                                    style={{
                                      padding: '6px 14px',
                                      background: editingText.trim() ?
                                      '#6366F1' :
                                      '#CBD5E1',
                                      color: '#fff',
                                      border: 'none',
                                      borderRadius: 6,
                                      cursor: editingText.trim() ?
                                      'pointer' :
                                      'not-allowed',
                                      fontSize: 12,
                                      fontWeight: 600,
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 4
                                    }}>

                                          <SparkleIcon /> Generate Comic
                                        </button>
                                        <button
                                    onClick={() =>
                                    setShowComicPrompt((prev) => ({
                                      ...prev,
                                      [item.id]: false
                                    }))
                                    }
                                    style={{
                                      padding: '6px 12px',
                                      background: '#F1F5F9',
                                      color: '#64748B',
                                      border: '1px solid #E2E8F0',
                                      borderRadius: 6,
                                      cursor: 'pointer',
                                      fontSize: 12,
                                      fontWeight: 600
                                    }}>

                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                              }
                                </div>
                                {hasComic &&
                            <div
                              onMouseDown={(e) => {
                                isResizingComicColumnRef.current = true;
                                resizeStartXRef.current = e.clientX;
                                resizeStartWidthRef.current = comicColumnWidth;
                                document.body.style.cursor = 'col-resize';
                                document.body.style.userSelect = 'none';
                              }}
                              style={{
                                width: 8,
                                cursor: 'col-resize',
                                flexShrink: 0,
                                background: '#E2E8F0'
                              }} />
                            }
                                {/* Right: comic image */}
                                {hasComic &&
                            <div
                              style={{
                                width: comicColumnWidth,
                                flexShrink: 0,
                                borderLeft: `1px solid ${cat?.border || '#E2E8F0'}`,
                                background: '#F8FAFC',
                                display: 'flex',
                                flexDirection: 'column'
                              }}>

                                    {/* Image area */}
                                    <div
                                style={{
                                  position: 'relative',
                                  flex: 1
                                }}>

                                      {generatedComics[item.id].image ?
                                <img
                                  src={generatedComics[item.id].image}
                                  alt={generatedComics[item.id].desc}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    minHeight: 180,
                                    display: 'block'
                                  }} /> :


                                <div
                                  style={{
                                    padding: 16,
                                    textAlign: 'center',
                                    minHeight: 180,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                  }}>

                                          <div
                                    style={{
                                      width: 40,
                                      height: 40,
                                      borderRadius: 8,
                                      background:
                                      generatedComics[item.id].bg,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      margin: '0 auto 8px'
                                    }}>

                                            <ImageIcon />
                                          </div>
                                          <p
                                    style={{
                                      fontSize: 11,
                                      color: '#94A3B8',
                                      margin: 0
                                    }}>

                                            {generatedComics[item.id].
                                    isRegenerating ?
                                    'Image is being regenerated' :
                                    'Comic panel'}
                                          </p>
                                        </div>
                                }
                                    </div>
                                    {/* Comic controls */}
                                    <div
                                style={{
                                  padding: '6px 8px',
                                  borderTop: `1px solid ${cat?.border || '#E2E8F0'}`,
                                  display: 'flex',
                                  gap: 4,
                                  alignItems: 'center',
                                  background: '#fff'
                                }}>

                                      <button
                                  onClick={() => {
                                    setEditedBulletText((prev) => ({
                                      ...prev,
                                      [item.id]: prev[item.id] || item.text
                                    }));
                                    setShowComicPrompt((prev) => ({
                                      ...prev,
                                      [item.id]: true
                                    }));
                                  }}
                                  style={{
                                    padding: '3px 8px',
                                    borderRadius: 5,
                                    border: '1px solid #E2E8F0',
                                    background: '#F8FAFC',
                                    cursor: 'pointer',
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: '#64748B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3
                                  }}>

                                        🔄 Redo
                                      </button>
                                    </div>
                                  </div>
                            }
                              </div>
                              {/* Toolbar: reactions + panel toggles */}
                              <div
                            style={{
                              borderTop: `1px solid ${cat?.border || '#E2E8F0'}`,
                              padding: '8px 14px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              flexWrap: 'wrap',
                              background: '#FAFBFC'
                            }}>

                                <div
                              style={{
                                flex: 1
                              }} />

                              </div>
                            </div>);

              })}
                </div>
              </div>
          }

            {/* STEP 3: Comic Gallery */}
            {activeTab === 'gallery' &&
          <div>
                <div
              style={{
                marginBottom: 24,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 12
              }}>

                  <div>
                    <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    margin: '0 0 6px'
                  }}>

                      Comic Gallery
                    </h2>
                    <p
                  style={{
                    color: '#64748B',
                    margin: 0,
                    fontSize: 14
                  }}>

                      Review your generated comics, add reactions, and see where
                      they fit in the story arc.
                    </p>
                  </div>
                  {userRole === 'teacher' &&
                <button
                  onClick={() => setActiveTab('grammar')}
                  style={{
                    padding: '10px 14px',
                    background: '#6366F1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    flexShrink: 0
                  }}>

                      Edit Comic
                    </button>
                }
                </div>

                {comicBullets.length === 0 ?
            <div
              style={{
                padding: 40,
                textAlign: 'center',
                background: '#fff',
                borderRadius: 12,
                border: '1px dashed #E2E8F0'
              }}>

                    <div
                style={{
                  fontSize: 40,
                  marginBottom: 12
                }}>

                      🎨
                    </div>
                    <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  margin: '0 0 8px'
                }}>

                      No comics generated yet
                    </h3>
                    <p
                style={{
                  color: '#64748B',
                  fontSize: 14,
                  margin: 0
                }}>

                      Go back to Step 2 to generate some comics for your story.
                    </p>
                  </div> :

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>

                    <button
                onClick={() =>
                galleryStripRef.current?.scrollBy({
                  left: -320,
                  behavior: 'smooth'
                })
                }
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid #CBD5E1',
                  background: '#fff',
                  color: '#334155',
                  cursor: 'pointer',
                  flexShrink: 0,
                  fontSize: 18,
                  fontWeight: 700
                }}>

                      ←
                    </button>
                    <div
                ref={galleryStripRef}
                style={{
                  display: 'flex',
                  gap: 16,
                  overflowX: 'auto',
                  paddingBottom: 20,
                  scrollbarWidth: 'thin',
                  flex: 1
                }}>

                    {comicBullets.map((b, i) => {
                const comic = generatedComics[b.id];
                const cat = CATEGORIES.find((c) => c.id === b.cat);
                return (
                  <div
                    key={b.id}
                    onClick={() => setSelectedGalleryPanel(b.id)}
                    style={{
                      minWidth: 260,
                      width: 260,
                      background: '#fff',
                      borderRadius: 12,
                      border: '1px solid #E2E8F0',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow =
                      '0 10px 15px -3px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow =
                      '0 2px 4px rgba(0,0,0,0.05)';
                    }}>

                          <div
                      style={{
                        height: 200,
                        background: comic.bg,
                        position: 'relative'
                      }}>

                            {comic.image ?
                      <img
                        src={comic.image}
                        alt="comic"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }} /> :


                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>

                                <ImageIcon />
                              </div>
                      }
                            <div
                        style={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          background: cat?.bg,
                          color: cat?.color,
                          padding: '2px 8px',
                          borderRadius: 99,
                          fontSize: 11,
                          fontWeight: 700,
                          border: `1px solid ${cat?.border}`
                        }}>

                              {cat?.label}
                            </div>
                            <div
                        style={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          padding: '2px 8px',
                          borderRadius: 99,
                          fontSize: 11,
                          fontWeight: 600
                        }}>

                              {i + 1} / {comicBullets.length}
                            </div>
                          </div>
                          <div
                      style={{
                        padding: 12
                      }}>

                            <p
                        style={{
                          fontSize: 13,
                          color: '#334155',
                          margin: 0,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>

                              {b.text}
                            </p>
                          </div>
                        </div>);

              })}
                  </div>
                    <button
                onClick={() =>
                galleryStripRef.current?.scrollBy({
                  left: 320,
                  behavior: 'smooth'
                })
                }
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid #CBD5E1',
                  background: '#fff',
                  color: '#334155',
                  cursor: 'pointer',
                  flexShrink: 0,
                  fontSize: 18,
                  fontWeight: 700
                }}>

                      →
                    </button>
                  </div>
                  }

                {/* Comprehension Q&A Section - below gallery */}
                <div
              style={{
                marginTop: 40,
                borderTop: '2px solid #E2E8F0',
                paddingTop: 32
              }}>

                  {/* Student Readiness Check */}
                  {userRole === 'student' && !studentReady &&
              <div
                style={{
                  background: 'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
                  borderRadius: 16,
                  padding: 32,
                  textAlign: 'center',
                  border: '1px solid #C7D2FE',
                  maxWidth: 500,
                  margin: '0 auto'
                }}>

                      <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: 32,
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)'
                  }}>

                        📚
                      </div>
                      <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    margin: '0 0 12px',
                    color: '#1E293B'
                  }}>

                        Ready for Comprehension Questions?
                      </h2>
                      <p
                  style={{
                    color: '#64748B',
                    fontSize: 15,
                    margin: '0 0 8px',
                    lineHeight: 1.6
                  }}>

                        Before we begin, make sure you have:
                      </p>
                      <ul
                  style={{
                    textAlign: 'left',
                    color: '#475569',
                    fontSize: 14,
                    margin: '16px auto 24px',
                    maxWidth: 320,
                    lineHeight: 1.8,
                    listStyle: 'none',
                    padding: 0
                  }}>

                        <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10
                    }}>

                          <span
                      style={{
                        color: '#10B981',
                        fontSize: 18
                      }}>

                            ✓
                          </span>
                          Read the entire story carefully
                        </li>
                        <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10
                    }}>

                          <span
                      style={{
                        color: '#10B981',
                        fontSize: 18
                      }}>

                            ✓
                          </span>
                          Reviewed all the comic panels
                        </li>
                        <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10
                    }}>

                          <span
                      style={{
                        color: '#10B981',
                        fontSize: 18
                      }}>

                            ✓
                          </span>
                          Understood the story arc
                        </li>
                      </ul>
                      <button
                  onClick={() => setStudentReady(true)}
                  style={{
                    padding: '14px 32px',
                    background: '#6366F1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: 15,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
                  }}>

                        Yes, I'm Ready! →
                      </button>
                    </div>
              }

                  {/* Main Q&A Content */}
                  {(userRole === 'teacher' || studentReady) &&
              <div>
                      <div
                  style={{
                    marginBottom: 24,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}>

                        <div>
                          <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        margin: '0 0 6px'
                      }}>

                            Comprehension Q&A
                          </h2>
                          <p
                      style={{
                        color: '#64748B',
                        margin: 0,
                        fontSize: 14
                      }}>

                            {userRole === 'teacher' ?
                      'Create questions for students or let AI generate them. Review student answers and classifications.' :
                      'Answer the comprehension questions by recording your response. AI will classify your answer type.'}
                          </p>
                        </div>
                      </div>

                      {/* Teacher: Question Management */}
                      {userRole === 'teacher' &&
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: 12,
                    padding: 20,
                    marginBottom: 24
                  }}>

                          <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      margin: '0 0 16px',
                      color: '#1E293B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>

                            ✏️ Add Questions
                          </h3>

                          <div
                    style={{
                      marginBottom: 16
                    }}>

                            <div
                      style={{
                        display: 'flex',
                        gap: 10
                      }}>

                              <input
                        type="text"
                        value={newQuestionText}
                        onChange={(e) =>
                        setNewQuestionText(e.target.value)
                        }
                        placeholder="Type a comprehension question..."
                        style={{
                          flex: 1,
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: 10,
                          fontSize: 14,
                          fontFamily: 'inherit'
                        }}
                        onKeyDown={(e) =>
                        e.key === 'Enter' && handleAddQuestion()
                        } />

                              <button
                        onClick={handleAddQuestion}
                        disabled={!newQuestionText.trim()}
                        style={{
                          padding: '12px 20px',
                          background: newQuestionText.trim() ?
                          '#6366F1' :
                          '#CBD5E1',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 10,
                          cursor: newQuestionText.trim() ?
                          'pointer' :
                          'not-allowed',
                          fontWeight: 600,
                          fontSize: 13,
                          whiteSpace: 'nowrap'
                        }}>

                                Add Question
                              </button>
                            </div>
                          </div>

                          <div
                    style={{
                      background:
                      'linear-gradient(135deg, #EEF2FF, #F5F3FF)',
                      borderRadius: 10,
                      padding: 16,
                      border: '1px solid #C7D2FE'
                    }}>

                            <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 10
                      }}>

                              <SparkleIcon />
                              <span
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          color: '#4F46E5'
                        }}>

                                AI Question Generator
                              </span>
                            </div>
                            <textarea
                      value={aiQuestionPrompt}
                      onChange={(e) =>
                      setAiQuestionPrompt(e.target.value)
                      }
                      placeholder='Optional: Guide the AI (e.g., "Focus on character motivations" or "Ask about cause and effect")...'
                      style={{
                        width: '100%',
                        minHeight: 60,
                        border: '1px solid #C7D2FE',
                        borderRadius: 8,
                        padding: 12,
                        fontSize: 13,
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                        background: '#fff'
                      }} />

                            <button
                      onClick={handleGenerateAIQuestions}
                      disabled={isGeneratingQuestions}
                      style={{
                        marginTop: 10,
                        padding: '10px 20px',
                        background: isGeneratingQuestions ?
                        '#A5B4FC' :
                        '#6366F1',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        cursor: isGeneratingQuestions ?
                        'not-allowed' :
                        'pointer',
                        fontWeight: 600,
                        fontSize: 13,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                      }}>

                              <SparkleIcon />
                              {isGeneratingQuestions ?
                      'Generating...' :
                      'Generate Questions with AI'}
                            </button>
                          </div>
                        </div>
                }

                      {/* Classification Legend */}
                      <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}>

                        <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#64748B'
                    }}>

                          Answer Types:
                        </span>
                        {[
                  {
                    type: 'local',
                    desc: 'From the text'
                  },
                  {
                    type: 'global',
                    desc: 'Inference/world knowledge'
                  },
                  {
                    type: 'both',
                    desc: 'Text + inference'
                  }].
                  map((item) => {
                    const style = getClassificationStyle(
                      item.type as AnswerClassification
                    );
                    return (
                      <div
                        key={item.type}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '6px 12px',
                          background: style.bg,
                          borderRadius: 8,
                          border: `1px solid ${style.border}`
                        }}>

                              <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 3,
                            background: style.color
                          }} />

                              <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: style.color
                          }}>

                                {style.label}
                              </span>
                              <span
                          style={{
                            fontSize: 11,
                            color: style.color,
                            opacity: 0.8
                          }}>

                                – {item.desc}
                              </span>
                            </div>);

                  })}
                      </div>

                      {/* Questions List */}
                      <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                  }}>

                        {comprehensionQuestions.length === 0 ?
                  <div
                    style={{
                      padding: 40,
                      textAlign: 'center',
                      background: '#fff',
                      borderRadius: 12,
                      border: '1px dashed #E2E8F0'
                    }}>

                            <div
                      style={{
                        fontSize: 40,
                        marginBottom: 12
                      }}>

                              ❓
                            </div>
                            <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        margin: '0 0 8px'
                      }}>

                              No questions yet
                            </h3>
                            <p
                      style={{
                        color: '#64748B',
                        fontSize: 14,
                        margin: 0
                      }}>

                              {userRole === 'teacher' ?
                      'Add questions manually or generate them with AI above.' :
                      "Your teacher hasn't added any questions yet."}
                            </p>
                          </div> :

                  comprehensionQuestions.map((q, qIndex) =>
                  <div
                    key={q.id}
                    style={{
                      background: '#fff',
                      border: '1px solid #E2E8F0',
                      borderRadius: 12,
                      overflow: 'hidden'
                    }}>

                              {/* Question Header */}
                              <div
                      style={{
                        padding: '16px 20px',
                        borderBottom: '1px solid #F1F5F9',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12
                      }}>

                                <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: '#EEF2FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: 13,
                          color: '#6366F1',
                          flexShrink: 0
                        }}>

                                  {qIndex + 1}
                                </div>
                                <div
                        style={{
                          flex: 1
                        }}>

                                  {editingQuestionId === q.id ?
                        <div
                          style={{
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                          }}>

                                      <input
                            type="text"
                            value={editingQuestionText}
                            onChange={(e) =>
                            setEditingQuestionText(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === 'Enter')
                              handleSaveEditQuestion();
                              if (e.key === 'Escape')
                              handleCancelEditQuestion();
                            }}
                            autoFocus
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              border: '2px solid #6366F1',
                              borderRadius: 8,
                              fontSize: 15,
                              fontWeight: 600,
                              fontFamily: 'inherit',
                              color: '#1E293B',
                              outline: 'none'
                            }} />

                                      <button
                            onClick={handleSaveEditQuestion}
                            style={{
                              padding: '6px 12px',
                              background: '#6366F1',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 6,
                              cursor: 'pointer',
                              fontSize: 12,
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4
                            }}>

                                        <CheckIcon /> Save
                                      </button>
                                      <button
                            onClick={handleCancelEditQuestion}
                            style={{
                              padding: '6px 12px',
                              background: '#F1F5F9',
                              color: '#64748B',
                              border: '1px solid #E2E8F0',
                              borderRadius: 6,
                              cursor: 'pointer',
                              fontSize: 12,
                              fontWeight: 600
                            }}>

                                        Cancel
                                      </button>
                                    </div> :

                        <>
                                      <p
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: '#1E293B',
                              margin: 0,
                              lineHeight: 1.5
                            }}>

                                        {q.question}
                                      </p>
                                      <p
                            style={{
                              fontSize: 12,
                              color: '#94A3B8',
                              margin: '6px 0 0'
                            }}>

                                        {q.answers.length} answer
                                        {q.answers.length !== 1 ? 's' : ''}{' '}
                                        recorded
                                      </p>
                                    </>
                        }
                                </div>
                                {userRole === 'teacher' &&
                      editingQuestionId !== q.id &&
                      <div
                        style={{
                          display: 'flex',
                          gap: 6
                        }}>

                                      <button
                          onClick={() =>
                          handleStartEditQuestion(
                            q.id,
                            q.question
                          )
                          }
                          style={{
                            padding: '6px 10px',
                            background: '#EEF2FF',
                            border: '1px solid #C7D2FE',
                            borderRadius: 6,
                            cursor: 'pointer',
                            color: '#6366F1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 12,
                            fontWeight: 600
                          }}>

                                        ✏️ Edit
                                      </button>
                                      <button
                          onClick={() =>
                          handleDeleteQuestion(q.id)
                          }
                          style={{
                            padding: '6px 10px',
                            background: '#FEF2F2',
                            border: '1px solid #FECACA',
                            borderRadius: 6,
                            cursor: 'pointer',
                            color: '#EF4444',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 12,
                            fontWeight: 600
                          }}>

                                        <TrashIcon /> Delete
                                      </button>
                                    </div>
                      }
                              </div>

                              {/* Teacher: Record or Type Answer */}
                              {userRole === 'teacher' &&
                    <div
                      style={{
                        padding: '14px 20px',
                        background: '#F8FAFC',
                        borderBottom:
                        q.answers.length > 0 ?
                        '1px solid #F1F5F9' :
                        'none'
                      }}>

                                  {!teacherAnswerMode[q.id] &&
                      activeQuestionId !== q.id &&
                      <div
                        style={{
                          display: 'flex',
                          gap: 10
                        }}>

                                        <button
                          onClick={() => {
                            setTeacherAnswerMode((prev) => ({
                              ...prev,
                              [q.id]: 'record'
                            }));
                            handleTeacherStartRecording(q.id);
                          }}
                          style={{
                            flex: 1,
                            padding: '10px 20px',
                            background: '#fff',
                            color: '#6366F1',
                            border: '2px solid #C7D2FE',
                            borderRadius: 10,
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            justifyContent: 'center'
                          }}>

                                          <MicIcon active={false} /> Record
                                          Student's Answer
                                        </button>
                                        <button
                          onClick={() =>
                          setTeacherAnswerMode((prev) => ({
                            ...prev,
                            [q.id]: 'type'
                          }))
                          }
                          style={{
                            flex: 1,
                            padding: '10px 20px',
                            background: '#fff',
                            color: '#475569',
                            border: '2px solid #E2E8F0',
                            borderRadius: 10,
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: 13,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            justifyContent: 'center'
                          }}>

                                          ✏️ Type Student's Answer
                                        </button>
                                      </div>
                      }

                                  {/* Recording mode for teacher */}
                                  {(teacherAnswerMode[q.id] === 'record' ||
                      activeQuestionId === q.id &&
                      teacherAnswerMode[q.id] !== 'type') &&
                      activeQuestionId === q.id &&
                      <div>
                                        {isRecording &&
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            marginBottom: 16
                          }}>

                                            <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 24,
                              background: '#FEE2E2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              animation:
                              'pulse 1.5s infinite'
                            }}>

                                              <MicIcon active={true} />
                                            </div>
                                            <div
                            style={{
                              flex: 1
                            }}>

                                              <p
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#EF4444',
                                margin: '0 0 4px'
                              }}>

                                                Recording...{' '}
                                                {formatTime(recordingTime)}
                                              </p>
                                              <p
                              style={{
                                fontSize: 12,
                                color: '#64748B',
                                margin: 0
                              }}>

                                                Record the student's spoken
                                                answer
                                              </p>
                                            </div>
                                            <button
                            onClick={handleStopRecording}
                            style={{
                              padding: '10px 20px',
                              background: '#EF4444',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 10,
                              cursor: 'pointer',
                              fontWeight: 600,
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6
                            }}>

                                              <StopIcon /> Stop Recording
                                            </button>
                                          </div>
                        }

                                        {!isRecording && currentTranscript &&
                        <div>
                                            <p
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#64748B',
                              margin: '0 0 8px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>

                                              Transcribed Answer:
                                            </p>
                                            <div
                            style={{
                              background: '#fff',
                              border: '1px solid #E2E8F0',
                              borderRadius: 10,
                              padding: 14,
                              marginBottom: 12
                            }}>

                                              <p
                              style={{
                                fontSize: 14,
                                color: '#1E293B',
                                margin: 0,
                                lineHeight: 1.6
                              }}>

                                                "{currentTranscript}"
                                              </p>
                                            </div>
                                            <div
                            style={{
                              display: 'flex',
                              gap: 10
                            }}>

                                              <button
                              onClick={handleSubmitAnswer}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 20px',
                                background: isClassifying ?
                                '#A5B4FC' :
                                '#6366F1',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                              }}>

                                                {isClassifying ?
                              <>
                                                    <SparkleIcon />{' '}
                                                    Classifying...
                                                  </> :

                              <>
                                                    <CheckIcon /> Submit &
                                                    Classify
                                                  </>
                              }
                                              </button>
                                              <button
                              onClick={() => {
                                setCurrentTranscript('');
                                handleTeacherStartRecording(
                                  q.id
                                );
                              }}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 20px',
                                background: '#fff',
                                color: '#6366F1',
                                border: '2px solid #C7D2FE',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                              }}>

                                                <MicIcon active={false} />{' '}
                                                Re-record
                                              </button>
                                              <button
                              onClick={() => {
                                setActiveQuestionId(null);
                                setCurrentTranscript('');
                                setTeacherAnswerMode(
                                  (prev) => ({
                                    ...prev,
                                    [q.id]: null
                                  })
                                );
                              }}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 16px',
                                background: '#fff',
                                color: '#94A3B8',
                                border: '1px solid #E2E8F0',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13
                              }}>

                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                        }
                                      </div>
                      }

                                  {/* Type mode for teacher */}
                                  {teacherAnswerMode[q.id] === 'type' &&
                      <div>
                                      <p
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#64748B',
                            margin: '0 0 8px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>

                                        Type Student's Answer:
                                      </p>
                                      <textarea
                          value={typedAnswerText[q.id] || ''}
                          onChange={(e) =>
                          setTypedAnswerText((prev) => ({
                            ...prev,
                            [q.id]: e.target.value
                          }))
                          }
                          placeholder="Type the student's answer here..."
                          style={{
                            width: '100%',
                            minHeight: 70,
                            border: '1px solid #E2E8F0',
                            borderRadius: 10,
                            padding: 12,
                            fontSize: 14,
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            boxSizing: 'border-box',
                            background: '#fff',
                            lineHeight: 1.6
                          }} />

                                      <div
                          style={{
                            display: 'flex',
                            gap: 10,
                            marginTop: 10
                          }}>

                                        <button
                            onClick={() =>
                            handleSubmitTypedAnswer(q.id)
                            }
                            disabled={
                            !typedAnswerText[q.id]?.trim() ||
                            isClassifying
                            }
                            style={{
                              padding: '10px 20px',
                              background:
                              !typedAnswerText[q.id]?.trim() ||
                              isClassifying ?
                              '#CBD5E1' :
                              '#6366F1',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 10,
                              cursor:
                              !typedAnswerText[q.id]?.trim() ||
                              isClassifying ?
                              'not-allowed' :
                              'pointer',
                              fontWeight: 600,
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6
                            }}>

                                          {isClassifying &&
                            activeQuestionId === q.id ?
                            <>
                                              <SparkleIcon /> Classifying...
                                            </> :

                            <>
                                              <CheckIcon /> Submit & Classify
                                            </>
                            }
                                        </button>
                                        <button
                            onClick={() => {
                              setTeacherAnswerMode((prev) => ({
                                ...prev,
                                [q.id]: null
                              }));
                              setTypedAnswerText((prev) => ({
                                ...prev,
                                [q.id]: ''
                              }));
                            }}
                            style={{
                              padding: '10px 16px',
                              background: '#fff',
                              color: '#94A3B8',
                              border: '1px solid #E2E8F0',
                              borderRadius: 10,
                              cursor: 'pointer',
                              fontWeight: 600,
                              fontSize: 13
                            }}>

                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                      }
                                </div>
                    }

                              {/* Student Recording Interface */}
                              {userRole === 'student' &&
                    <div
                      style={{
                        padding: '16px 20px',
                        background: '#F8FAFC',
                        borderBottom:
                        q.answers.length > 0 ?
                        '1px solid #F1F5F9' :
                        'none'
                      }}>

                                  {activeQuestionId === q.id ?
                      <div>
                                      {isRecording &&
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            marginBottom: 16
                          }}>

                                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 24,
                              background: '#FEE2E2',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              animation: 'pulse 1.5s infinite'
                            }}>

                                            <MicIcon active={true} />
                                          </div>
                                          <div
                            style={{
                              flex: 1
                            }}>

                                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#EF4444',
                                margin: '0 0 4px'
                              }}>

                                              Recording...{' '}
                                              {formatTime(recordingTime)}
                                            </p>
                                            <p
                              style={{
                                fontSize: 12,
                                color: '#64748B',
                                margin: 0
                              }}>

                                              Speak your answer clearly
                                            </p>
                                          </div>
                                          <button
                            onClick={handleStopRecording}
                            style={{
                              padding: '10px 20px',
                              background: '#EF4444',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 10,
                              cursor: 'pointer',
                              fontWeight: 600,
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6
                            }}>

                                            <StopIcon /> Stop Recording
                                          </button>
                                        </div>
                        }

                                      {!isRecording && currentTranscript &&
                        <div>
                                          <p
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#64748B',
                              margin: '0 0 8px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>

                                            Your Answer:
                                          </p>
                                          <div
                            style={{
                              background: '#fff',
                              border: '1px solid #E2E8F0',
                              borderRadius: 10,
                              padding: 14,
                              marginBottom: 12
                            }}>

                                            <p
                              style={{
                                fontSize: 14,
                                color: '#1E293B',
                                margin: 0,
                                lineHeight: 1.6
                              }}>

                                              "{currentTranscript}"
                                            </p>
                                          </div>
                                          <div
                            style={{
                              display: 'flex',
                              gap: 10
                            }}>

                                            <button
                              onClick={handleSubmitAnswer}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 20px',
                                background: isClassifying ?
                                '#A5B4FC' :
                                '#6366F1',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                              }}>

                                              {isClassifying ?
                              <>
                                                  <SparkleIcon /> Classifying...
                                                </> :

                              <>
                                                  <CheckIcon /> Submit Answer
                                                </>
                              }
                                            </button>
                                            <button
                              onClick={() => {
                                setCurrentTranscript('');
                                handleStartRecording(q.id);
                              }}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 20px',
                                background: '#fff',
                                color: '#6366F1',
                                border: '2px solid #C7D2FE',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                              }}>

                                              <MicIcon active={false} />{' '}
                                              Re-record
                                            </button>
                                            <button
                              onClick={() => {
                                setActiveQuestionId(null);
                                setCurrentTranscript('');
                              }}
                              disabled={isClassifying}
                              style={{
                                padding: '10px 16px',
                                background: '#fff',
                                color: '#94A3B8',
                                border: '1px solid #E2E8F0',
                                borderRadius: 10,
                                cursor: isClassifying ?
                                'not-allowed' :
                                'pointer',
                                fontWeight: 600,
                                fontSize: 13
                              }}>

                                              Cancel
                                            </button>
                                          </div>
                                        </div>
                        }
                                    </div> :

                      <button
                        onClick={() => handleStartRecording(q.id)}
                        style={{
                          padding: '12px 24px',
                          background: '#fff',
                          color: '#6366F1',
                          border: '2px solid #C7D2FE',
                          borderRadius: 10,
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: 14,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          width: '100%',
                          justifyContent: 'center'
                        }}>

                                      <MicIcon active={false} /> Record Your
                                      Answer
                                    </button>
                      }
                                </div>
                    }

                              {/* Answers List */}
                              {q.answers.length > 0 &&
                    <div
                      style={{
                        padding: '12px 20px'
                      }}>

                                  <p
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#64748B',
                          margin: '0 0 12px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>

                                    Recorded Answers
                                  </p>
                                  <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 10
                        }}>

                                    {q.answers.map((answer) => {
                          const classStyle = getClassificationStyle(
                            answer.classification
                          );
                          return (
                            <div
                              key={answer.id}
                              style={{
                                background: '#F8FAFC',
                                border: '1px solid #E2E8F0',
                                borderRadius: 10,
                                padding: 14
                              }}>

                                          <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  justifyContent: 'space-between',
                                  gap: 12,
                                  marginBottom: 10
                                }}>

                                            <p
                                  style={{
                                    fontSize: 14,
                                    color: '#1E293B',
                                    margin: 0,
                                    lineHeight: 1.6,
                                    flex: 1
                                  }}>

                                              "{answer.text}"
                                            </p>
                                            <span
                                  style={{
                                    padding: '4px 10px',
                                    borderRadius: 6,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    background: classStyle.bg,
                                    color: classStyle.color,
                                    border: `1px solid ${classStyle.border}`,
                                    whiteSpace: 'nowrap'
                                  }}>

                                              {classStyle.label}
                                            </span>
                                          </div>
                                          {answer.classificationReason &&
                              <p
                                style={{
                                  fontSize: 12,
                                  color: '#64748B',
                                  margin: 0,
                                  padding: '8px 10px',
                                  background: '#fff',
                                  borderRadius: 6,
                                  border: '1px solid #E2E8F0'
                                }}>

                                              <strong
                                  style={{
                                    color: '#475569'
                                  }}>

                                                AI Analysis:
                                              </strong>{' '}
                                              {answer.classificationReason}
                                            </p>
                              }
                                          <p
                                style={{
                                  fontSize: 11,
                                  color: '#94A3B8',
                                  margin: '8px 0 0'
                                }}>

                                            Recorded at {answer.timestamp}
                                          </p>
                                        </div>);

                    })}
                      </div>
                    </div>
              }
                            </div>
                  )
                  }
                      </div>
                    </div>
              }
                </div>
              </div>
          }
          </div>
        </>
      }

      {/* Gallery Popup Modal */}
      {selectedGalleryPanel && selectedGalleryIndex !== -1 &&
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedGalleryPanel(null);
          }
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(4px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24
        }}>

          <button
          onClick={() => setSelectedGalleryPanel(null)}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            width: 40,
            height: 40,
            borderRadius: 20,
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            fontSize: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            ✕
          </button>

          {/* Prev Button */}
          <button
          onClick={() =>
          setSelectedGalleryPanel(comicBullets[selectedGalleryIndex - 1].id)
          }
          disabled={selectedGalleryIndex === 0}
          style={{
            position: 'absolute',
            left: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 48,
            height: 48,
            borderRadius: 24,
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor: selectedGalleryIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: selectedGalleryIndex === 0 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            color: '#1E293B'
          }}>

            ←
          </button>

          {/* Next Button */}
          <button
          onClick={() =>
          setSelectedGalleryPanel(comicBullets[selectedGalleryIndex + 1].id)
          }
          disabled={selectedGalleryIndex === comicBullets.length - 1}
          style={{
            position: 'absolute',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 48,
            height: 48,
            borderRadius: 24,
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor:
            selectedGalleryIndex === comicBullets.length - 1 ?
            'not-allowed' :
            'pointer',
            opacity:
            selectedGalleryIndex === comicBullets.length - 1 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            color: '#1E293B'
          }}>

            →
          </button>

          {/* Modal Content */}
          <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: 1000,
            maxHeight: '90vh',
            background: '#fff',
            borderRadius: 16,
            display: 'flex',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>

            {(() => {
            const b = comicBullets[selectedGalleryIndex];
            const comic = generatedComics[b.id];
            const cat = CATEGORIES.find((c) => c.id === b.cat);
            const reactions = galleryReactions[b.id] || [];
            const notes = galleryNotes[b.id] || '';
            const noteDraft = galleryNoteDrafts[b.id] ?? notes;
            const noteEditing = !!isEditingGalleryNote[b.id];
            return (
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  minHeight: 0
                }}>

                  <div
                  style={{
                    flex: 1,
                    background: comic.bg,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>

                    <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: 'rgba(0,0,0,0.6)',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: 99,
                      fontSize: 13,
                      fontWeight: 600,
                      zIndex: 10
                    }}>

                      Panel {selectedGalleryIndex + 1} of {comicBullets.length}
                    </div>
                    <button
                    onClick={() => setShowGalleryDetails((prev) => !prev)}
                    style={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      background: 'rgba(255,255,255,0.92)',
                      color: '#334155',
                      border: '1px solid #CBD5E1',
                      borderRadius: 8,
                      padding: '6px 12px',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      zIndex: 10
                    }}>

                      {showGalleryDetails ? 'Hide Detail' : 'Detail'}
                    </button>
                    {comic.image ?
                  <img
                    src={comic.image}
                    alt="comic"
                    style={{
                      width: '100%',
                      height: showGalleryDetails ? 300 : '68vh',
                      objectFit: 'contain',
                      background: '#fff',
                      flexShrink: 0
                    }} /> :


                  <div
                    style={{
                      width: '100%',
                      height: showGalleryDetails ? 300 : '68vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>

                        <ImageIcon />
                      </div>
                  }
                    {showGalleryDetails &&
                  <div
                    style={{
                      padding: 16,
                      background: '#fff',
                      borderTop: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      overflowY: 'auto'
                    }}>

                      <div
                      style={{
                        display: 'flex',
                        gap: 16,
                        alignItems: 'flex-start'
                      }}>

                        <div
                        style={{
                          flex: 1
                        }}>

                          <h3
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#64748B',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 8
                          }}>

                            Reactions
                          </h3>
                          <div
                          style={{
                            display: 'flex',
                            gap: 8
                          }}>

                            {['👍', '👎', '❓'].map((emoji) => {
                            const active = reactions.includes(emoji);
                            return (
                              <button
                                key={emoji}
                                onClick={() =>
                                toggleGalleryReaction(b.id, emoji)
                                }
                                style={{
                                  padding: '8px 16px',
                                  borderRadius: 8,
                                  border: active ?
                                  '2px solid #6366F1' :
                                  '1px solid #E2E8F0',
                                  background: active ? '#EEF2FF' : '#fff',
                                  cursor: 'pointer',
                                  fontSize: 20,
                                  transition: 'all 0.1s',
                                  transform: active ?
                                  'scale(1.05)' :
                                  'scale(1)'
                                }}>

                                  {emoji}
                                </button>);

                          })}
                          </div>
                        </div>

                        <div
                        style={{
                          flex: 1,
                          minWidth: 260
                        }}>

                          <h3
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#64748B',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 12
                          }}>

                            Story Progression
                          </h3>
                          <div
                          style={{
                            background: '#fff',
                            border: '1px solid #E2E8F0',
                            borderRadius: 10,
                            padding: '12px 16px'
                          }}>

                            <svg
                            viewBox="0 0 200 50"
                            style={{
                              width: '100%',
                              height: 96,
                              overflow: 'visible'
                            }}>

                              <path
                              d="M 10 40 L 40 40 L 100 10 L 160 40 L 190 40"
                              fill="none"
                              stroke="#E2E8F0"
                              strokeWidth="2"
                              strokeLinejoin="round" />
                              {b.cat === 'E' &&
                            <path
                              d="M 10 40 L 40 40"
                              stroke="#818CF8"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round" />
                            }
                              {b.cat === 'I' &&
                            <path
                              d="M 40 40 L 65 27"
                              stroke="#F59E0B"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round" />
                            }
                              {b.cat === 'L' &&
                            <path
                              d="M 65 27 L 100 10"
                              stroke="#10B981"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round" />
                            }
                              {b.cat === 'P' &&
                            <path
                              d="M 90 13 L 100 10 L 110 13"
                              stroke="#EF4444"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round" />
                            }
                              {b.cat === 'R' &&
                            <path
                              d="M 100 10 L 160 40 L 190 40"
                              stroke="#6366F1"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round" />
                            }
                              {[
                            {
                              id: 'E',
                              cx: 25,
                              cy: 40,
                              label: 'Establisher'
                            },
                            {
                              id: 'I',
                              cx: 52,
                              cy: 33,
                              label: 'Initial'
                            },
                            {
                              id: 'L',
                              cx: 80,
                              cy: 18,
                              label: 'Prolongation'
                            },
                            {
                              id: 'P',
                              cx: 100,
                              cy: 10,
                              label: 'Peak'
                            },
                            {
                              id: 'R',
                              cx: 160,
                              cy: 40,
                              label: 'Release'
                            }].
                            map((pt) => {
                              const isActive = b.cat === pt.id;
                              const catInfo = CATEGORIES.find(
                                (c) => c.id === pt.id
                              );
                              return (
                                <Fragment key={pt.id}>
                                    {isActive &&
                                  <circle
                                    cx={pt.cx}
                                    cy={pt.cy}
                                    r={8}
                                    fill={catInfo?.color || '#94A3B8'}
                                    opacity={0.15} />
                                  }
                                    <circle
                                    cx={pt.cx}
                                    cy={pt.cy}
                                    r={isActive ? 4 : 2.5}
                                    fill={
                                    isActive ?
                                    catInfo?.color || '#94A3B8' :
                                    '#CBD5E1'
                                    } />
                                    <text
                                    x={pt.cx}
                                    y={pt.id === 'P' ? pt.cy - 8 : pt.cy + 10}
                                    fontSize="8"
                                    fill={
                                    isActive ?
                                    catInfo?.color || '#64748B' :
                                    '#94A3B8'
                                    }
                                    textAnchor="middle"
                                    fontWeight={isActive ? '700' : '400'}>

                                      {pt.label}
                                    </text>
                                  </Fragment>);
                            })}
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: '#64748B',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: 8
                        }}>

                          Notes
                        </h3>
                        <textarea
                        value={noteDraft}
                        readOnly={!noteEditing}
                        onChange={(e) =>
                        setGalleryNoteDrafts((prev) => ({
                          ...prev,
                          [b.id]: e.target.value
                        }))
                        }
                        placeholder="Add your thoughts about this panel..."
                        style={{
                          width: '100%',
                          minHeight: 80,
                          border: '1px solid #E2E8F0',
                          borderRadius: 12,
                          padding: 12,
                          fontSize: 14,
                          resize: 'vertical',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                          background: noteEditing ? '#fff' : '#F8FAFC',
                          color: noteEditing ? '#0F172A' : '#475569'
                        }} />
                        <button
                        onClick={() => {
                          if (noteEditing) {
                            setGalleryNotes((prev) => ({
                              ...prev,
                              [b.id]: noteDraft
                            }));
                            setIsEditingGalleryNote((prev) => ({
                              ...prev,
                              [b.id]: false
                            }));
                            return;
                          }
                          setGalleryNoteDrafts((prev) => ({
                            ...prev,
                            [b.id]: notes
                          }));
                          setIsEditingGalleryNote((prev) => ({
                            ...prev,
                            [b.id]: true
                          }));
                        }}
                        style={{
                          marginTop: 8,
                          padding: '7px 12px',
                          background: noteEditing ? '#0F766E' : '#6366F1',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}>

                          {noteEditing ? 'Done' : 'Add/Edit Note'}
                        </button>
                      </div>
                    </div>
                  }
                  </div>
                </div>);

          })()}
          </div>
        </div>
      }

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>);

}

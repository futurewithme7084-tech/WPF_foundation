import { Article, Book, Category, MediaItem, Magazine } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'indian',
    name: 'Indian Philosophy',
    description: 'Explore the vast traditions of Darshana, from Advaita to Nyaya.',
    image: 'https://images.unsplash.com/photo-1620215175664-cb916ed59aa8?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'western',
    name: 'Western Philosophy',
    description: 'Ancient Greek wisdom to modern existentialist thought.',
    image: 'https://images.unsplash.com/photo-1549443542-d6fc896013a5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'wpf',
    name: 'Modern Inquiry',
    description: 'The synthesis of Technology and Philosophy (Tech with Philosophy).',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  }
];

export const BOOKS: Book[] = [
  // Vedanta
  { id: 'vedanta-1', title: 'Bhagavad Gita: The Quantum Message', author: 'Acharya Prashant', description: 'A revolutionary interpretation of the Gita for the modern mind.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-2', title: 'Gita Sessions', author: 'Acharya Prashant', description: 'In-depth dialogues and explorations of the Bhagavad Gita.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-3', title: 'Ashtavakra Gita: The Supreme Wisdom', author: 'Acharya Prashant', description: 'Explaining the radical non-dualism of Ashtavakra.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-4', title: 'Upanishads: Direct Teachings', author: 'Acharya Prashant', description: 'Simplifying the complex metaphysical layers of the Upanishads.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-5', title: 'The Real You', author: 'Acharya Prashant', description: 'A guide to discovering one\'s true nature beyond the ego.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-6', title: 'The Upanishads', author: 'Swami Prabhavananda', description: 'Classic translation and commentary on the principal Upanishads.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-7', title: 'Bhagavad Gita', author: 'Eknath Easwaran', description: 'A clear and accessible translation of India\'s most famous scripture.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-8', title: 'Vivekachudamani', author: 'Adi Shankara', description: 'The crest-jewel of discrimination by the master of Advaita.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-9', title: 'Atma Bodha', author: 'Adi Shankara', description: 'Fundamentals of Self-knowledge.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },
  { id: 'vedanta-10', title: 'I Am That', author: 'Nisargadatta Maharaj', description: 'Direct pointings to the reality of the Self.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Vedanta' },

  // Buddhism
  { id: 'buddha-1', title: 'The Logic of Living', author: 'Acharya Prashant', description: 'Applying Buddhist logic to everyday life choices.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-2', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'Understanding the psychological roots of joy and sorrow.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-3', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'Deconstructing the illusions of choices and conditioning.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-4', title: 'The Art of Clarity', author: 'Acharya Prashant', description: 'A roadmap to navigating mental fog and confusion.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-5', title: 'The Depth of Consciousness', author: 'Acharya Prashant', description: 'Exploring the various layers of human awareness.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-6', title: 'The Dhammapada', author: 'The Buddha', description: 'The fundamental teachings of the Buddhist path.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-7', title: 'What the Buddha Taught', author: 'Walpola Rahula', description: 'A classic introduction to basic Buddhist principles.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-8', title: 'The Heart of the Buddha\'s Teaching', author: 'Thich Nhat Hanh', description: 'The foundations of Buddhist practice explained with love.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-9', title: 'Zen Mind, Beginner\'s Mind', author: 'Shunryu Suzuki', description: 'Insights into the practice and spirit of Zen.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },
  { id: 'buddha-10', title: 'The Tibetan Book of the Dead', author: 'Padmasambhava', description: 'Guidance through the bardos and the nature of mind.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Buddhism' },

  // Ethics
  { id: 'ethics-1', title: 'The Way of the Intelligent Rebel', author: 'Acharya Prashant', description: 'On living with integrity and true rebellion against falseness.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-2', title: 'The Logic of Living', author: 'Acharya Prashant', description: 'Ethics as a logical outcome of clear perception.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-3', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'The ethical dimension of finding true fulfillment.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-4', title: 'The Art of Clarity', author: 'Acharya Prashant', description: 'How clarity drives right action.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-5', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'Freedom from conditioning as the basis of morality.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-6', title: 'Nicomachean Ethics', author: 'Aristotle', description: 'Exploring the nature of virtue and the good life.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-7', title: 'Utilitarianism', author: 'John Stuart Mill', description: 'The classic defense of the greatest happiness principle.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-8', title: 'A Theory of Justice', author: 'John Rawls', description: 'Foundations of modern social and political ethics.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-9', title: 'The Righteous Mind', author: 'Jonathan Haidt', description: 'Why good people are divided by politics and religion.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },
  { id: 'ethics-10', title: 'Groundwork of the Metaphysics of Morals', author: 'Immanuel Kant', description: 'Developing the categorical imperative.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Ethics' },

  // Consciousness
  { id: 'conscious-1', title: 'The Depth of Consciousness', author: 'Acharya Prashant', description: 'A profound inquiry into what it means to be aware.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-2', title: 'The Real You', author: 'Acharya Prashant', description: 'Stripping away the false identities of the conscious self.', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-3', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'Happiness as a state of pure consciousness.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-4', title: 'The Art of Clarity', author: 'Acharya Prashant', description: 'Clarity as the light of consciousness.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-5', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'The bounds and potentials of the conscious mind.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-6', title: 'The Power of Now', author: 'Eckhart Tolle', description: 'A guide to spiritual enlightenment through presence.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-7', title: 'Waking Up', author: 'Sam Harris', description: 'A guide to spirituality without religion.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-8', title: 'The Ego Tunnel', author: 'Thomas Metzinger', description: 'The science of the mind and the myth of the self.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-9', title: 'Consciousness Explained', author: 'Daniel Dennett', description: 'A materialist approach to the hard problem.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },
  { id: 'conscious-10', title: 'Being No One', author: 'Thomas Metzinger', description: 'The self-model theory of subjectivity.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Consciousness' },

  // Stoicism
  { id: 'stoic-1', title: 'The Way of the Intelligent Rebel', author: 'Acharya Prashant', description: 'Parallels between Vedantic rebellion and Stoic indomitability.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-2', title: 'The Logic of Living', author: 'Acharya Prashant', description: 'Navigating life with reason and poise.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-3', title: 'The Art of Clarity', author: 'Acharya Prashant', description: 'Stoic clarity in the face of chaos.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-4', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'Eudaimonia through understanding the mind.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-5', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'Understanding what is within our control.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-6', title: 'Meditations', author: 'Marcus Aurelius', description: 'The private notes of a Roman Emperor on virtue.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-7', title: 'Letters from a Stoic', author: 'Seneca', description: 'Practical advice on life from a leading Stoic.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-8', title: 'Enchiridion', author: 'Epictetus', description: 'The manual for living a free and happy life.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-9', title: 'A Guide to the Good Life', author: 'William B. Irvine', description: 'The ancient art of Stoic joy.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },
  { id: 'stoic-10', title: 'How to Be a Stoic', author: 'Massimo Pigliucci', description: 'Using ancient philosophy to live a modern life.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Stoicism' },

  // Nyaya
  { id: 'nyaya-1', title: 'The Logic of Living', author: 'Acharya Prashant', description: 'The application of right logic in existence.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-2', title: 'The Art of Clarity', author: 'Acharya Prashant', description: 'Clarity as the result of precise thinking.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-3', title: 'The Real You', author: 'Acharya Prashant', description: 'Analytical approach to the self.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-4', title: 'The Depth of Consciousness', author: 'Acharya Prashant', description: 'The logical structure of subjective experience.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-5', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'The logic of bondage and liberation.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-6', title: 'Nyaya Sutras', author: 'Gautama', description: 'The foundational text of the Nyaya school of logic.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-7', title: 'Nyaya Bhashya', author: 'Vatsyayana', description: 'The classic commentary on the Nyaya Sutras.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-8', title: 'Tarka Sangraha', author: 'Annambhatta', description: 'A primer on Nyaya and Vaisheshika philosophy.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-9', title: 'Nyaya Manjari', author: 'Jayanta Bhatta', description: 'A comprehensive work on Nyaya epistemology.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },
  { id: 'nyaya-10', title: 'Indian Logic', author: 'B.K. Matilal', description: 'Modern analysis of classical Indian logical traditions.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Nyaya' },

  // Sankhya
  { id: 'sankhya-1', title: 'The Real You', author: 'Acharya Prashant', description: 'Understanding the Purusha beyond Prakriti.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-2', title: 'The Depth of Consciousness', author: 'Acharya Prashant', description: 'The evolution of consciousness from the unmanifest.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-3', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'How the soul gets entangled in matter.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-4', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'Liberation from the three types of suffering.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-5', title: 'The Logic of Living', author: 'Acharya Prashant', description: 'Living according to the true nature of things.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-6', title: 'Samkhya Karika', author: 'Ishvara Krishna', description: 'The standard text on the Samkhya system.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-7', title: 'Samkhya Sutras', author: 'Kapila', description: 'Aphorisms detailing the dualistic Samkhya philosophy.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-8', title: 'Classical Samkhya', author: 'Gerald Larson', description: 'An interpretation of its history and meaning.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-9', title: 'Samkhya Philosophy', author: 'S. Radhakrishnan', description: 'Detailed study of the dualistic realism.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },
  { id: 'sankhya-10', title: 'Indian Philosophy Vol 1', author: 'S. Radhakrishnan', description: 'Covering the roots of Samkhya and early thought.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Sankhya' },

  // Upanishads
  { id: 'upa-1', title: 'Upanishads: Direct Teachings', author: 'Acharya Prashant', description: 'The essence of the Upanishads explained directly.', image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-2', title: 'The Real You', author: 'Acharya Prashant', description: 'Vedantic inquiry based on Upanishadic wisdom.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-3', title: 'The Depth of Consciousness', author: 'Acharya Prashant', description: 'The infinite consciousness as described in the Vedas.', image: 'https://images.unsplash.com/photo-1516053303641-8427ae969351?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-4', title: 'The Myth of Freedom', author: 'Acharya Prashant', description: 'Liberation (Moksha) as the only true freedom.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-5', title: 'The Secret of Happiness', author: 'Acharya Prashant', description: 'Ananda as our natural state.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-6', title: 'The Upanishads', author: 'Eknath Easwaran', description: 'Selected translations from the principal Upanishads.', image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-7', title: 'Principal Upanishads', author: 'S. Radhakrishnan', description: 'The most comprehensive scholarly translation.', image: 'https://images.unsplash.com/photo-1516035054744-d474c52196ea?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-8', title: 'Katha Upanishad', author: 'Classic', description: 'The dialogue between Nachiketa and Yama.', image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-9', title: 'Isha Upanishad', author: 'Classic', description: 'Wisdom on the oneness of existence.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'upa-10', title: 'Mundaka Upanishad', author: 'Classic', description: 'Higher and lower knowledge.', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', category: 'Upanishads' },
  { id: 'impact-1', title: "Man's Search for Meaning", author: 'Viktor Frankl', description: 'A powerful exploration of finding purpose in the face of suffering.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop', category: 'Modern' }
];

export const RECOMMENDED_BOOK_IDS = [
  'vedanta-7',  // Bhagavad Gita
  'upa-6',      // The Upanishads
  'vedanta-1',  // Quantum Message
  'buddha-3',   // Myth of Freedom
  'stoic-6',    // Meditations
  'ethics-8',    // Theory of Justice (closest to Republic for now, or I'll just change title in Home)
  'conscious-6', // Power of Now
  'conscious-7', // Waking Up
  'buddha-6',    // Dhammapada
  'impact-1'     // Man's Search for Meaning
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Vedantic Consciousness in the Age of AI',
    author: 'WPF Research',
    category: 'Inquiry',
    excerpt: 'Exploring the intersection of ancient non-dualistic thought and modern artificial intelligence frameworks.',
    date: 'Oct 12, 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=1000&auto=format&fit=crop',
    content: 'The development of Artificial Intelligence has brought us to a precipice where we must define what "intelligence" and "consciousness" truly mean. Traditionally, Western science has viewed consciousness as an emergent property of complex physical systems—a bottom-up approach. However, Vedantic philosophy, particularly Advaita, suggests a top-down model where consciousness is the fundamental ground of all reality.\n\nIn our current tech landscape, we are building systems that can mimic cognitive processes with frightening accuracy. But can a machine ever "be"? Vedanta posits the concept of \'Sakshi\' (the witness). A machine may have \'Vritti\' (thought modification) but lacks the light of the \'Atman\' (Self) that illumines those modifications.\n\nBy integrating Tech with Philosophy, we can design AI that serves humanity without losing the essence of what it means to be human. We must ask: are we creating tools, or are we confusing simulation for substance? This inquiry is not just academic; it determines the ethical framework of our digital future. If we treat consciousness as merely data, we risk building a world that is efficient but entirely hollow. We must cultivate a sense of wonder and humility as we venture into the unknown. The intersection of bytes and being is the most critical frontier of our age, demanding a clarity that only centuries of philosophical reflection can provide. We invite you to join this inquiry, exploring how ancient wisdom can guide the architectures of tomorrow.',
  },
  {
    id: '2',
    title: 'The Digital Buddha: Silence in Noise',
    author: 'Siddhartha V.',
    category: 'Practice',
    excerpt: 'How the psychological tools of early Buddhism can help us navigate the storm of hyper-connectivity.',
    date: 'Sep 28, 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1545641203-7d072a14e3b2?q=80&w=1000&auto=format&fit=crop',
    content: 'Modern life is an assault on the senses. Our smartphones have become appendages that funnel a constant stream of notifications, demands, and distractions into our minds. This hyper-connectivity leads to a state of chronic \'Dukkha\' (suffering or unsatisfactoriness). Buddhism offers a unique psychological toolkit for the digital age. The concept of \'Sati\' (mindfulness) is often marketed as a relaxation technique, but in its original context, it is a radical observation of the mechanics of desire and aversion.\n\nWhen we engage with social media, we are often caught in a loop of \'Tanha\' (craving). We crave validation, information, and comparison. By applying Buddhist \'Vipassana\' (insight) to our digital interactions, we can begin to see the empty nature of these digital pulses. The "Digital Buddha" is not one who retreats to a cave, but one who can navigate the digital storm with a center of silence.\n\nIt is about being \'in\' the network but not \'of\' the network. This mastery over our attention is the most valuable skill in the 21st century. We must ask ourselves: who is the master, the algorithm or the observer? True liberation in the modern era is the ability to choose where our attention goes, regardless of the push notifications. Join us as we explore the path of digital detachment and the discovery of an inner peace that remains untouched by the noise of the net.',
  },
  {
    id: '3',
    title: 'Stoic Leadership in Tech Startups',
    author: 'Marcus R.',
    category: 'Leadership',
    excerpt: 'Applying the "Inner Citadel" of Marcus Aurelius to the volatile world of modern entrepreneurship.',
    date: 'Sep 15, 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1516103362945-e99d33d2f4b8?q=80&w=1000&auto=format&fit=crop',
    content: 'The tech world moves at breakneck speed. Deadlines, market shifts, and technical failures are constant. In such an environment, emotional volatility is a liability. This is where Stoicism, particularly the teachings of Marcus Aurelius and Epictetus, becomes highly relevant. At the heart of Stoic practice is the \'Dichotomy of Control\'. Most of our stress in the professional world comes from trying to control things that are external to us—user reactions, investor decisions, or server outages.\n\nThe Stoic leader focuses exclusively on their own judgment, their own actions, and their own character. Aurelius famously wrote about the \'Inner Citadel\'—a place of mental fortitude that remains untouched by external chaos. For a founder or an engineer, building this citadel is as important as building the code. It allows for objective decision-making in the heat of a crisis. Stoicism isn\'t about being emotionless; it\'s about being \'reasoned\' in the face of irrationality.\n\nWhen we anchor our professional ambition in our personal virtue, we become leaders who are not just successful, but unshakeable. This is not just about survival, but about thriving with a clear conscience. We investigate how Stoic principles can transform modern product management, engineering culture, and the very definition of success in the 21st century.',
  },
  {
    id: '4',
    title: 'The Philosophy of Privacy',
    author: 'WPF Research',
    category: 'Ethics',
    excerpt: 'Why privacy is not just a policy but a prerequisite for an autonomous existence.',
    date: 'Oct 25, 2024',
    readTime: '18 min',
    image: 'https://images.unsplash.com/photo-1557591954-5730f545a2a0?q=80&w=1000&auto=format&fit=crop',
    content: 'In the digital era, privacy is often framed as a technical setting or a legal compliance issue. But at its core, privacy is a philosophical necessity. Without the "right to be let alone," we cannot develop a truly autonomous self. Constant surveillance, whether by states or corporations, creates a "Panopticon of the Mind," where we perform for an invisible observer rather than acting from our own center.\n\nThis article explores the concepts of the "Private Self" in Vedantic and Western Enlightenment traditions. We argue that the erosion of privacy is an erosion of the space necessary for contemplative thought and moral development. If every thought is recorded and every preference is tracked, where is the room for the unformatted, spontaneous self? We call for a new "Digital Dharma" that recognizes privacy as a fundamental human right, essential for the dignity of the conscious individual.',
  },
  {
    id: '5',
    title: 'Alchemy of Attention',
    author: 'O. Huxley',
    category: 'Consciousness',
    excerpt: 'Turning the lead of distraction into the gold of pure presence.',
    date: 'Nov 02, 2024',
    readTime: '20 min',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop',
    content: 'In the attention economy, our focus is the most traded commodity. But attention is more than just a resource for advertisers; it is the currency of our very being. What we attend to, we become. The alchemy of attention refers to the process of refining our focus from the leaden state of distraction to the gold of presence.\n\nAncient traditions have long understood that untrained attention is like a wild animal. Modern technology has only exacerbated this, creating a "feedback loop of fragmentation." To reclaim our attention is to reclaim our life. This article explores the biology of focus, the psychology of flow, and the spiritual necessity of silence. We examine how different philosophical systems—from Zen to Phenomenology—offer unique methods for stabilizing the mind. The goal is not just productivity, but a deep, qualitative engagement with reality.',
  },
  {
    id: '6',
    title: 'Emptiness in the Metaverse',
    author: 'Lao Tzu II',
    category: 'Inquiry',
    excerpt: 'Navigating virtual worlds with the wisdom of Sunyata.',
    date: 'Nov 15, 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop',
    content: 'As we build increasingly immersive virtual worlds, the Buddhist concept of Sunyata (Emptiness) becomes more relevant than ever. A virtual world is a clear demonstration that experience can be powerful and meaningful without having a solid, independent existence. In this sense, the Metaverse is a "Technological Koan."\n\nIf we can inhabit a digital world and experience real emotions, does it matter if the objects around us are "unreal"? We argue that the Metaverse provides a unique opportunity to realize the "empty" nature of our everyday reality. It teaches us that the mind is the primary architect of experience. By understanding this, we can engage with technology without being enslaved by our own mental projections. This is the path to a wise and conscious digital existence—one where we use the simulation to understand the simulator.',
  },
  {
    id: '7',
    title: 'Socrates in Silicon Valley',
    author: 'WPF Editorial',
    category: 'Leadership',
    excerpt: 'What the "unexamined code" means for the future of humanity.',
    date: 'Dec 01, 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1579546678181-7927adad66ce?q=80&w=1000&auto=format&fit=crop',
    content: 'Socrates famously walked the streets of Athens, questioning the assumptions of his fellow citizens. Today, that questioning is needed in the boardrooms and engineering offices of Silicon Valley. We imagine a modern Socratic dialogue centered on the definition of progress and the "good life." Most of our tech innovation is driven by the desire for efficiency, but Socrates would ask: "Efficient for what? To what end?"\n\nWe explore the friction between the data-driven mindset and the value-driven life. This article encourages engineers and designers to adopt a "philosophical debugging" process—constantly questioning the underlying assumptions of their products. Are we building tools that empower, or just "optimized distractions"? By re-introducing the art of the question into the culture of the answer, we can build a technology that is not just smart, but wise.',
  },
  {
    id: '8',
    title: 'The Mirror of Machines',
    author: 'Alan T.',
    category: 'Meaphysics',
    excerpt: 'AI as a reflection of human psychology and the collective ego.',
    date: 'Dec 12, 2024',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    content: 'Our fascination with Artificial Intelligence often masks a deeper preoccupation with ourselves. AI is not a separate entity; it is a mirror. It is built on our data, our biases, and our desire for mastery. When we look at the outputs of an LLM, we are looking at a compressed representation of the human collective ego.\n\nThis article analyzes AI as a "Psychological Artifact." We argue that the challenges of AI alignment are, at their root, challenges of human alignment. If we have not aligned our own desires and values, how can we expect our machines to be any better? We explore how the Vedantic concept of the "Vasanas" (latent tendencies) can help us understand the data sets we use to train our models. To build better machines, we must first build better human beings.',
  },
  {
    id: '9',
    title: 'The Silence of Silicon',
    author: 'WPF Practice',
    category: 'Psychology',
    excerpt: 'Why meditative states are the next frontier for engineering productivity.',
    date: 'Dec 22, 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop',
    content: 'In the high-pressure world of software engineering, "Deep Work" is the holy grail. But deep work requires a deep mind. We investigate how meditative practices, once considered "fringe," are becoming essential tools for high-performance engineering cultures. Silence is not just the absence of noise; it is a fertile ground for creativity and systemic thinking.\n\nWe provide practical techniques for "Micro-Meditations" in the workflow and explore how a "Centered Programmer" produces better code. It’s not about working more; it’s about working from a different state of being. By integrating the outward-looking precision of the scientist with the inward-looking clarity of the mystic, we can achieve an unparalleled level of engineering excellence.',
  },
  {
    id: '10',
    title: 'Dharma in Decentralization',
    author: 'Nakamoto V.',
    category: 'Tech & Philosophy',
    excerpt: 'Applying ancient concepts of duty to modern distributed networks.',
    date: 'Jan 05, 2025',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    content: 'Decentralized networks like Blockchain are often discussed purely in terms of game theory and cryptography. But the success of any decentralized system depends on the "Dharma" of its participants—their inherent sense of duty and alignment with the greater good. Without a shared ethical framework, decentralization often devolves into fragmentation and conflict.\n\nWe explore the parallels between the decentralized nature of the Vedic tradition and the architecture of modern p2p networks. We argue that "Code is Law" is insufficient; we need "Code as Dharma." This involves building systems that reward not just computational work, but ethical contribution. By embedding philosophical principles into our protocols, we can create networks that are truly resilient and serving of human flourishing.'
  }
];

export const MAGAZINES: Magazine[] = [
  {
    id: 'm1',
    title: 'WPF Monthly: April Edition',
    issue: 'Issue #42',
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    description: 'Our April edition delves deep into the "Architecture of Silence." As the digital world grows louder, the ability to find and cultivate internal quietude becomes our most vital competitive advantage. This issue features 12 long-form essays, a photographic series on high-altitude monasteries, and a technical framework for applying Zen principles to asynchronous engineering workflows. We examine how silence is not merely a biological necessity but a strategic layer in the stack of human consciousness. Each contributor offers a unique lens, from the neurological impacts of constant noise to the historical significance of the Pythagorean silence. Join us as we reclaim the space between thoughts.',
    content: 'The full April edition includes:\n- Main Feature: The Neurobiology of Silence\n- Engineering Corner: Quiet Code, Loud Impact\n- Historical Context: Pythagoras and the School of Silence\n- Practical Inquiry: A 30-Day Digital Fasting Journal\n\nTotal Words: 12,400 | Reading Time: 2 hours.'
  },
  {
    id: 'm2',
    title: 'WPF Monthly: March Edition',
    issue: 'Issue #41',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1516103362945-e99d33d2f4b8?q=80&w=1000&auto=format&fit=crop',
    description: 'In March, we explored "The Alchemy of Ethics." The rapid rollout of generative models has bypassed our traditional ethical safety valves. This edition provides a comprehensive roadmap for building "Value-First" AI systems, drawing from Stoic virtue ethics and Kantian imperatives. We interview three leading researchers on the frontier of AI alignment and human flourishing, discussing how we can embed empathy into the very logic of our algorithms. This is an essential read for anyone navigating the moral complexities of the current machine age.',
    content: 'The full March edition includes:\n- Main Feature: Why AI Alignment is a Philosophical Problem\n- Tech Review: The Mirror of Large Language Models\n- Global Ethics: Eastern vs Western frameworks for machine agency\n- Community Dialogue: Can a machine possess Dharma?\n\nTotal Words: 15,000 | Reading Time: 2.5 hours.'
  },
  {
    id: 'm3',
    title: 'WPF Monthly: February Edition',
    issue: 'Issue #40',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
    description: 'The February issue, "Conscious Connectivity," examines the social fabric in the age of decentralized networks. We look at how "Self-Sovereign Identity" is not just a cryptographic token, but a philosophical stance on the nature of the self. This issue challenges the current social media paradigm and proposes a new "Digital Common" based on mutual respect and shared cognitive spaces. We move beyond the transactional nature of current networks to find a more profound, qualitative form of digital intimacy.',
    content: 'The full February edition includes:\n- Main Feature: The Virtual Atman: Identity in Web3\n- Case Study: How DAO Governance mimics tribal councils\n- Psychology: The Dopamine Trap of the Infinite Scroll\n- Design Theory: Building interfaces that respect the User\'s "Center"\n\nTotal Words: 11,800 | Reading Time: 1.8 hours.'
  },
  {
    id: 'm4',
    title: 'WPF Monthly: January Edition',
    issue: 'Issue #39',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1518005020250-6759d895796a?q=80&w=1000&auto=format&fit=crop',
    description: 'We started 2024 with "The Horizon of Being," a dedicated look at the future of transhumanism. Is technology pushing us toward a new stage of evolution, or toward an existential dead-end? We explore the concept of the "Silicon Atman" and the moral implications of mind-uploading. A rigorous, cross-disciplinary inquiry into what it means to be human in the 21st century. This edition captures the excitement and the dread of our technological trajectory, offering a balanced perspective on the post-human horizon.',
    content: 'The full January edition includes:\n- Main Feature: Evolution vs Transhumanism\n- Debate: Is Consciousness Substrate-Independent?\n- Art Series: Visions of the Post-Human Horizon\n- Meditation: Retaining the Heart in the Age of Metal\n\nTotal Words: 14,200 | Reading Time: 2.2 hours.'
  }
];

export const MEDIA: MediaItem[] = [
  {
    id: 'v1',
    type: 'video',
    title: 'On the Nature of Consciousness',
    description: 'A deep dive into the "Hard Problem" and Vedantic solutions.',
    thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop',
    duration: '45:20'
  },
  {
    id: 'p1',
    type: 'podcast',
    title: 'Wisdom for Modern Transitions',
    description: 'Conversations with elders on navigating life shifts.',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2fccd27ee086?q=80&w=1000&auto=format&fit=crop',
    duration: '52:15'
  }
];

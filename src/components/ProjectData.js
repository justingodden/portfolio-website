const projectData = [
    {
        id: 0,
        title: 'Sentient',
        img: 'sentient-card.png',
        imgDisplay: 'sentient-display.gif',
        chips: ['JavaScript', 'React', 'Python', 'Flask', 'Transfer Learning', 'NLP', 'restAPI'],
        shortDescription: 'Full-stack machine learning dashboard to anaylse Twitter sentiment',
        longDescription: `Sentient is a full-stack application used to analyse sentiment of a search-term on Twitter. Using Machine Learning and Natural Langauge Processing, it infers and aggregates tweets, and provides charts and figures to summarise public feeling, and also can show the most positive, lease positive, and most retweeted tweets.
        
        The front-end was built in React and uses Axios to communicate with the back-end API which was built using Python. The back-end Python model requests the Twitter API, and uses HuggingFace Transformers transfer learning for NLP classification. The model is wrapped in a Flask web app API and is hosted on Heroku`,
        github: 'https://github.com/justingodden/twitter-sentiment-frontend',
        website: 'https://justingodden.github.io/twitter-sentiment-frontend/'
    },
    {
        id: 1,
        title: 'Car Price Predictor',
        img: 'car-card.png',
        imgDisplay: 'car-display.gif',
        chips: ['JavaScript', 'React', 'Python', 'Tensorflow', 'Entity Embeddings', 'Flask', 'BeautifulSoup'],
        shortDescription: 'Full-stack Deep Learning car price model application',
        longDescription: `This car price prediction application is an end-to-end machine learning project, with a full React interface, deployed for users on Heroku.

        The GitHub contains the Jupyter Notebook with the entire model development process, from data collection, cleaning, feature engineering, model selection and tuning.

        The data was web-scraped using Python package BeautifulSoup to collect over 4000 car profiles from a popular car sales website. The deep learning model was developed using TensorFlow, and included using entity embeddings to encode high cardinality categorical features.

        The model was wrapped in a Flask web application to create an API end-point for the front-end to communicate with, and is hosted on Heroku.

        The front-end was written in React with Hooks and Context, and uses Axios to request the Python API.`,
        github: 'https://github.com/justingodden/car-pricing-interface',
        website: 'https://justingodden.github.io/car-pricing-interface/'
    },
    {
        id: 2,
        title: 'JG Portfolio Website',
        img: 'portfolio-card.png',
        imgDisplay: 'portfolio-display.gif',
        chips: ['JavaScript', 'React', 'Material-ui', 'React-Router', 'HTML', 'CSS', 'Responsive'],
        shortDescription: 'Personal portfolio website built to showcase projects',
        longDescription: `Simple, clean personal portfolio built using React and Material-ui to act as a hub for all of my person projects, with scope to expand to other features such as incorporating a blog.
        
        The site uses react-router and Material-ui and is hosted on GitHub Pages with a custom domain. The site is entirely responsive with a mobile-first design.`,
        github: 'https://github.com/justingodden/portfolio-website',
        website: ''
    }
]

export default projectData
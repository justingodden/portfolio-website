export default [
    {
        title: 'Sentient',
        img: 'sentient-card.png',
        chips: ['JavaScript', 'React', 'Python', 'Tensorflow', 'NLP', 'restAPI'],
        shortDescription: 'Full-stack dashboard to anaylse Twitter sentiment',
        longDescription: 'Sentient is a full-stack application used to analyse sentiment of a search-term on Twitter. Using Machine Learning and Natural Langauge Processing, it infers and aggregates tweets, and provides charts and figures to summarise the public feeling, and also can show the most positive, lease positive, and most retweeted tweets.<br><br>The front-end was built in React and uses Axios to communicate with the back-end API which was built using Python. The back-end python uses HuggingFace transfer learning for the NLP, and the model is wrapped in a Flask web app API and hosted on Heroku'
    }
]
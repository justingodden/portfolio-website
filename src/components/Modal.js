import React from 'react'
import '../modal.css'
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

let ProjectData = [
    {
        id: 0,
        title: 'Sentient',
        img: 'sentient-card.png',
        imgDisplay: 'sentient-display.gif',
        chips: ['JavaScript', 'React', 'Python', 'Flask', 'Transfer Learning', 'NLP', 'restAPI'],
        shortDescription: 'Full-stack dashboard to anaylse Twitter sentiment',
        longDescription: `Sentient is a full-stack application used to analyse sentiment of a search-term on Twitter. Using Machine Learning and Natural Langauge Processing, it infers and aggregates tweets, and provides charts and figures to summarise the public feeling, and also can show the most positive, lease positive, and most retweeted tweets.
        
        The front-end was built in React and uses Axios to communicate with the back-end API which was built using Python. The back-end python uses HuggingFace transfer learning for the NLP, and the model is wrapped in a Flask web app API and hosted on Heroku`,
        github: 'https://github.com/justingodden/twitter-sentiment-frontend',
        website: 'https://justingodden.github.io/twitter-sentiment-frontend/'
    },
    {
        id: 1,
        title: 'Car Price Predictor',
        img: 'car-card.png',
        imgDisplay: 'car-display.gif',
        chips: ['JavaScript', 'React', 'Python', 'Tensorflow', 'Entity Embeddings', 'Flask', 'BeautifulSoup'],
        shortDescription: 'Full-stack Deep Learning car price model',
        longDescription: `This car price prediction application is an end-to-end machine learning project, with a full React interface, deployed for users on Heroku.

        The GitHub contains the Jupyter Notebook with the entire model development process, from data collecting, cleaning, feature engineering, model selection and tuning.

        The data was web scraped using Python package BeautifulSoup to collect over 4000 car profiles from a popular car sales website. The model was developed using TensorFlow, including using entity embeddings to encode high cardinality categorical features.

        The model was wrapped in a Flask web application to create an API end-point for the front-end to communicate with, and was hosted on Heroku.

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
        longDescription: `Simple, clean person portfolio built using React and Material-ui to act as a hub for all of my person projects, with scope to expand to other features such as incorporating a blog.`,
        github: 'https://github.com/justingodden/portfolio-website',
        website: '#'
    }
]



function Modal({ setShowModal, modalNum }) {

    return (
        <div className="backdrop">
            <div className="modal">
                <img className="modalImg"src={require(`../images/${ProjectData[modalNum].imgDisplay}`).default} alt=""></img>
                <div className="modalContent">
                    <div className="modalClose">
                        <IconButton size="small" onClick={() => setShowModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <h2 className="modalTitle">{ProjectData[modalNum].title}</h2>
                    <div className="modalContentChips">
                        {
                            ProjectData[modalNum].chips.map((chip) => (
                                <Chip
                                    key={chip}
                                    className="cardChip"
                                    size="small" color="primary" label={chip} />
                            ))
                        }
                    </div>
                    <p className="modalContentText">{ProjectData[modalNum].longDescription}
                    </p>
                    <div className="modalContentButtons">
                    <Button
                        className="button"
                        variant="contained"
                        color="primary"
                        href={ProjectData[modalNum].website}
                        target="_blank"
                    >
                        <VisibilitySharpIcon className ="icon" />
                        View Website
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

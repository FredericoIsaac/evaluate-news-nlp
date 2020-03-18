import { urlValidator } from './js/urlValidator'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import Newspaper from './newspaper.jpg'

function component() {
    const element = document.createElement('div')
    const myNewspaper = new Image();
    myNewspaper.src = Newspaper;
    element.appendChild(myNewspaper);
    return element;
}

export {
    urlValidator,
    handleSubmit
}

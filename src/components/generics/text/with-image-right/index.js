import React from 'react'
import Image from '../../image'
import FontMedium from '../../font/medium'
import Regular from '../../font/regular'
import './styles.css'

//props.src = Imagem a ser utilizada
//props.height = Altura da imagem introduzida
class TextWithImageRight extends React.Component {
    render() {
        let width = this.props.width !== undefined ? this.props.width : "auto"

        return (
            <div className="text-with-image-right-container">
                <div className="text-with-image-right-image-container">
                    <Regular><FontMedium>{this.props.children}</FontMedium></Regular>
                </div>
                <Image height={this.props.height} width={width} src={this.props.src} />
            </div>
        )
    }
}

export default TextWithImageRight
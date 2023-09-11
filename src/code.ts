import { generateCode, sortFramesLeftToRight, sortFramesTopToBottom } from './figmaAPI/utils'
import { EFigmaMessageType } from './types/dto'

figma.showUI(__html__, { width: 490, height: 450 })

figma.clientStorage.getAsync('savedData').then((data) => {
    figma.ui.postMessage(data)
})

let stateUI = null
figma.ui.onmessage = (msg) => {
    if (msg.type === EFigmaMessageType.CANCEL) {
        figma.closePlugin()
    } else if (msg.type === EFigmaMessageType.DEFAULT) {
        let { offer, buyer, designerColor, orderBy, creoType } = stateUI.default
        const { numberOfResizes, definedUniqueCode } = stateUI.settings

        if (offer[offer.length - 1] === '_') {
            offer = offer.slice(0, -1)
        }

        const renameNode = (node: SceneNode, code: String | Number) => {
            node.name = `${offer}_${buyer}_${designerColor}_${code}_${creoType}_${node.width.toFixed(
                0
            )}x${node.height.toFixed(0)}`.replace(/\s/g, '')
        }

        let selectedFrames = figma.currentPage.selection.filter((frame) => frame.type === 'FRAME') as FrameNode[]

        if (selectedFrames.length <= 0) {
            figma.notify('Nothing selected')
        } else if (orderBy === 'Top to Bottom') {
            sortFramesTopToBottom(selectedFrames)
        } else if (orderBy === 'Left to Right') {
            sortFramesLeftToRight(selectedFrames)
        }

        let code = generateCode()

        if (definedUniqueCode) {
            code = definedUniqueCode
        }

        let counter = 1
        selectedFrames.forEach((frame) => {
            if (counter <= numberOfResizes) {
                renameNode(frame, code)
                code = code
            } else {
                if (!definedUniqueCode) {
                    code = generateCode()
                }
                renameNode(frame, code)
                counter = 1
            }
            counter++
        })
    } else if (msg.type === EFigmaMessageType.SAVE) {
        figma.clientStorage.setAsync('savedData', msg.state)
        stateUI = msg.state
    } else if (msg.type === EFigmaMessageType.FETCH_OFFERS) {
        const sheetId = '1BIay3Xqs1P2xGhX5kBEweAFTQHBivTa4to6_4Vpvu2Y'

        console.log('test')
    }

    const findIdentificationLayer = (frame: FrameNode, offer: string) => {
        // @ts-ignore
        const identificationNode = frame.findOne((node) => {
            if (node.type === 'TEXT' && node.name[0] === '#') {
                return true
            } else {
                return false
            }
        })

        if (identificationNode) {
            // @ts-ignore
            return identificationNode.name.substring(1)
        } else {
            return offer
        }
    }
}

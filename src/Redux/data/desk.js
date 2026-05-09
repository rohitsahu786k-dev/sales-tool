// Slider Images
import desk1 from '../../assets/cSlider/desk1.png'
import desk2 from '../../assets/cSlider/desk2.png'
import desk3 from '../../assets/cSlider/desk3.png'
import desk4 from '../../assets/cSlider/desk4.png'
import desk6 from '../../assets/cSlider/desk6.png'
import desk7 from '../../assets/cSlider/desk7.png'
import desk8 from '../../assets/cSlider/desk8.png'
import desk9 from '../../assets/cSlider/desk9.png'
import desk11 from '../../assets/cSlider/desk11.png'
import desk12 from '../../assets/cSlider/desk12.png'
import desk13 from '../../assets/cSlider/desk13.png'
import desk14 from '../../assets/cSlider/desk14.png'

// Display Images
import display1 from '../../assets/cSlider/desk-display/Desk_1.png'
import display2 from '../../assets/cSlider/desk-display/Desk_2.png'
import display3 from '../../assets/cSlider/desk-display/Desk_3.png'
import display4 from '../../assets/cSlider/desk-display/Desk_4.png'
import display6 from '../../assets/cSlider/desk-display/Desk_6.png'
import display7 from '../../assets/cSlider/desk-display/Desk_7.png'
import display8 from '../../assets/cSlider/desk-display/Desk_8.png'
import display9 from '../../assets/cSlider/desk-display/Dynamic_XE.png'
import display11 from '../../assets/cSlider/desk-display/Desk_11.png'
import display12 from '../../assets/cSlider/desk-display/Desk_12.png'
import display13 from '../../assets/cSlider/desk-display/Desk_13.png'
import display14 from '../../assets/cSlider/desk-display/Desk_14.png'

// Front Videos
import video1 from '../../assets/media/Desk-1/intro.mp4'
import video2 from '../../assets/media/Desk-2/intro.mp4'
import video3 from '../../assets/media/Desk-3/intro.mp4'
import video4 from '../../assets/media/Desk-4/intro.mp4'
import video6 from '../../assets/media/Desk-6/intro.mp4'
import video7 from '../../assets/media/Desk-7/intro.mp4'
import video8 from '../../assets/media/Desk-8/intro.mp4'
import video9 from '../../assets/media/Dynamic-XE/intro.mp4'
import video11 from '../../assets/media/Desk-11/intro.mp4'
import video12 from '../../assets/media/Desk-12/intro.mp4'
import video13 from '../../assets/media/Desk-13/intro.mp4'
import video14 from '../../assets/media/Desk-14/intro.mp4'

// Front Images
//display-image
import OneImage from '../../assets/media/Desk-1/deskFront.png'
import TwoImage from '../../assets/media/Desk-2/deskFront.png'
import ThreeImage from '../../assets/media/Desk-3/deskFront.png'
import FourImage from '../../assets/media/Desk-4/deskFront.png'
import SixImage from '../../assets/media/Desk-6/deskFront.png'
import SevenImage from '../../assets/media/Desk-7/deskFront.png'
import EightImage from '../../assets/media/Desk-8/deskFront.png'
import NineImage from '../../assets/media/Dynamic-XE/deskFront.png'
import ElevenImage from '../../assets/media/Desk-11/deskFront.png'
import TwelveImage from '../../assets/media/Desk-12/deskFront.png'
import ThirteenImage from '../../assets/media/Desk-13/deskFront.png'
import FourteenImage from '../../assets/media/Desk-14/deskFront.png'

import { deskColors } from './color'
import { deskErgos } from './ergonomics'
import { deskEquipments } from './equipments'
import { deskWiring } from './wiring'
import { deskLayouts } from './layouting'
import { deskXyzs } from './xyz'
import { deskLiterature } from './literature'
import { deskAssembly } from './assembly'
import { deskCertify } from './certify'
import { deskPackages } from './packaging'
import { deskFeat } from './featuresNew'
import { deskConfig } from './configuration'


export const deskList = [
    {
        id: 0,
        assetsId: 11,
        title: 'XLAT RE',
        img: desk11,
        viewer3d:false,
        displayImage: display11,
        displayFront: ElevenImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "The effectiveness, efficiency and satisfaction that XLAT RE offers in a high-tech environment are the result of its versatile adaptability that gives the best-in-class user experience to the operators.XLAT RE is a unique and robust platform, capable to adapt to the specific requirement of the operator and centralize all functions on one single touch screen. The elegance of its simple design loaded with all necessary features, make XLAT RE one of the most astonishing consoles of the future.  ",
        shortDescription: "The effectiveness, efficiency and satisfaction that XLAT RE offers in a high-tech environment are the result of its versatile adaptability that gives the best-in-class user experience to the operators.XLAT RE is a unique and robust platform, capable to adapt to the specific requirement of the operator and centralize all functions on one single touch screen. The elegance of its simple design loaded with all necessary features, make XLAT RE one of the most astonishing consoles of the future.",
        video: video11,
        features: [
            "Exceptional design ",
            "Organic seamless worksurfaces ",
            "Iconic foot extension ",
            "Floating equipment cabinet ",
            "Enhanced user comfort ",
            "Fully customizable ",
            "Improved safety ",
            "Redesigned design vocabulary ",
            "Elegant finish "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 1,
        assetsId: 12,
        title: 'XLAT ZE',
        img: desk12,
        viewer3d:false,
        displayImage: display12,
        displayFront: TwelveImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "Its mono-pole design provides effective utilization of the available space. The covers and decorative trims of the Pole attaches magnetically for easy access and maintenance. They can be replaced by new trims from a wide range of options to suit any kind of control room theme.",
        shortDescription: "Its mono-pole design provides effective utilization of the available space. The covers and decorative trims of the Pole attaches magnetically for easy access and maintenance. They can be replaced by new trims from a wide range of options to suit any kind of control room theme.",
        video: video12,
        features: [
            "Exceptional design ",
            "Organic seamless worksurfaces ",
            "Iconic foot extension ",
            "Floating equipment cabinet ",
            "Enhanced user comfort ",
            "Fully customizable ",
            "Improved safety ",
            "Redesigned design vocabulary ",
            "Elegant finish "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 2,
        assetsId: 2,
        title: 'XLAT ZE',
        img: desk3,
        viewer3d:false,
        displayImage: display3,
        displayFront: ThreeImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "Its mono-pole design provides effective utilization of the available space. The covers and decorative trims of the Pole attaches magnetically for easy access and maintenance. They can be replaced by new trims from a wide range of options to suit any kind of control room theme.",
        shortDescription: "Its mono-pole design provides effective utilization of the available space. The covers and decorative trims of the Pole attaches magnetically for easy access and maintenance. They can be replaced by new trims from a wide range of options to suit any kind of control room theme.",
        video: video3,
        features: [
            "Mono-pole construction ",
            "Future ready ",
            "Ergonomically advanced ",
            "Iconic equipment cabinet ",
            "Ultra modern ",
            "Spatial design",
            "Enhanced human machine interface ",
            "Generous leg-space ",
            "Innovative and floating slat wall",
            "Pioneer concept  ",
            "Robust foot support"
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 3,
        assetsId: 13,
        title: 'XLAT',
        img: desk13,
        viewer3d:false,
        displayImage: display13,
        displayFront: ThirteenImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "XLAT Console gives the end user, a complete control of the working environment. XLAT&trade; is designed to accommodate radical changes in technology, enabling the user with a flexible module to improve process efficiency.",
        shortDescription: "XLAT Console gives the end user, a complete control of the working environment. XLAT&trade; is designed to accommodate radical changes in technology, enabling the user with a flexible module to improve process efficiency.",
        video: video13,
        features: [
            "Exceptional design ",
            "Organic seamless worksurfaces ",
            "Iconic foot extension ",
            "Floating equipment cabinet ",
            "Enhanced user comfort ",
            "Fully customizable ",
            "Improved safety ",
            "Redesigned design vocabulary ",
            "Elegant finish "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 4,
        assetsId: 14,
        title: 'XLAT XE',
        img: desk14,
        viewer3d:false,
        displayImage: display14,
        displayFront: FourteenImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "XLAT XE is a versatile Command and Control Center console. its adaptability provides best-in-class user experience, resulting in the effectiveness, efficiency and better satisfaction of the operator.   ",
        shortDescription: "XLAT XE is a versatile Command and Control Center console. its adaptability provides best-in-class user experience, resulting in the effectiveness, efficiency and better satisfaction of the operator. ",
        video: video14,
        features: [
            "Exceptional design ",
            "Organic seamless worksurfaces ",
            "Iconic foot extension ",
            "Floating equipment cabinet ",
            "Enhanced user comfort ",
            "Fully customizable ",
            "Improved safety ",
            "Redesigned design vocabulary ",
            "Elegant finish "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 5,
        assetsId: 5,
        title: 'XLAT SE',
        img: desk6,
        viewer3d:false,
        displayImage: display6,
        displayFront: SixImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "XLAT SE, with its intelligent dashboard, adapts to an individual operator’s need to perform with better comfort and ease, under task critical control room operations.The dashboard is designed to translate the operational expressions to an easily accessible smart touch control, increasing the efficiency and speed of critical decisions within a control room.  ",
        shortDescription: "XLAT SE, with its intelligent dashboard, adapts to an individual operator’s need to perform with better comfort and ease, under task critical control room operations. The dashboard is designed to translate the operational expressions to an easily accessible smart touch control, increasing the efficiency and speed of critical decisions within a control room.  ",
        video: video6,
        features: [
            "Personalized Desking ",
            "Space Age Styling ",
            "Ergonomics Redefined ",
            "Emergency Indication ",
            "Smart Column Design",
            "Stylish Dashboard ",
            "Single Touch Control ",
            "Seamless Desk Adjustment",
            "Through Mobile",
            "Lower MSD’s ",
            "Environment Control",
            "Sit to Stand Mechanism",
            "Articulating Monitor Arm"
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 6,
        assetsId: 8,
        title: 'DYNAMIC XE',
        img: desk9,
        viewer3d:false,
        displayImage: display9,
        displayFront: NineImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "Highly flexible ergonomic operator desk solution to improve the efficiency of operators and processes. Designed Dynamic XE as per the user experience and functionality. The operator’s freedom has been set to the apex level.",
        shortDescription: "Highly flexible ergonomic operator desk solution to improve the efficiency of operators and processes. Designed Dynamic XE as per the user experience and functionality. The operator’s freedom has been set to the apex level.",
        video: video9,
        features: [
            "24-7 solution built to last",
            "6 ergonomic adjustments with presets ",
            "Direct sound and light system",
            "High ergonomic flexibility ",
            "Touch screen control",
            "Improves alertness and decision making ",
            "Monitor tilt variation",
            "Empowering operator alertness",
            "Reduces unnecessary downtime",
            "Superior control over equipment"
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 7,
        assetsId: 6,
        title: 'XLAT LC',
        img: desk7,
        viewer3d:false,
        displayImage: display7,
        displayFront: SevenImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "Console Solution that gives the end user, a complete command of the work environment. XLAT&trade; range of consoles are designed to accommodate radical changes in technology, enabling the user with a flexible module to improve process efficiency. Console that provides the user with unlimited configuration possibilities. XLAT&trade; opens up a world of preferences for the user by supporting a range of layout and desk modules catering to varied requirements of the operator. ",
        shortDescription: "Console Solution that gives the end user, a complete command of the work environment. XLAT&trade; range of consoles are designed to accommodate radical changes in technology, enabling the user with a flexible module to improve process efficiency. Console that provides the user with unlimited configuration possibilities. XLAT&trade; opens up a world of preferences for the user by supporting a range of layout and desk modules catering to varied requirements of the operator. ",
        video: video7,
        features: [
            "Highly Functional ",
            "Optimally Designed ",
            "Integrated Cabinets ",
            "Dual to Multi-Tier Configuration ",
            "ISO 11064 Compliant",
            "Sustainable & Maintenance Free",
            "Environment Friendly ",
            "Molded Wrist-Pads ",
            "Fully Customizable ",
            "Advanced Product Design ",
            "Precise Monitoring ",
            "Timeless Style "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 8,
        assetsId: 7,
        title: 'Dynamic M',
        img: desk8,
        viewer3d:false,
        displayImage: display8,
        displayFront: EightImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "With its classy shape and smooth rounded Tabletops, Dynamic M harmonizes with various environments. It also brings a playful and refined touch to its functionality for control room applications. The shutters provide smoot handling and unimpeded access to the cabinet.  ",
        shortDescription: "With its classy shape and smooth rounded Tabletops, Dynamic M harmonizes with various environments. It also brings a playful and refined touch to its functionality for control room applications. The shutters provide smoot handling and unimpeded access to the cabinet. ",
        video: video8,
        features: [
            "Spectacular design",
            "Artistically crafted ",
            "Confident mastery",
            "Generous leg room",
            "Informative supervisor display",
            "Fully customizable",
            "Modern design language",
            "Stylistic elegance ",
            "Flexible identity ",
            "Striking LED glow",
            "Hi-tech features",
            "Unparallel styling "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 9,
        assetsId: 3,
        title: 'XLAT CE',
        img: desk4,
        viewer3d:false,
        displayImage: display4,
        displayFront: FourImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "XLAT CE, with its intelligent dashboard, adapts to an individual operator’s need to perform with better comfort and ease, under task critical control room operations. The dashboard is designed to translate the operational expressions to an easily accessible smart touch control, increasing the efficiency and speed of critical decisions within a control room.",
        shortDescription: "XLAT CE, with its intelligent dashboard, adapts to an individual operator’s need to perform with better comfort and ease, under task critical control room operations. The dashboard is designed to translate the operational expressions to an easily accessible smart touch control, increasing the efficiency and speed of critical decisions within a control room.",
        video: video4,
        features: [
            "Personalized Desking",
            "Space Age Styling",
            "Ergonomics Redefined",
            "Emergency Indication",
            "Smart Column Design",
            "Stylish Dashboard",
            "Single Touch Control",
            "Seamless Desk Adjustment",
            "Through Mobile",
            "Lower MSD’s",
            "Environment Control",
            "Sit to Stand Mechanism",
            "Articulating Monitor Arm"
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 10,
        assetsId: 1,
        title: 'Dynamic O',
        img: desk2,
        viewer3d:false,
        displayImage: display2,
        displayFront: TwoImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "With its already integrated sit stand feature Dynamic O is made for Ergonomics only. Dynamic O harmonizes with various environments. It also brings a playful and refined touch to its functionality for control room applications. The shutters provide smoot handling and unimpeded access to the cabinet.",
        shortDescription: "With its already integrated sit stand feature Dynamic O is made for Ergonomics only. Dynamic O harmonizes with various environments. It also brings a playful and refined touch to its functionality for control room applications. The shutters provide smoot handling and unimpeded access to the cabinet.",
        video: video2,
        features: [
            "Spectacular design",
            'Artistically crafted',
            "Confident mastery",
            "Generous leg room",
            "Informative supervisor display",
            "Fully customizable",
            "Modern design language",
            "Stylistic elegance",
            "Flexible identity",
            "Striking LED glow",
            "Hi-tech features",
            "Unparallel styling",
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    },
    {
        id: 11,
        assetsId: 0,
        title: 'XLAT JE',
        img: desk1,
        viewer3d:false,
        displayImage: display1,
        displayFront: OneImage,
        get activeLongDescription() {
            return this.longDescription
        },
        set activeLongDescription(longDescription) {
            this.longDescription = longDescription;
        },
        longDescription: "The effectiveness, efficiency and satisfaction that XLAT JE offers in a high-tech environment are the result of its versatile adaptability that gives the best-in-class user experience to the operators.XLAT JE is a unique and robust platform, capable to adapt to the specific requirement of the operator and centralize all functions on one single touch screen. The elegance of its simple design loaded with all necessary features, make XLAT JE one of the most astonishing consoles of the future.  ",
        shortDescription: "The effectiveness, efficiency and satisfaction that XLAT JE offers in a high-tech environment are the result of its versatile adaptability that gives the best-in-class user experience to the operators.XLAT JE is a unique and robust platform, capable to adapt to the specific requirement of the operator and centralize all functions on one single touch screen. The elegance of its simple design loaded with all necessary features, make XLAT JE one of the most astonishing consoles of the future.",
        video: video1,
        features: [
            "Exceptional design ",
            "Organic seamless worksurfaces ",
            "Iconic foot extension ",
            "Floating equipment cabinet ",
            "Enhanced user comfort ",
            "Fully customizable ",
            "Improved safety ",
            "Redesigned design vocabulary ",
            "Elegant finish "
        ],
        get colors() {
            return deskColors.find((color) => color.deskId === this.assetsId).colors
        },
        get certificates() {
            return deskCertify.find((color) => color.deskId === this.assetsId).certiifactes
        },
        activeColor: undefined,
        get ergos() {
            return deskErgos.find((ergo) => ergo.deskId === this.assetsId).ergo
        },
        get equipments() {
            return deskEquipments.find((equip) => equip.deskId === this.assetsId).equipments
        },
        get wiring() {
            return deskWiring.find((wire) => wire.deskId === this.assetsId).wiring
        },
        get assembly() {
            return deskAssembly.find((assembly) => assembly.deskId === this.assetsId).assembly
        },
        get certify() {
            return deskCertify.find((certify) => certify.deskId === this.assetsId).certify
        },
        get literature() {
            return deskLiterature.find((literature) => literature.deskId === this.assetsId).literature
        },
        get config() {
            return deskConfig.find((config) => config.deskId === this.assetsId).config
        },
        get feat() {
            return deskFeat.find((feat) => feat.deskId === this.assetsId).feat
        },
        get layouts() {
            return deskLayouts.find((layout) => layout.deskId === this.assetsId).layouts
        },
        get packages() {
            return deskPackages.find((packages) => packages.deskId === this.assetsId).package
        },
        get xyz() {
            return deskXyzs.find((xyz) => xyz.deskId === this.assetsId).xyz
        }
    }
].filter((desk) => desk.id !== 1 && desk.title !== 'Dynamic O')

var indoorgis =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: getCanvas, DefaultCanvasStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCanvas\", function() { return getCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultCanvasStyle\", function() { return DefaultCanvasStyle; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\r\n * @file 一些方便操纵Canvas 2D API绘制的逻辑\r\n */\r\n\r\n\r\n\r\n\r\n/**\r\n * 2D Context 默认绘图样式的定义\r\n * font style: normal | italic | oblique | inherit\r\n * font weight: normal | bold | bolder | lighter | auto\r\n * font size: A size in pixels e.g 12px, 20px etc.\r\n * font face: A font face (family), e.g. verdana, arial, serif, sans-serif, cursive, fantasy, monospace etc.\r\n  */\r\nlet DefaultCanvasStyle = {\r\n    fontStyle: 'normal',\r\n    fontWeight: 'normal',\r\n    fontSize: 20,\r\n    fontFace: 'Arial',\r\n    fontColor: '#000000', // 'black', 'rgb(0,0,255)', 'rgba(...)'\r\n    fontAlign: 'start', // \"left\" || \"right\" || \"center\" || \"start\" || \"end\"\r\n    fontVAlign: 'top', // \"top\" || \"hanging\" || \"middle\" || \"alphabetic\" || \"ideographic\" || \"bottom\"\r\n    borderColor: { r: 0, g: 0, b: 0, a: 1.0 }, // stroke color\r\n    outterInset: 1 // 文字上下左右周边留白间距\r\n};\r\n\r\n/**\r\n * @typedef {Object} Canvas2DWrapper.CanvasBlockInfo\r\n * @property {string} text - 文字内容\r\n * @property {number} line - 在第几行\r\n * @property {THREE.Box2} rect - 坐标及范围，已包含了文字周边的间距\r\n * @inner\r\n */\r\n\r\n/**\r\n  * 封装了一个隐藏的2D Canvas document element，可以利用它在后台绘制文字图集\r\n  * TODO: 后续优化：如果一帧里没有画新的字，那么纹理不需要更新\r\n  */\r\nclass Canvas2DWrapper {\r\n\r\n    /**\r\n     * @param {number} [width=512] - default size of the canvas\r\n     * @param {number} [height=512]\r\n     */\r\n    constructor(width = 512, height = 512) {\r\n        let canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n\r\n        canvas.style.position = 'absolute';\r\n        canvas.style.border = '1px solid';\r\n        canvas.style.zIndex = 8;\r\n        let body = document.getElementsByTagName('body')[0];\r\n        body.appendChild(canvas);\r\n\r\n        /**\r\n         * 图集填充的信息记录，从上至下，从左至右逐渐填充\r\n         * @type {Canvas2DWrapper.CanvasBlockInfo[]}\r\n         */\r\n        this._atlasInfo = [];\r\n\r\n        this._ctx2d = canvas.getContext('2d');\r\n\r\n        this._lines = [];\r\n\r\n        this.setDefaultFontStyle();\r\n    }\r\n\r\n    /**\r\n     * @returns {[number, number]} 画布尺寸大小（像素）\r\n     */\r\n    get canvasSize() {\r\n        if (this._ctx2d) return [this._ctx2d.canvas.width, this._ctx2d.canvas.height];\r\n        return [0, 0];\r\n    }\r\n\r\n    /**\r\n     * 设置绘制文字所用的默认画笔风格，设置一次之后会自动记录在Canvas context2d的state中\r\n     */\r\n    setDefaultFontStyle() {\r\n        /* eslint-disable no-unused-vars */\r\n        let style = DefaultCanvasStyle;\r\n        // font格式：[font style][font weight][font size][font face]\r\n        this._ctx2d.font = `${DefaultCanvasStyle.fontStyle} ${DefaultCanvasStyle.fontWeight} ${style.fontSize}px ${style.fontFace}`;\r\n\r\n        let c = style.borderColor;\r\n        this._ctx2d.strokeStyle = `rgba(${c.r},${c.g},${c.b},${c.a})`;\r\n\r\n        this._ctx2d.fillStyle = style.fontColor;\r\n\r\n        this._ctx2d.textAlign = style.fontAlign;\r\n\r\n        this._ctx2d.textBaseline = style.fontVAlign;\r\n\r\n        // 前提：所有文字的高度都一样的\r\n        this._fontHeight = parseInt(this._ctx2d.font.match(/\\d+/), 10);\r\n    }\r\n\r\n    /**\r\n     * 查找图集中的某个字符串的UV信息\r\n     *\r\n     * @param {string} text\r\n     */\r\n    findTextInfo(text) {\r\n        if (!text || text === '') return null;\r\n        for (let info of this._atlasInfo) {\r\n            if (text === info.text) return info;\r\n        }\r\n        return null;\r\n    }\r\n\r\n    /**\r\n     * 文字自动按照其尺寸在画布上从左至右、从上至下排列\r\n     * 注意：目前的算法只支持相同size的文字，即每一行的高度相同\r\n     *\r\n     * Your base UVs exist on a unit rectangle: range from 0 to 1\r\n        (0, 1)            (1, 1)\r\n        +-----------------+\r\n        |                 |\r\n        |                 |\r\n      V |                 | 这个UV坐标是THREE.WebGLSpriteRenderer在绘制Sprite时定义好的\r\n        |                 |\r\n        |                 |\r\n        |                 |\r\n        +-----------------+\r\n        (0, 0)    U       (1, 0)\r\n\r\n     * You're trying to map that space to a different rectangle on the atlas:\r\n        (xmin, ymax)  (xmax, ymax)\r\n        +------------+\r\n        |            |\r\n        |            |\r\n        |            |\r\n        |            |\r\n        +------------+\r\n        (xmin, ymin)  (xmax, ymin)\r\n\r\n     * @param {string} text - 待绘制的文字\r\n     * @returns {boolean} 是否绘制成功\r\n     */\r\n    drawText(text, fontSize = 20) {\r\n        if (!text || text === '') return false;\r\n\r\n        let info = this.findTextInfo(text);\r\n        let origin = info ? info.rect.min : null;\r\n\r\n        // 此处重新设置字体大小，暂时未找到单独设置字体的地方\r\n        this._ctx2d.font = `${DefaultCanvasStyle.fontStyle} ${DefaultCanvasStyle.fontWeight} ${fontSize}px ${DefaultCanvasStyle.fontFace}`;\r\n        // 找个空地儿绘制文字到画布上\r\n        let textMetrics = this._ctx2d.measureText(text);\r\n        let w = textMetrics.width;\r\n        let inset = DefaultCanvasStyle.outterInset;\r\n\r\n        info = this._findEmptyLineSpace(w, fontSize, inset);\r\n        if (!info) return false;\r\n        info.text = text;\r\n\r\n        origin = info.rect.min;\r\n        this._ctx2d.fillText(text, origin.x + inset, origin.y + inset);\r\n\r\n        // 计算在图集中的UV坐标，并保存起来\r\n        // let [sx, sy] = this.canvasSize;\r\n        // let size = info.rect.getSize();\r\n        // g_AtlasManager.addLayerAtlasInfo(AtlasManager.GLOBAL_CATGORY, AtlasManager.CANVAS_ATLAS_NAME,\r\n        //     {\r\n        //         frameName: text,\r\n        //         // 注意UV坐标与Canvas画布的纵轴是反向的\r\n        //         offset: new Vector3(origin.x / sx, 1 - (size.height + origin.y) / sy, 0),\r\n        //         scale: new Vector3(size.width / sx, size.height / sy, 1),\r\n        //         size: size\r\n        //     }\r\n        // );\r\n\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * 寻找图集中的一个空缺，可以绘制下该文字\r\n     *\r\n     * @param {number} w, h - 文字块的测量实际尺寸，不包括外部空隙间距\r\n     * @param {number} inset - 文字块的外部间距\r\n     * @returns {Canvas2DWrapper.CanvasBlockInfo} 图集中的位置坐标\r\n     */\r\n    _findEmptyLineSpace(w, h, inset) {\r\n        let [sx, sy] = this.canvasSize;\r\n        if (w > sx || h > sy) {\r\n            throw Error('Too big text picture to draw onto canvas!');\r\n        }\r\n\r\n        let record = null;\r\n        let height = 0; // 记录当前行的左上角起始位置\r\n\r\n        for (let i = 0, length = this._lines.length; i <= length; i++) {\r\n            if (!this._lines[i]) {\r\n                // 创建一个新行\r\n                this._lines.push({\r\n                    lineHeight: h + inset * 2, // 以第一个字体的高度为此行最大值\r\n                    cursor: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](w + inset * 2, height) // 此时已计算长度位置\r\n                });\r\n\r\n                record = {\r\n                    line: i,\r\n                    rect: new three__WEBPACK_IMPORTED_MODULE_0__[\"Box2\"]().set(\r\n                        new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](0, height), new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](w + inset * 2, height + h + inset * 2)\r\n                    )\r\n                };\r\n            } else if (h + inset * 2 <= this._lines[i].lineHeight && this._lines[i].cursor.x + (w + inset * 2) < sx) {\r\n                record = {\r\n                    line: i,\r\n                    rect: new three__WEBPACK_IMPORTED_MODULE_0__[\"Box2\"]().set(\r\n                        new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](this._lines[i].cursor.x, height), new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"](w + inset * 2, height + h + inset * 2)\r\n                    )\r\n                };\r\n\r\n                this._lines[i].cursor.x += w + inset * 2;\r\n            }\r\n            height += this._lines[i].lineHeight;\r\n\r\n            if (record) break;\r\n        }\r\n\r\n        return record;\r\n    }\r\n\r\n}\r\n\r\nlet _canvas = null;\r\n\r\nfunction getCanvas(width, height) {\r\n    if (!_canvas) {\r\n        _canvas = new Canvas2DWrapper(width, height);\r\n    }\r\n\r\n    return _canvas;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://indoorgis/./src/test.js?");

/***/ })

/******/ });
import type { IconRegistry } from "../types"
import * as boldIcons from "./bold"
import * as brokenIcons from "./broken"
import * as bulkIcons from "./bulk"
import * as linearIcons from "./linear"
import * as outlineIcons from "./outline"
import * as twotoneIcons from "./twotone"

const iconNames = ["AaveAave", "Activity", "Add", "AddCircle", "Additem", "AddSquare", "Airdrop", "Airplane", "AirplaneSquare", "Airpod", "Airpods", "Alarm", "AlignBottom", "AlignHorizontally", "AlignLeft", "AlignRight", "AlignVertically", "Android", "AnkrAnkr", "Apple", "Aquarius", "Archive", "ArchiveAdd", "ArchiveBook", "ArchiveCopy", "ArchiveCopy2", "ArchiveMinus", "ArchiveSlash", "ArchiveTick", "ArrangeCircle", "ArrangeCircle2", "ArrangeSquare", "ArrangeSquare2", "Arrow", "Arrow2", "Arrow3", "ArrowBottom", "ArrowCircleDown", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowDown", "ArrowDown1", "ArrowDown2", "ArrowLeft", "ArrowLeft1", "ArrowLeft2", "ArrowLeft3", "ArrowRight", "ArrowRight1", "ArrowRight2", "ArrowRight3", "ArrowRight4", "ArrowSquare", "ArrowSquareDown", "ArrowSquareLeft", "ArrowSquareRight", "ArrowSquareUp", "ArrowSwap", "ArrowSwapHorizontal", "ArrowUp", "ArrowUp1", "ArrowUp2", "ArrowUp3", "AttachCircle", "AttachSquare", "AudioSquare", "AugurRep", "Autobrightness", "AutonioNiox", "AvalancheAvax", "Award", "BackSquare", "Backward", "Backward10Seconds", "Backward15Seconds", "Backward5Seconds", "BackwardItem", "BackwardItem1", "Bag", "Bag2", "BagCross", "BagCross1", "BagHappy", "BagTick", "BagTick2", "BagTimer", "Bank", "Barcode", "BatteryCharging", "BatteryDisable", "BatteryEmpty", "BatteryEmpty1", "BatteryFull", "Be", "Bezier", "Bezier1", "Bill", "BinanceCoinBnb", "BinanceUsdBusd", "BitcoinBtc", "BitcoinCard", "BitcoinConvert", "BitcoinRefresh", "Blend", "Blend2", "Blogger", "Bluetooth", "Bluetooth2", "BluetoothCircle", "BluetoothRectangle", "Blur", "Blur1", "Book", "Book1", "Bookmark", "Bookmark2", "BookSaved", "BookSquare", "Bootsrap", "Bootstrap", "Box", "Box1", "Box2", "BoxAdd", "BoxRemove", "BoxSearch", "BoxTick", "BoxTime", "Briefcase", "BrifecaseCross", "BrifecaseTick", "BrifecaseTimer", "Broom", "Brush", "Brush1", "Brush2", "Brush3", "Brush4", "Bubble", "Bucket", "BucketCircle", "BucketCircle1", "BucketSquare", "BucketSquare1", "Building", "Building3", "Building4", "Buildings", "Buildings2", "Buliding", "Bus", "BuyCrypto", "Cake", "Calculator", "Calendar", "Calendar1", "Calendar2", "CalendarAdd", "CalendarCircle", "CalendarEdit", "CalendarRemove", "CalendarSearch", "CalendarTick", "Call", "CallAdd", "CallCalling", "CallIncoming", "CallMinus", "CallOutgoing", "CallReceived", "CallRemove", "CallSlash", "Camera", "CameraSlash", "Candle", "Candle2", "Car", "Card", "CardAdd", "CardanoAda", "CardCoin", "CardEdit", "CardPos", "CardReceive", "CardRemove", "CardRemove1", "Cards", "CardSend", "CardSlash", "CardTick", "CardTick1", "Category", "Category2", "Cd", "CeloCelo", "CelsiusCel", "ChainlinkLink", "Chart", "Chart1", "Chart2", "Chart21", "ChartCopy", "ChartFail", "ChartSquare", "ChartSuccess", "Check", "Chrome", "CivicCvc", "Clipboard", "ClipboardClose", "ClipboardExport", "ClipboardImport", "ClipboardText", "ClipboardTick", "Clock", "Clock1", "ClockCopy", "CloseCircle", "CloseSquare", "Cloud", "CloudAdd", "CloudChange", "CloudConnection", "CloudCross", "CloudDrizzle", "CloudFog", "CloudLightning", "CloudMinus", "CloudNotif", "CloudPlus", "CloudRemove", "CloudSnow", "CloudSunny", "Code", "Code1", "CodeCircle", "Coffee", "Coin", "Coin1", "Colorfilter", "ColorsSquare", "ColorsSquare1", "ColorSwatch", "Command", "CommandSquare", "Component", "Component1", "Computing", "Convert", "Convert3dCube", "ConvertCard", "Convertshape", "Convertshape2", "Copy", "Copyright", "CopySuccess", "Courthouse", "Cpu", "CpuCharge", "CpuSetting", "CreativeCommons", "Crop", "Crown", "Crown1", "Cup", "DaiDai", "Danger", "DashDash", "Data", "Data2", "DecredDcr", "DentDent", "Designtools", "DeviceMessage", "Devices", "DevicesCopy", "Diagram", "Diamonds", "Direct", "DirectboxDefault", "DirectboxNotif", "DirectboxReceive", "DirectboxSend", "DirectDown", "DirectInbox", "DirectLeft", "DirectNormal", "DirectNotification", "DirectRight", "DirectSend", "DirectUp", "DiscountCircle", "DiscountShape", "Discover", "DiscoverCopy", "Dislike", "Document", "DocumentCloud", "DocumentCode", "DocumentCode2", "DocumentCopy", "DocumentCopy2", "DocumentDownload", "DocumentFavorite", "DocumentFilter", "DocumentForward", "DocumentLike", "DocumentNormal", "DocumentPrevious", "DocumentSketch", "DocumentText", "DocumentText1", "DocumentUpload", "DollarCircle", "DollarSquare", "Dribbble", "Driver", "Driver2", "DriverRefresh", "Driving", "Drop", "Dropbox", "Edit", "Edit2", "EducareEkt", "Electricity", "Element1", "Element2", "Element3", "Element4", "ElementEqual", "ElementPlus", "EmercoinEmc", "EmojiHappy", "EmojiNormal", "EmojiSad", "EmptyWallet", "EmptyWalletAdd", "EmptyWalletChange", "EmptyWalletRemove", "EmptyWalletTick", "EmptyWalletTime", "EnjinCoinEnj", "EosEos", "Eraser", "Eraser1", "EraserCopy", "EthereumClassicEtc", "EthereumEth", "Export", "Export1", "Export2", "Export3", "ExternalDrive", "Eye", "EyeSlash", "Facebook", "Fatrows", "FavoriteChart", "Figma", "Figma1", "Filter", "FilterAdd", "FilterEdit", "FilterRemove", "FilterSearch", "FilterSquare", "FilterTick", "FingerCricle", "FingerScan", "Firstline", "Flag", "Flag2", "Flash", "FlashCircle", "FlashCircle1", "FlashCircleCopy", "FlashCopy", "FlashSlash", "Folder", "Folder2", "FolderAdd", "FolderCloud", "FolderConnection", "FolderCross", "FolderFavorite", "FolderMinus", "FolderOpen", "Forbidden", "Forbidden2", "FormatCircle", "FormatSquare", "Forward", "Forward10Seconds", "Forward15Seconds", "Forward5Seconds", "ForwardItem", "ForwardItem1", "ForwardSquare", "Frame", "Frame1", "Frame1Copy", "Frame1Copy2", "Frame2", "Frame2Copy", "Frame3", "Frame4", "Frame5", "FrameCopy", "FrameCopy2", "FrameCopy3", "Framer", "FtxTokenFtt", "Gallery", "GalleryAdd", "GalleryEdit", "GalleryExport", "GalleryFavorite", "GalleryImport", "GalleryRemove", "GallerySlash", "GalleryTick", "Game", "Gameboy", "GasStation", "Gemini", "Gemini2", "Ghost", "Gift", "Glass", "GlassCopy", "Global", "GlobalEdit", "GlobalRefresh", "GlobalSearch", "Google", "Google1", "GoogleDrive", "GooglePaly", "GooglePlay", "Gps", "GpsSlash", "Grammerly", "Graph", "Grid1", "Grid2", "Grid3", "Grid4", "Grid5", "Grid6", "Grid7", "Grid8", "Grid9", "GridEdit", "GridEraser", "GridLock", "Group", "Group1", "Group1Copy", "Group2", "Group2Copy", "Group2Copy2", "Group3", "Group4", "Group5", "GroupCopy", "GroupCopy2", "Happyemoji", "HarmonyOne", "Hashtag", "HashtagCopy", "HashtagDown", "HashtagUp", "Headphone", "Headphones", "Health", "Heart", "HeartAdd", "HeartCircle", "HeartEdit", "HeartRemove", "HeartSearch", "HeartSlash", "HeartTick", "HederaHashgraphHbar", "HexHex", "Hierarchy", "Hierarchy2", "Hierarchy3", "HierarchySquare", "HierarchySquare2", "HierarchySquare3", "Home", "Home1", "Home2", "HomeHashtag", "HomeTrendDown", "HomeTrendUp", "HomeWifi", "Hospital", "House", "House2", "Html3", "Html5", "HuobiTokenHt", "Icon", "Icon1", "Icon1Copy", "Icon1Copy2", "Icon24Support", "Icon3dcube", "Icon3dCubeScan", "Icon3dRotate", "Icon3dSquare", "Icon3full", "Icon3square", "IconCopy", "IconCopy2", "IconIcx", "Illustrator", "Image", "Import", "Import1", "Import2", "Import3", "InfoCircle", "Information", "Instagram", "IostIost", "Javascript", "JavaScript", "Js", "Judge", "Kanban", "Key", "Keyboard", "KeyboardOpen", "KeySquare", "KyberNetworkKnc", "Lamp", "Lamp1", "LampCharge", "LampCopy", "LampOn", "LampSlash", "LanguageCircle", "LanguageSquare", "Layer", "Level", "Lifebuoy", "Like", "Like1", "LikeDislike", "LikeShapes", "LikeTag", "Link", "Link1", "Link2", "Link21", "LinkCircle", "LinkSquare", "LitecoinLtc", "Location", "LocationAdd", "LocationCross", "LocationMinus", "LocationSlash", "LocationTick", "Lock", "Lock1", "LockCircle", "LockSlash", "Login", "Login1", "Logout", "Logout1", "Lovely", "Magicpen", "MagicStar", "MainComponent", "MainComponent1", "MakerMkr", "Man", "Map", "Map1", "MapCopy", "Mask", "Mask1", "Mask2", "Mask3", "Math", "Maximize", "Maximize1", "Maximize2", "Maximize3", "Maximize4", "MaximizeCircle", "MaximizeCopy", "Medal", "MedalStar", "Menu", "MenuBoard", "MenuCopy", "Message", "Message2", "MessageAdd", "MessageAdd1", "MessageCircle", "MessageEdit", "MessageFavorite", "MessageMinus", "MessageNotif", "MessageProgramming", "MessageQuestion", "MessageRemove", "Messages", "Messages1", "Messages2", "Messages3", "MessageSearch", "MessageSquare", "MessageText", "MessageText1", "MessageTick", "MessageTime", "Messenger", "Microphone", "Microphone2", "MicrophoneSlash", "MicrophoneSlash1", "Microscope", "Milk", "MiniMusicSqaure", "Minus", "MinusCirlce", "MinusSquare", "Mirror", "MirroringScreen", "Mobile", "MobileProgramming", "MoneroXmr", "Money", "Money2", "Money3", "Money4", "MoneyAdd", "MoneyChange", "MoneyForbidden", "MoneyRecive", "MoneyRemove", "Moneys", "MoneySend", "MoneyTick", "MoneyTime", "Monitor", "MonitorMobbile", "MonitorRecorder", "Moon", "More", "More2", "MoreCircle", "MoreSquare", "Mouse", "Mouse1", "MouseCircle", "MouseCopy", "MouseSquare", "Music", "MusicCircle", "MusicDashboard", "MusicFilter", "MusicLibrary2", "Musicnote", "MusicPlay", "MusicPlaylist", "MusicSquare", "MusicSquareAdd", "MusicSquareRemove", "MusicSquareSearch", "NebulasNas", "NemXem", "NexoNexo", "Next", "Note", "Note1", "Note2", "NoteAdd", "NoteCopy", "NoteFavorite", "NoteRemove", "NoteSquare", "NoteText", "Notification", "Notification1", "NotificationBing", "NotificationCircle", "NotificationFavorite", "NotificationStatus", "OceanProtocolOcean", "OkbOkb", "OmegaCircle", "OmegaCircle1", "OmegaSquare", "OmegaSquare1", "OntologyOnt", "Paintbucket", "Paperclip", "Paperclip2", "PasswordCheck", "Path", "Path2", "PathSquare", "Pause", "PauseCircle", "Paypal", "PenAdd", "PenAdd1", "PenClose", "PenClose1", "PenRemove", "PenRemove1", "PenTool", "PenTool1", "PenTool2", "PenTool21", "People", "PercentageCircle", "PercentageSquare", "Personalcard", "Pet", "Pharagraphspacing", "Photoshop", "PictureFrame", "Play", "PlayAdd", "PlayCircle", "PlayCricle", "PlayRemove", "PolkadotDot", "PolygonMatic", "PolyswarmNct", "PresentionChart", "Previous", "Printer", "PrinterSlash", "Profile", "Profile2user", "ProfileAdd", "ProfileCircle", "ProfileDelete", "ProfileRemove", "ProfileTick", "ProgrammingArrow", "ProgrammingArrows", "Python", "QuantQnt", "QuoteDown", "QuoteDownCircle", "QuoteDownSquare", "QuoteUp", "QuoteUpCircle", "QuoteUpSquare", "Radar", "Radar1", "Radar2", "Radio", "Ram", "Ram2", "Ranking", "Ranking1", "Receipt", "Receipt1", "Receipt2", "Receipt21", "ReceiptAdd", "ReceiptDiscount", "ReceiptDisscount", "ReceiptEdit", "ReceiptItem", "ReceiptMinus", "ReceiptSearch", "ReceiptSquare", "ReceiptText", "Received", "ReceiveSquare", "ReceiveSquare2", "Record", "RecordCircle", "RecoveryConvert", "Redo", "Refresh", "Refresh2", "RefreshCircle", "RefreshLeftSquare", "RefreshRightSquare", "RefreshSquare2", "Repeat", "RepeatCircle", "RepeateMusic", "RepeateOne", "Reserve", "RotateLeft", "RotateLeftCopy", "RotateRight", "RotateRightCopy", "RouteSquare", "Routing", "Routing2", "RowHorizontal", "RowVertical", "Ruler", "RulerPen", "SafeHome", "Sagittarius", "Save2", "SaveAdd", "SaveMinus", "SaveRemove", "Scan", "ScanBarcode", "Scanner", "Scanning", "Scissor", "Scissor1", "ScissorCopy", "Screenmirroring", "Scroll", "SearchFavorite", "SearchFavorite1", "SearchNormal", "SearchNormal1", "SearchStatus", "SearchStatus1", "SearchZoomIn", "SearchZoomIn1", "SearchZoomOut", "SearchZoomOut1", "Security", "SecurityCard", "SecuritySafe", "SecurityTime", "SecurityUser", "Send", "Send2", "SendCopy", "SendSqaure2", "SendSquare", "Setting", "Setting2", "Setting3", "Setting4", "Setting5", "Settings", "Shapes", "Shapes1", "Shapes2", "Share", "Shield", "ShieldCross", "ShieldSearch", "ShieldSecurity", "ShieldSlash", "ShieldTick", "Ship", "Shop", "Shop2", "ShopAdd", "ShopCopy", "ShoppingBag", "ShoppingCart", "ShopRemove", "Shuffle", "SiacoinSc", "SidebarBottom", "SidebarLeft", "SidebarRight", "SidebarTop", "Signpost", "Simcard", "Simcard1", "Simcard2", "Size", "Slack", "Slash", "Slider", "SliderHorizontal", "SliderHorizontal1", "SliderVertical", "SliderVertical1", "Smallcaps", "SmartCar", "SmartHome", "Smileys", "Sms", "SmsEdit", "SmsNotification", "SmsSearch", "SmsStar", "SmsTracking", "Snapchat", "SolanaSol", "Sort", "Sound", "Speaker", "Speedometer", "Spotify", "StacksStx", "Star", "Star1", "StarSlash", "Status", "StatusUp", "StellarXlm", "Sticker", "Stickynote", "Stop", "StopCircle", "Story", "Strongbox", "Strongbox2", "Subtitle", "Sun", "Sun1", "SunFog", "Tag", "Tag2", "TagCross", "TagRight", "TagUser", "Task", "TaskSquare", "Teacher", "TenxPay", "TetherUsdt", "Text", "TextalignCenter", "TextalignJustifycenter", "TextalignJustifyleft", "TextalignJustifyright", "TextalignLeft", "TextalignRight", "TextBlock", "TextBold", "TextItalic", "TextUnderline", "TheGraphGrt", "ThetaTheta", "ThorchainRune", "TickCircle", "Ticket", "Ticket2", "TicketDiscount", "TicketExpired", "TicketStar", "TickSquare", "Timer", "Timer1", "TimerPause", "TimerStart", "ToggleOff", "ToggleOffCircle", "ToggleOn", "ToggleOnCircle", "Trade", "TransactionMinus", "Translate", "Trash", "Tree", "Trello", "TrendDown", "TrendUp", "Triangle", "TriangleCopy", "TrontronTrx", "Truck", "TruckFast", "TruckRemove", "TruckTick", "TruckTime", "TrushSquare", "Twitch", "Ui8", "Undo", "Unlimited", "Unlock", "UsdCoinUsdc", "User", "UserAdd", "UserCirlceAdd", "UserEdit", "UserMinus", "UserOctagon", "UserRemove", "UserSearch", "UserSquare", "UserTag", "UserTick", "VelasVlx", "Verify", "VibeVibe", "Video", "VideoAdd", "VideoCircle", "VideoHorizontal", "VideoOctagon", "VideoPlay", "VideoRemove", "VideoSlash", "VideoSquare", "VideoTick", "VideoTime", "VideoVertical", "VoiceCricle", "VoiceSquare", "Volume", "VolumeCross", "VolumeHigh", "VolumeLow", "VolumeLow1", "VolumeMute", "VolumeSlash", "VolumeUp", "Vuesax", "Wallet", "Wallet1", "Wallet2", "Wallet3", "WalletAdd", "WalletAdd1", "WalletCheck", "WalletMinus", "WalletMoney", "WalletRemove", "WalletSearch", "WanchainWan", "WanchainWan1", "Warning2", "Watch", "WatchStatus", "Weight", "Weight1", "WeightCopy", "Whatsapp", "Wifi", "WifiSquare", "Wind", "Wind2", "Windows", "WingWing", "Woman", "Xd", "Xiaomi", "XrpXrp", "Youtube", "ZelZel", "Zoom"] as const

type IconName = (typeof iconNames)[number]

const iconRegistry: IconRegistry<IconName> = {
  AaveAave: {
    bold: boldIcons.AaveAaveBold,
    broken: brokenIcons.AaveAaveBroken,
    bulk: bulkIcons.AaveAaveBulk,
    linear: linearIcons.AaveAaveLinear,
    outline: outlineIcons.AaveAaveOutline,
    twotone: twotoneIcons.AaveAaveTwoTone
  },
  Activity: {
    bold: boldIcons.ActivityBold,
    broken: brokenIcons.ActivityBroken,
    bulk: bulkIcons.ActivityBulk,
    linear: linearIcons.ActivityLinear,
    outline: outlineIcons.ActivityOutline,
    twotone: twotoneIcons.ActivityTwoTone
  },
  Add: {
    bold: boldIcons.AddBold,
    broken: brokenIcons.AddBroken,
    bulk: bulkIcons.AddBulk,
    linear: linearIcons.AddLinear,
    outline: outlineIcons.AddOutline,
    twotone: twotoneIcons.AddTwoTone
  },
  AddCircle: {
    bold: boldIcons.AddCircleBold,
    broken: brokenIcons.AddCircleBroken,
    bulk: bulkIcons.AddCircleBulk,
    linear: linearIcons.AddCircleLinear,
    outline: outlineIcons.AddCircleOutline,
    twotone: twotoneIcons.AddCircleTwoTone
  },
  Additem: {
    bold: boldIcons.AdditemBold,
    broken: brokenIcons.AdditemBroken,
    bulk: bulkIcons.AdditemBulk,
    linear: linearIcons.AdditemLinear,
    outline: outlineIcons.AdditemOutline,
    twotone: twotoneIcons.AdditemTwoTone
  },
  AddSquare: {
    bold: boldIcons.AddSquareBold,
    broken: brokenIcons.AddSquareBroken,
    bulk: bulkIcons.AddSquareBulk,
    linear: linearIcons.AddSquareLinear,
    outline: outlineIcons.AddSquareOutline,
    twotone: twotoneIcons.AddSquareTwoTone
  },
  Airdrop: {
    bold: boldIcons.AirdropBold,
    broken: brokenIcons.AirdropBroken,
    bulk: bulkIcons.AirdropBulk,
    linear: linearIcons.AirdropLinear,
    outline: outlineIcons.AirdropOutline,
    twotone: twotoneIcons.AirdropTwoTone
  },
  Airplane: {
    bold: boldIcons.AirplaneBold,
    broken: brokenIcons.AirplaneBroken,
    bulk: bulkIcons.AirplaneBulk,
    linear: linearIcons.AirplaneLinear,
    outline: outlineIcons.AirplaneOutline,
    twotone: twotoneIcons.AirplaneTwoTone
  },
  AirplaneSquare: {
    bold: boldIcons.AirplaneSquareBold,
    broken: brokenIcons.AirplaneSquareBroken,
    bulk: bulkIcons.AirplaneSquareBulk,
    linear: linearIcons.AirplaneSquareLinear,
    outline: outlineIcons.AirplaneSquareOutline,
    twotone: twotoneIcons.AirplaneSquareTwoTone
  },
  Airpod: {
    bold: boldIcons.AirpodBold,
    broken: brokenIcons.AirpodBroken,
    bulk: bulkIcons.AirpodBulk,
    linear: linearIcons.AirpodLinear,
    outline: outlineIcons.AirpodOutline,
    twotone: twotoneIcons.AirpodTwoTone
  },
  Airpods: {
    bold: boldIcons.AirpodsBold,
    broken: brokenIcons.AirpodsBroken,
    bulk: bulkIcons.AirpodsBulk,
    linear: linearIcons.AirpodsLinear,
    outline: outlineIcons.AirpodsOutline,
    twotone: twotoneIcons.AirpodsTwoTone
  },
  Alarm: {
    bold: boldIcons.AlarmBold,
    broken: brokenIcons.AlarmBroken,
    bulk: bulkIcons.AlarmBulk,
    linear: linearIcons.AlarmLinear,
    outline: outlineIcons.AlarmOutline,
    twotone: twotoneIcons.AlarmTwoTone
  },
  AlignBottom: {
    bold: boldIcons.AlignBottomBold,
    broken: brokenIcons.AlignBottomBroken,
    bulk: bulkIcons.AlignBottomBulk,
    linear: linearIcons.AlignBottomLinear,
    outline: outlineIcons.AlignBottomOutline,
    twotone: twotoneIcons.AlignBottomTwoTone
  },
  AlignHorizontally: {
    bold: boldIcons.AlignHorizontallyBold,
    broken: brokenIcons.AlignHorizontallyBroken,
    bulk: bulkIcons.AlignHorizontallyBulk,
    linear: linearIcons.AlignHorizontallyLinear,
    outline: outlineIcons.AlignHorizontallyOutline,
    twotone: twotoneIcons.AlignHorizontallyTwoTone
  },
  AlignLeft: {
    bold: boldIcons.AlignLeftBold,
    broken: brokenIcons.AlignLeftBroken,
    bulk: bulkIcons.AlignLeftBulk,
    linear: linearIcons.AlignLeftLinear,
    outline: outlineIcons.AlignLeftOutline,
    twotone: twotoneIcons.AlignLeftTwoTone
  },
  AlignRight: {
    bold: boldIcons.AlignRightBold,
    broken: brokenIcons.AlignRightBroken,
    bulk: bulkIcons.AlignRightBulk,
    linear: linearIcons.AlignRightLinear,
    outline: outlineIcons.AlignRightOutline,
    twotone: twotoneIcons.AlignRightTwoTone
  },
  AlignVertically: {
    bold: boldIcons.AlignVerticallyBold,
    broken: brokenIcons.AlignVerticallyBroken,
    bulk: bulkIcons.AlignVerticallyBulk,
    linear: linearIcons.AlignVerticallyLinear,
    outline: outlineIcons.AlignVerticallyOutline,
    twotone: twotoneIcons.AlignVerticallyTwoTone
  },
  Android: {
    bold: boldIcons.AndroidBold,
    broken: brokenIcons.AndroidBroken,
    bulk: bulkIcons.AndroidBulk,
    linear: linearIcons.AndroidLinear,
    outline: outlineIcons.AndroidOutline,
    twotone: twotoneIcons.AndroidTwoTone
  },
  AnkrAnkr: {
    bold: boldIcons.AnkrAnkrBold,
    broken: brokenIcons.AnkrAnkrBroken,
    bulk: bulkIcons.AnkrAnkrBulk,
    linear: linearIcons.AnkrAnkrLinear,
    outline: outlineIcons.AnkrAnkrOutline,
    twotone: twotoneIcons.AnkrAnkrTwoTone
  },
  Apple: {
    bold: boldIcons.AppleBold,
    broken: brokenIcons.AppleBroken,
    bulk: bulkIcons.AppleBulk,
    linear: linearIcons.AppleLinear,
    outline: outlineIcons.AppleOutline,
    twotone: twotoneIcons.AppleTwoTone
  },
  Aquarius: {
    bold: boldIcons.AquariusBold,
    broken: brokenIcons.AquariusBroken,
    bulk: bulkIcons.AquariusBulk,
    linear: linearIcons.AquariusLinear,
    outline: outlineIcons.AquariusOutline,
    twotone: twotoneIcons.AquariusTwoTone
  },
  Archive: {
    bold: boldIcons.ArchiveBold,
    broken: brokenIcons.ArchiveBroken,
    bulk: bulkIcons.ArchiveBulk,
    linear: linearIcons.ArchiveLinear,
    outline: outlineIcons.ArchiveOutline,
    twotone: twotoneIcons.ArchiveTwoTone
  },
  ArchiveAdd: {
    bold: boldIcons.ArchiveAddBold,
    broken: brokenIcons.ArchiveAddBroken,
    bulk: bulkIcons.ArchiveAddBulk,
    linear: linearIcons.ArchiveAddLinear,
    outline: outlineIcons.ArchiveAddOutline,
    twotone: twotoneIcons.ArchiveAddTwoTone
  },
  ArchiveBook: {
    bold: boldIcons.ArchiveBookBold,
    broken: brokenIcons.ArchiveBookBroken,
    bulk: bulkIcons.ArchiveBookBulk,
    linear: linearIcons.ArchiveBookLinear,
    outline: outlineIcons.ArchiveBookOutline,
    twotone: twotoneIcons.ArchiveBookTwoTone
  },
  ArchiveCopy: {
    bold: boldIcons.ArchiveCopyBold,
    broken: brokenIcons.ArchiveCopyBroken,
    bulk: bulkIcons.ArchiveCopyBulk,
    linear: linearIcons.ArchiveCopyLinear,
    outline: outlineIcons.ArchiveCopyOutline,
    twotone: twotoneIcons.ArchiveCopyTwoTone
  },
  ArchiveCopy2: {
    bold: boldIcons.ArchiveCopy2Bold,
    broken: brokenIcons.ArchiveCopy2Broken,
    bulk: bulkIcons.ArchiveCopy2Bulk,
    outline: outlineIcons.ArchiveCopy2Outline
  },
  ArchiveMinus: {
    bold: boldIcons.ArchiveMinusBold,
    broken: brokenIcons.ArchiveMinusBroken,
    bulk: bulkIcons.ArchiveMinusBulk,
    linear: linearIcons.ArchiveMinusLinear,
    outline: outlineIcons.ArchiveMinusOutline,
    twotone: twotoneIcons.ArchiveMinusTwoTone
  },
  ArchiveSlash: {
    bold: boldIcons.ArchiveSlashBold,
    broken: brokenIcons.ArchiveSlashBroken,
    bulk: bulkIcons.ArchiveSlashBulk,
    linear: linearIcons.ArchiveSlashLinear,
    outline: outlineIcons.ArchiveSlashOutline,
    twotone: twotoneIcons.ArchiveSlashTwoTone
  },
  ArchiveTick: {
    bold: boldIcons.ArchiveTickBold,
    broken: brokenIcons.ArchiveTickBroken,
    bulk: bulkIcons.ArchiveTickBulk,
    linear: linearIcons.ArchiveTickLinear,
    outline: outlineIcons.ArchiveTickOutline,
    twotone: twotoneIcons.ArchiveTickTwoTone
  },
  ArrangeCircle: {
    bold: boldIcons.ArrangeCircleBold,
    broken: brokenIcons.ArrangeCircleBroken,
    bulk: bulkIcons.ArrangeCircleBulk,
    linear: linearIcons.ArrangeCircleLinear,
    outline: outlineIcons.ArrangeCircleOutline,
    twotone: twotoneIcons.ArrangeCircleTwoTone
  },
  ArrangeCircle2: {
    bold: boldIcons.ArrangeCircle2Bold,
    broken: brokenIcons.ArrangeCircle2Broken,
    bulk: bulkIcons.ArrangeCircle2Bulk,
    linear: linearIcons.ArrangeCircle2Linear,
    outline: outlineIcons.ArrangeCircle2Outline,
    twotone: twotoneIcons.ArrangeCircle2TwoTone
  },
  ArrangeSquare: {
    bold: boldIcons.ArrangeSquareBold,
    broken: brokenIcons.ArrangeSquareBroken,
    bulk: bulkIcons.ArrangeSquareBulk,
    linear: linearIcons.ArrangeSquareLinear,
    outline: outlineIcons.ArrangeSquareOutline,
    twotone: twotoneIcons.ArrangeSquareTwoTone
  },
  ArrangeSquare2: {
    bold: boldIcons.ArrangeSquare2Bold,
    broken: brokenIcons.ArrangeSquare2Broken,
    bulk: bulkIcons.ArrangeSquare2Bulk,
    linear: linearIcons.ArrangeSquare2Linear,
    outline: outlineIcons.ArrangeSquare2Outline,
    twotone: twotoneIcons.ArrangeSquare2TwoTone
  },
  Arrow: {
    bold: boldIcons.ArrowBold,
    broken: brokenIcons.ArrowBroken,
    bulk: bulkIcons.ArrowBulk,
    linear: linearIcons.ArrowLinear,
    outline: outlineIcons.ArrowOutline,
    twotone: twotoneIcons.ArrowTwoTone
  },
  Arrow2: {
    bold: boldIcons.Arrow2Bold,
    broken: brokenIcons.Arrow2Broken,
    bulk: bulkIcons.Arrow2Bulk,
    linear: linearIcons.Arrow2Linear,
    outline: outlineIcons.Arrow2Outline,
    twotone: twotoneIcons.Arrow2TwoTone
  },
  Arrow3: {
    bold: boldIcons.Arrow3Bold,
    broken: brokenIcons.Arrow3Broken,
    bulk: bulkIcons.Arrow3Bulk,
    linear: linearIcons.Arrow3Linear,
    outline: outlineIcons.Arrow3Outline,
    twotone: twotoneIcons.Arrow3TwoTone
  },
  ArrowBottom: {
    bold: boldIcons.ArrowBottomBold,
    broken: brokenIcons.ArrowBottomBroken,
    bulk: bulkIcons.ArrowBottomBulk,
    linear: linearIcons.ArrowBottomLinear,
    outline: outlineIcons.ArrowBottomOutline,
    twotone: twotoneIcons.ArrowBottomTwoTone
  },
  ArrowCircleDown: {
    bold: boldIcons.ArrowCircleDownBold,
    broken: brokenIcons.ArrowCircleDownBroken,
    bulk: bulkIcons.ArrowCircleDownBulk,
    linear: linearIcons.ArrowCircleDownLinear,
    outline: outlineIcons.ArrowCircleDownOutline,
    twotone: twotoneIcons.ArrowCircleDownTwoTone
  },
  ArrowCircleLeft: {
    bold: boldIcons.ArrowCircleLeftBold,
    broken: brokenIcons.ArrowCircleLeftBroken,
    bulk: bulkIcons.ArrowCircleLeftBulk,
    linear: linearIcons.ArrowCircleLeftLinear,
    outline: outlineIcons.ArrowCircleLeftOutline,
    twotone: twotoneIcons.ArrowCircleLeftTwoTone
  },
  ArrowCircleRight: {
    bold: boldIcons.ArrowCircleRightBold,
    broken: brokenIcons.ArrowCircleRightBroken,
    bulk: bulkIcons.ArrowCircleRightBulk,
    linear: linearIcons.ArrowCircleRightLinear,
    outline: outlineIcons.ArrowCircleRightOutline,
    twotone: twotoneIcons.ArrowCircleRightTwoTone
  },
  ArrowCircleUp: {
    bold: boldIcons.ArrowCircleUpBold,
    broken: brokenIcons.ArrowCircleUpBroken,
    bulk: bulkIcons.ArrowCircleUpBulk,
    outline: outlineIcons.ArrowCircleUpOutline
  },
  ArrowDown: {
    bold: boldIcons.ArrowDownBold,
    broken: brokenIcons.ArrowDownBroken,
    bulk: bulkIcons.ArrowDownBulk,
    linear: linearIcons.ArrowDownLinear,
    outline: outlineIcons.ArrowDownOutline,
    twotone: twotoneIcons.ArrowDownTwoTone
  },
  ArrowDown1: {
    bold: boldIcons.ArrowDown1Bold,
    broken: brokenIcons.ArrowDown1Broken,
    bulk: bulkIcons.ArrowDown1Bulk,
    linear: linearIcons.ArrowDown1Linear,
    outline: outlineIcons.ArrowDown1Outline,
    twotone: twotoneIcons.ArrowDown1TwoTone
  },
  ArrowDown2: {
    bold: boldIcons.ArrowDown2Bold,
    broken: brokenIcons.ArrowDown2Broken,
    bulk: bulkIcons.ArrowDown2Bulk,
    linear: linearIcons.ArrowDown2Linear,
    outline: outlineIcons.ArrowDown2Outline,
    twotone: twotoneIcons.ArrowDown2TwoTone
  },
  ArrowLeft: {
    bold: boldIcons.ArrowLeftBold,
    broken: brokenIcons.ArrowLeftBroken,
    bulk: bulkIcons.ArrowLeftBulk,
    linear: linearIcons.ArrowLeftLinear,
    outline: outlineIcons.ArrowLeftOutline,
    twotone: twotoneIcons.ArrowLeftTwoTone
  },
  ArrowLeft1: {
    bold: boldIcons.ArrowLeft1Bold,
    broken: brokenIcons.ArrowLeft1Broken,
    bulk: bulkIcons.ArrowLeft1Bulk,
    linear: linearIcons.ArrowLeft1Linear,
    outline: outlineIcons.ArrowLeft1Outline,
    twotone: twotoneIcons.ArrowLeft1TwoTone
  },
  ArrowLeft2: {
    bold: boldIcons.ArrowLeft2Bold,
    broken: brokenIcons.ArrowLeft2Broken,
    bulk: bulkIcons.ArrowLeft2Bulk,
    linear: linearIcons.ArrowLeft2Linear,
    outline: outlineIcons.ArrowLeft2Outline,
    twotone: twotoneIcons.ArrowLeft2TwoTone
  },
  ArrowLeft3: {
    bold: boldIcons.ArrowLeft3Bold,
    broken: brokenIcons.ArrowLeft3Broken,
    bulk: bulkIcons.ArrowLeft3Bulk,
    linear: linearIcons.ArrowLeft3Linear,
    outline: outlineIcons.ArrowLeft3Outline,
    twotone: twotoneIcons.ArrowLeft3TwoTone
  },
  ArrowRight: {
    bold: boldIcons.ArrowRightBold,
    broken: brokenIcons.ArrowRightBroken,
    bulk: bulkIcons.ArrowRightBulk,
    linear: linearIcons.ArrowRightLinear,
    outline: outlineIcons.ArrowRightOutline,
    twotone: twotoneIcons.ArrowRightTwoTone
  },
  ArrowRight1: {
    bold: boldIcons.ArrowRight1Bold,
    broken: brokenIcons.ArrowRight1Broken,
    bulk: bulkIcons.ArrowRight1Bulk,
    linear: linearIcons.ArrowRight1Linear,
    outline: outlineIcons.ArrowRight1Outline,
    twotone: twotoneIcons.ArrowRight1TwoTone
  },
  ArrowRight2: {
    bold: boldIcons.ArrowRight2Bold,
    broken: brokenIcons.ArrowRight2Broken,
    bulk: bulkIcons.ArrowRight2Bulk,
    linear: linearIcons.ArrowRight2Linear,
    outline: outlineIcons.ArrowRight2Outline,
    twotone: twotoneIcons.ArrowRight2TwoTone
  },
  ArrowRight3: {
    bold: boldIcons.ArrowRight3Bold,
    broken: brokenIcons.ArrowRight3Broken,
    bulk: bulkIcons.ArrowRight3Bulk,
    linear: linearIcons.ArrowRight3Linear,
    outline: outlineIcons.ArrowRight3Outline,
    twotone: twotoneIcons.ArrowRight3TwoTone
  },
  ArrowRight4: {
    outline: outlineIcons.ArrowRight4Outline
  },
  ArrowSquare: {
    bold: boldIcons.ArrowSquareBold,
    broken: brokenIcons.ArrowSquareBroken,
    bulk: bulkIcons.ArrowSquareBulk,
    linear: linearIcons.ArrowSquareLinear,
    outline: outlineIcons.ArrowSquareOutline,
    twotone: twotoneIcons.ArrowSquareTwoTone
  },
  ArrowSquareDown: {
    bold: boldIcons.ArrowSquareDownBold,
    broken: brokenIcons.ArrowSquareDownBroken,
    bulk: bulkIcons.ArrowSquareDownBulk,
    linear: linearIcons.ArrowSquareDownLinear,
    outline: outlineIcons.ArrowSquareDownOutline,
    twotone: twotoneIcons.ArrowSquareDownTwoTone
  },
  ArrowSquareLeft: {
    bold: boldIcons.ArrowSquareLeftBold,
    broken: brokenIcons.ArrowSquareLeftBroken,
    bulk: bulkIcons.ArrowSquareLeftBulk,
    linear: linearIcons.ArrowSquareLeftLinear,
    outline: outlineIcons.ArrowSquareLeftOutline,
    twotone: twotoneIcons.ArrowSquareLeftTwoTone
  },
  ArrowSquareRight: {
    bold: boldIcons.ArrowSquareRightBold,
    broken: brokenIcons.ArrowSquareRightBroken,
    bulk: bulkIcons.ArrowSquareRightBulk,
    linear: linearIcons.ArrowSquareRightLinear,
    twotone: twotoneIcons.ArrowSquareRightTwoTone
  },
  ArrowSquareUp: {
    bold: boldIcons.ArrowSquareUpBold,
    broken: brokenIcons.ArrowSquareUpBroken,
    bulk: bulkIcons.ArrowSquareUpBulk,
    linear: linearIcons.ArrowSquareUpLinear,
    outline: outlineIcons.ArrowSquareUpOutline,
    twotone: twotoneIcons.ArrowSquareUpTwoTone
  },
  ArrowSwap: {
    bold: boldIcons.ArrowSwapBold,
    broken: brokenIcons.ArrowSwapBroken,
    bulk: bulkIcons.ArrowSwapBulk,
    outline: outlineIcons.ArrowSwapOutline
  },
  ArrowSwapHorizontal: {
    bold: boldIcons.ArrowSwapHorizontalBold,
    broken: brokenIcons.ArrowSwapHorizontalBroken,
    bulk: bulkIcons.ArrowSwapHorizontalBulk,
    linear: linearIcons.ArrowSwapHorizontalLinear,
    outline: outlineIcons.ArrowSwapHorizontalOutline,
    twotone: twotoneIcons.ArrowSwapHorizontalTwoTone
  },
  ArrowUp: {
    bold: boldIcons.ArrowUpBold,
    broken: brokenIcons.ArrowUpBroken,
    bulk: bulkIcons.ArrowUpBulk,
    linear: linearIcons.ArrowUpLinear,
    outline: outlineIcons.ArrowUpOutline,
    twotone: twotoneIcons.ArrowUpTwoTone
  },
  ArrowUp1: {
    bold: boldIcons.ArrowUp1Bold,
    broken: brokenIcons.ArrowUp1Broken,
    bulk: bulkIcons.ArrowUp1Bulk,
    linear: linearIcons.ArrowUp1Linear,
    outline: outlineIcons.ArrowUp1Outline,
    twotone: twotoneIcons.ArrowUp1TwoTone
  },
  ArrowUp2: {
    bold: boldIcons.ArrowUp2Bold,
    broken: brokenIcons.ArrowUp2Broken,
    bulk: bulkIcons.ArrowUp2Bulk,
    linear: linearIcons.ArrowUp2Linear,
    outline: outlineIcons.ArrowUp2Outline,
    twotone: twotoneIcons.ArrowUp2TwoTone
  },
  ArrowUp3: {
    bold: boldIcons.ArrowUp3Bold,
    broken: brokenIcons.ArrowUp3Broken,
    bulk: bulkIcons.ArrowUp3Bulk,
    linear: linearIcons.ArrowUp3Linear,
    outline: outlineIcons.ArrowUp3Outline,
    twotone: twotoneIcons.ArrowUp3TwoTone
  },
  AttachCircle: {
    bold: boldIcons.AttachCircleBold,
    broken: brokenIcons.AttachCircleBroken,
    bulk: bulkIcons.AttachCircleBulk,
    linear: linearIcons.AttachCircleLinear,
    outline: outlineIcons.AttachCircleOutline,
    twotone: twotoneIcons.AttachCircleTwoTone
  },
  AttachSquare: {
    bold: boldIcons.AttachSquareBold,
    broken: brokenIcons.AttachSquareBroken,
    bulk: bulkIcons.AttachSquareBulk,
    linear: linearIcons.AttachSquareLinear,
    outline: outlineIcons.AttachSquareOutline,
    twotone: twotoneIcons.AttachSquareTwoTone
  },
  AudioSquare: {
    bold: boldIcons.AudioSquareBold,
    broken: brokenIcons.AudioSquareBroken,
    bulk: bulkIcons.AudioSquareBulk,
    linear: linearIcons.AudioSquareLinear,
    outline: outlineIcons.AudioSquareOutline,
    twotone: twotoneIcons.AudioSquareTwoTone
  },
  AugurRep: {
    bold: boldIcons.AugurRepBold,
    broken: brokenIcons.AugurRepBroken,
    bulk: bulkIcons.AugurRepBulk,
    linear: linearIcons.AugurRepLinear,
    outline: outlineIcons.AugurRepOutline,
    twotone: twotoneIcons.AugurRepTwoTone
  },
  Autobrightness: {
    bold: boldIcons.AutobrightnessBold,
    broken: brokenIcons.AutobrightnessBroken,
    bulk: bulkIcons.AutobrightnessBulk,
    linear: linearIcons.AutobrightnessLinear,
    outline: outlineIcons.AutobrightnessOutline,
    twotone: twotoneIcons.AutobrightnessTwoTone
  },
  AutonioNiox: {
    bold: boldIcons.AutonioNioxBold,
    broken: brokenIcons.AutonioNioxBroken,
    bulk: bulkIcons.AutonioNioxBulk,
    linear: linearIcons.AutonioNioxLinear,
    outline: outlineIcons.AutonioNioxOutline,
    twotone: twotoneIcons.AutonioNioxTwoTone
  },
  AvalancheAvax: {
    bold: boldIcons.AvalancheAvaxBold,
    broken: brokenIcons.AvalancheAvaxBroken,
    bulk: bulkIcons.AvalancheAvaxBulk,
    linear: linearIcons.AvalancheAvaxLinear,
    outline: outlineIcons.AvalancheAvaxOutline,
    twotone: twotoneIcons.AvalancheAvaxTwoTone
  },
  Award: {
    bold: boldIcons.AwardBold,
    broken: brokenIcons.AwardBroken,
    bulk: bulkIcons.AwardBulk,
    linear: linearIcons.AwardLinear,
    outline: outlineIcons.AwardOutline,
    twotone: twotoneIcons.AwardTwoTone
  },
  BackSquare: {
    bold: boldIcons.BackSquareBold,
    broken: brokenIcons.BackSquareBroken,
    bulk: bulkIcons.BackSquareBulk,
    linear: linearIcons.BackSquareLinear,
    outline: outlineIcons.BackSquareOutline,
    twotone: twotoneIcons.BackSquareTwoTone
  },
  Backward: {
    bold: boldIcons.BackwardBold,
    broken: brokenIcons.BackwardBroken,
    bulk: bulkIcons.BackwardBulk,
    linear: linearIcons.BackwardLinear,
    outline: outlineIcons.BackwardOutline,
    twotone: twotoneIcons.BackwardTwoTone
  },
  Backward10Seconds: {
    bold: boldIcons.Backward10SecondsBold,
    broken: brokenIcons.Backward10SecondsBroken,
    bulk: bulkIcons.Backward10SecondsBulk,
    linear: linearIcons.Backward10SecondsLinear,
    outline: outlineIcons.Backward10SecondsOutline,
    twotone: twotoneIcons.Backward10SecondsTwoTone
  },
  Backward15Seconds: {
    bold: boldIcons.Backward15SecondsBold,
    broken: brokenIcons.Backward15SecondsBroken,
    bulk: bulkIcons.Backward15SecondsBulk,
    linear: linearIcons.Backward15SecondsLinear,
    outline: outlineIcons.Backward15SecondsOutline,
    twotone: twotoneIcons.Backward15SecondsTwoTone
  },
  Backward5Seconds: {
    bold: boldIcons.Backward5SecondsBold,
    broken: brokenIcons.Backward5SecondsBroken,
    bulk: bulkIcons.Backward5SecondsBulk,
    linear: linearIcons.Backward5SecondsLinear,
    outline: outlineIcons.Backward5SecondsOutline,
    twotone: twotoneIcons.Backward5SecondsTwoTone
  },
  BackwardItem: {
    bold: boldIcons.BackwardItemBold,
    broken: brokenIcons.BackwardItemBroken,
    bulk: bulkIcons.BackwardItemBulk,
    linear: linearIcons.BackwardItemLinear,
    outline: outlineIcons.BackwardItemOutline,
    twotone: twotoneIcons.BackwardItemTwoTone
  },
  BackwardItem1: {
    linear: linearIcons.BackwardItem1Linear
  },
  Bag: {
    bold: boldIcons.BagBold,
    broken: brokenIcons.BagBroken,
    bulk: bulkIcons.BagBulk,
    linear: linearIcons.BagLinear,
    outline: outlineIcons.BagOutline,
    twotone: twotoneIcons.BagTwoTone
  },
  Bag2: {
    bold: boldIcons.Bag2Bold,
    broken: brokenIcons.Bag2Broken,
    bulk: bulkIcons.Bag2Bulk,
    linear: linearIcons.Bag2Linear,
    outline: outlineIcons.Bag2Outline,
    twotone: twotoneIcons.Bag2TwoTone
  },
  BagCross: {
    bold: boldIcons.BagCrossBold,
    broken: brokenIcons.BagCrossBroken,
    bulk: bulkIcons.BagCrossBulk,
    linear: linearIcons.BagCrossLinear,
    outline: outlineIcons.BagCrossOutline,
    twotone: twotoneIcons.BagCrossTwoTone
  },
  BagCross1: {
    bold: boldIcons.BagCross1Bold,
    broken: brokenIcons.BagCross1Broken,
    bulk: bulkIcons.BagCross1Bulk,
    linear: linearIcons.BagCross1Linear,
    outline: outlineIcons.BagCross1Outline,
    twotone: twotoneIcons.BagCross1TwoTone
  },
  BagHappy: {
    bold: boldIcons.BagHappyBold,
    broken: brokenIcons.BagHappyBroken,
    bulk: bulkIcons.BagHappyBulk,
    linear: linearIcons.BagHappyLinear,
    outline: outlineIcons.BagHappyOutline,
    twotone: twotoneIcons.BagHappyTwoTone
  },
  BagTick: {
    bold: boldIcons.BagTickBold,
    broken: brokenIcons.BagTickBroken,
    bulk: bulkIcons.BagTickBulk,
    linear: linearIcons.BagTickLinear,
    outline: outlineIcons.BagTickOutline,
    twotone: twotoneIcons.BagTickTwoTone
  },
  BagTick2: {
    bold: boldIcons.BagTick2Bold,
    broken: brokenIcons.BagTick2Broken,
    bulk: bulkIcons.BagTick2Bulk,
    linear: linearIcons.BagTick2Linear,
    outline: outlineIcons.BagTick2Outline,
    twotone: twotoneIcons.BagTick2TwoTone
  },
  BagTimer: {
    bold: boldIcons.BagTimerBold,
    broken: brokenIcons.BagTimerBroken,
    bulk: bulkIcons.BagTimerBulk,
    linear: linearIcons.BagTimerLinear,
    outline: outlineIcons.BagTimerOutline,
    twotone: twotoneIcons.BagTimerTwoTone
  },
  Bank: {
    bold: boldIcons.BankBold,
    broken: brokenIcons.BankBroken,
    bulk: bulkIcons.BankBulk,
    linear: linearIcons.BankLinear,
    outline: outlineIcons.BankOutline,
    twotone: twotoneIcons.BankTwoTone
  },
  Barcode: {
    bold: boldIcons.BarcodeBold,
    broken: brokenIcons.BarcodeBroken,
    bulk: bulkIcons.BarcodeBulk,
    linear: linearIcons.BarcodeLinear,
    outline: outlineIcons.BarcodeOutline,
    twotone: twotoneIcons.BarcodeTwoTone
  },
  BatteryCharging: {
    bold: boldIcons.BatteryChargingBold,
    broken: brokenIcons.BatteryChargingBroken,
    bulk: bulkIcons.BatteryChargingBulk,
    linear: linearIcons.BatteryChargingLinear,
    outline: outlineIcons.BatteryChargingOutline,
    twotone: twotoneIcons.BatteryChargingTwoTone
  },
  BatteryDisable: {
    bold: boldIcons.BatteryDisableBold,
    broken: brokenIcons.BatteryDisableBroken,
    bulk: bulkIcons.BatteryDisableBulk,
    linear: linearIcons.BatteryDisableLinear,
    outline: outlineIcons.BatteryDisableOutline,
    twotone: twotoneIcons.BatteryDisableTwoTone
  },
  BatteryEmpty: {
    bold: boldIcons.BatteryEmptyBold,
    broken: brokenIcons.BatteryEmptyBroken,
    bulk: bulkIcons.BatteryEmptyBulk,
    linear: linearIcons.BatteryEmptyLinear,
    outline: outlineIcons.BatteryEmptyOutline,
    twotone: twotoneIcons.BatteryEmptyTwoTone
  },
  BatteryEmpty1: {
    bold: boldIcons.BatteryEmpty1Bold,
    broken: brokenIcons.BatteryEmpty1Broken,
    bulk: bulkIcons.BatteryEmpty1Bulk,
    linear: linearIcons.BatteryEmpty1Linear,
    outline: outlineIcons.BatteryEmpty1Outline,
    twotone: twotoneIcons.BatteryEmpty1TwoTone
  },
  BatteryFull: {
    bold: boldIcons.BatteryFullBold,
    broken: brokenIcons.BatteryFullBroken,
    bulk: bulkIcons.BatteryFullBulk,
    linear: linearIcons.BatteryFullLinear,
    outline: outlineIcons.BatteryFullOutline,
    twotone: twotoneIcons.BatteryFullTwoTone
  },
  Be: {
    bold: boldIcons.BeBold,
    broken: brokenIcons.BeBroken,
    bulk: bulkIcons.BeBulk,
    linear: linearIcons.BeLinear,
    outline: outlineIcons.BeOutline,
    twotone: twotoneIcons.BeTwoTone
  },
  Bezier: {
    bold: boldIcons.BezierBold,
    broken: brokenIcons.BezierBroken,
    bulk: bulkIcons.BezierBulk,
    linear: linearIcons.BezierLinear,
    outline: outlineIcons.BezierOutline,
    twotone: twotoneIcons.BezierTwoTone
  },
  Bezier1: {
    linear: linearIcons.Bezier1Linear
  },
  Bill: {
    bold: boldIcons.BillBold,
    broken: brokenIcons.BillBroken,
    bulk: bulkIcons.BillBulk,
    linear: linearIcons.BillLinear,
    outline: outlineIcons.BillOutline,
    twotone: twotoneIcons.BillTwoTone
  },
  BinanceCoinBnb: {
    bold: boldIcons.BinanceCoinBnbBold,
    broken: brokenIcons.BinanceCoinBnbBroken,
    bulk: bulkIcons.BinanceCoinBnbBulk,
    linear: linearIcons.BinanceCoinBnbLinear,
    outline: outlineIcons.BinanceCoinBnbOutline,
    twotone: twotoneIcons.BinanceCoinBnbTwoTone
  },
  BinanceUsdBusd: {
    bold: boldIcons.BinanceUsdBusdBold,
    broken: brokenIcons.BinanceUsdBusdBroken,
    bulk: bulkIcons.BinanceUsdBusdBulk,
    linear: linearIcons.BinanceUsdBusdLinear,
    outline: outlineIcons.BinanceUsdBusdOutline,
    twotone: twotoneIcons.BinanceUsdBusdTwoTone
  },
  BitcoinBtc: {
    bold: boldIcons.BitcoinBtcBold,
    broken: brokenIcons.BitcoinBtcBroken,
    bulk: bulkIcons.BitcoinBtcBulk,
    linear: linearIcons.BitcoinBtcLinear,
    outline: outlineIcons.BitcoinBtcOutline,
    twotone: twotoneIcons.BitcoinBtcTwoTone
  },
  BitcoinCard: {
    bold: boldIcons.BitcoinCardBold,
    broken: brokenIcons.BitcoinCardBroken,
    bulk: bulkIcons.BitcoinCardBulk,
    linear: linearIcons.BitcoinCardLinear,
    outline: outlineIcons.BitcoinCardOutline,
    twotone: twotoneIcons.BitcoinCardTwoTone
  },
  BitcoinConvert: {
    bold: boldIcons.BitcoinConvertBold,
    broken: brokenIcons.BitcoinConvertBroken,
    bulk: bulkIcons.BitcoinConvertBulk,
    linear: linearIcons.BitcoinConvertLinear,
    outline: outlineIcons.BitcoinConvertOutline,
    twotone: twotoneIcons.BitcoinConvertTwoTone
  },
  BitcoinRefresh: {
    bold: boldIcons.BitcoinRefreshBold,
    broken: brokenIcons.BitcoinRefreshBroken,
    bulk: bulkIcons.BitcoinRefreshBulk,
    linear: linearIcons.BitcoinRefreshLinear,
    outline: outlineIcons.BitcoinRefreshOutline,
    twotone: twotoneIcons.BitcoinRefreshTwoTone
  },
  Blend: {
    bold: boldIcons.BlendBold,
    broken: brokenIcons.BlendBroken,
    bulk: bulkIcons.BlendBulk,
    linear: linearIcons.BlendLinear,
    outline: outlineIcons.BlendOutline,
    twotone: twotoneIcons.BlendTwoTone
  },
  Blend2: {
    bold: boldIcons.Blend2Bold,
    broken: brokenIcons.Blend2Broken,
    bulk: bulkIcons.Blend2Bulk,
    linear: linearIcons.Blend2Linear,
    outline: outlineIcons.Blend2Outline,
    twotone: twotoneIcons.Blend2TwoTone
  },
  Blogger: {
    bold: boldIcons.BloggerBold,
    broken: brokenIcons.BloggerBroken,
    bulk: bulkIcons.BloggerBulk,
    linear: linearIcons.BloggerLinear,
    outline: outlineIcons.BloggerOutline,
    twotone: twotoneIcons.BloggerTwoTone
  },
  Bluetooth: {
    bold: boldIcons.BluetoothBold,
    broken: brokenIcons.BluetoothBroken,
    bulk: bulkIcons.BluetoothBulk,
    linear: linearIcons.BluetoothLinear,
    outline: outlineIcons.BluetoothOutline,
    twotone: twotoneIcons.BluetoothTwoTone
  },
  Bluetooth2: {
    bold: boldIcons.Bluetooth2Bold,
    broken: brokenIcons.Bluetooth2Broken,
    bulk: bulkIcons.Bluetooth2Bulk,
    linear: linearIcons.Bluetooth2Linear,
    outline: outlineIcons.Bluetooth2Outline,
    twotone: twotoneIcons.Bluetooth2TwoTone
  },
  BluetoothCircle: {
    bold: boldIcons.BluetoothCircleBold,
    broken: brokenIcons.BluetoothCircleBroken,
    bulk: bulkIcons.BluetoothCircleBulk,
    linear: linearIcons.BluetoothCircleLinear,
    outline: outlineIcons.BluetoothCircleOutline,
    twotone: twotoneIcons.BluetoothCircleTwoTone
  },
  BluetoothRectangle: {
    bold: boldIcons.BluetoothRectangleBold,
    broken: brokenIcons.BluetoothRectangleBroken,
    bulk: bulkIcons.BluetoothRectangleBulk,
    linear: linearIcons.BluetoothRectangleLinear,
    outline: outlineIcons.BluetoothRectangleOutline,
    twotone: twotoneIcons.BluetoothRectangleTwoTone
  },
  Blur: {
    bold: boldIcons.BlurBold,
    broken: brokenIcons.BlurBroken,
    bulk: bulkIcons.BlurBulk,
    linear: linearIcons.BlurLinear,
    outline: outlineIcons.BlurOutline,
    twotone: twotoneIcons.BlurTwoTone
  },
  Blur1: {
    linear: linearIcons.Blur1Linear
  },
  Book: {
    bold: boldIcons.BookBold,
    broken: brokenIcons.BookBroken,
    bulk: bulkIcons.BookBulk,
    linear: linearIcons.BookLinear,
    outline: outlineIcons.BookOutline,
    twotone: twotoneIcons.BookTwoTone
  },
  Book1: {
    bold: boldIcons.Book1Bold,
    broken: brokenIcons.Book1Broken,
    bulk: bulkIcons.Book1Bulk,
    linear: linearIcons.Book1Linear,
    outline: outlineIcons.Book1Outline,
    twotone: twotoneIcons.Book1TwoTone
  },
  Bookmark: {
    bold: boldIcons.BookmarkBold,
    broken: brokenIcons.BookmarkBroken,
    bulk: bulkIcons.BookmarkBulk,
    linear: linearIcons.BookmarkLinear,
    outline: outlineIcons.BookmarkOutline,
    twotone: twotoneIcons.BookmarkTwoTone
  },
  Bookmark2: {
    bold: boldIcons.Bookmark2Bold,
    broken: brokenIcons.Bookmark2Broken,
    bulk: bulkIcons.Bookmark2Bulk,
    linear: linearIcons.Bookmark2Linear,
    outline: outlineIcons.Bookmark2Outline,
    twotone: twotoneIcons.Bookmark2TwoTone
  },
  BookSaved: {
    bold: boldIcons.BookSavedBold,
    broken: brokenIcons.BookSavedBroken,
    bulk: bulkIcons.BookSavedBulk,
    linear: linearIcons.BookSavedLinear,
    outline: outlineIcons.BookSavedOutline,
    twotone: twotoneIcons.BookSavedTwoTone
  },
  BookSquare: {
    bold: boldIcons.BookSquareBold,
    broken: brokenIcons.BookSquareBroken,
    bulk: bulkIcons.BookSquareBulk,
    linear: linearIcons.BookSquareLinear,
    outline: outlineIcons.BookSquareOutline,
    twotone: twotoneIcons.BookSquareTwoTone
  },
  Bootsrap: {
    bold: boldIcons.BootsrapBold,
    linear: linearIcons.BootsrapLinear,
    twotone: twotoneIcons.BootsrapTwoTone
  },
  Bootstrap: {
    broken: brokenIcons.BootstrapBroken,
    bulk: bulkIcons.BootstrapBulk,
    outline: outlineIcons.BootstrapOutline
  },
  Box: {
    bold: boldIcons.BoxBold,
    broken: brokenIcons.BoxBroken,
    bulk: bulkIcons.BoxBulk,
    linear: linearIcons.BoxLinear,
    outline: outlineIcons.BoxOutline,
    twotone: twotoneIcons.BoxTwoTone
  },
  Box1: {
    bold: boldIcons.Box1Bold,
    broken: brokenIcons.Box1Broken,
    bulk: bulkIcons.Box1Bulk,
    linear: linearIcons.Box1Linear,
    outline: outlineIcons.Box1Outline,
    twotone: twotoneIcons.Box1TwoTone
  },
  Box2: {
    bold: boldIcons.Box2Bold,
    broken: brokenIcons.Box2Broken,
    bulk: bulkIcons.Box2Bulk,
    linear: linearIcons.Box2Linear,
    outline: outlineIcons.Box2Outline,
    twotone: twotoneIcons.Box2TwoTone
  },
  BoxAdd: {
    bold: boldIcons.BoxAddBold,
    broken: brokenIcons.BoxAddBroken,
    bulk: bulkIcons.BoxAddBulk,
    linear: linearIcons.BoxAddLinear,
    outline: outlineIcons.BoxAddOutline,
    twotone: twotoneIcons.BoxAddTwoTone
  },
  BoxRemove: {
    bold: boldIcons.BoxRemoveBold,
    broken: brokenIcons.BoxRemoveBroken,
    bulk: bulkIcons.BoxRemoveBulk,
    linear: linearIcons.BoxRemoveLinear,
    outline: outlineIcons.BoxRemoveOutline,
    twotone: twotoneIcons.BoxRemoveTwoTone
  },
  BoxSearch: {
    bold: boldIcons.BoxSearchBold,
    broken: brokenIcons.BoxSearchBroken,
    bulk: bulkIcons.BoxSearchBulk,
    linear: linearIcons.BoxSearchLinear,
    outline: outlineIcons.BoxSearchOutline,
    twotone: twotoneIcons.BoxSearchTwoTone
  },
  BoxTick: {
    bold: boldIcons.BoxTickBold,
    broken: brokenIcons.BoxTickBroken,
    bulk: bulkIcons.BoxTickBulk,
    linear: linearIcons.BoxTickLinear,
    outline: outlineIcons.BoxTickOutline,
    twotone: twotoneIcons.BoxTickTwoTone
  },
  BoxTime: {
    bold: boldIcons.BoxTimeBold,
    broken: brokenIcons.BoxTimeBroken,
    bulk: bulkIcons.BoxTimeBulk,
    linear: linearIcons.BoxTimeLinear,
    outline: outlineIcons.BoxTimeOutline,
    twotone: twotoneIcons.BoxTimeTwoTone
  },
  Briefcase: {
    bold: boldIcons.BriefcaseBold,
    broken: brokenIcons.BriefcaseBroken,
    bulk: bulkIcons.BriefcaseBulk,
    linear: linearIcons.BriefcaseLinear,
    outline: outlineIcons.BriefcaseOutline,
    twotone: twotoneIcons.BriefcaseTwoTone
  },
  BrifecaseCross: {
    bold: boldIcons.BrifecaseCrossBold,
    broken: brokenIcons.BrifecaseCrossBroken,
    bulk: bulkIcons.BrifecaseCrossBulk,
    linear: linearIcons.BrifecaseCrossLinear,
    outline: outlineIcons.BrifecaseCrossOutline,
    twotone: twotoneIcons.BrifecaseCrossTwoTone
  },
  BrifecaseTick: {
    bold: boldIcons.BrifecaseTickBold,
    broken: brokenIcons.BrifecaseTickBroken,
    bulk: bulkIcons.BrifecaseTickBulk,
    linear: linearIcons.BrifecaseTickLinear,
    outline: outlineIcons.BrifecaseTickOutline,
    twotone: twotoneIcons.BrifecaseTickTwoTone
  },
  BrifecaseTimer: {
    bold: boldIcons.BrifecaseTimerBold,
    broken: brokenIcons.BrifecaseTimerBroken,
    bulk: bulkIcons.BrifecaseTimerBulk,
    linear: linearIcons.BrifecaseTimerLinear,
    outline: outlineIcons.BrifecaseTimerOutline,
    twotone: twotoneIcons.BrifecaseTimerTwoTone
  },
  Broom: {
    bold: boldIcons.BroomBold,
    broken: brokenIcons.BroomBroken,
    bulk: bulkIcons.BroomBulk,
    linear: linearIcons.BroomLinear,
    outline: outlineIcons.BroomOutline,
    twotone: twotoneIcons.BroomTwoTone
  },
  Brush: {
    bold: boldIcons.BrushBold,
    broken: brokenIcons.BrushBroken,
    bulk: bulkIcons.BrushBulk,
    linear: linearIcons.BrushLinear,
    outline: outlineIcons.BrushOutline,
    twotone: twotoneIcons.BrushTwoTone
  },
  Brush1: {
    bold: boldIcons.Brush1Bold,
    broken: brokenIcons.Brush1Broken,
    bulk: bulkIcons.Brush1Bulk,
    linear: linearIcons.Brush1Linear,
    outline: outlineIcons.Brush1Outline,
    twotone: twotoneIcons.Brush1TwoTone
  },
  Brush2: {
    bold: boldIcons.Brush2Bold,
    broken: brokenIcons.Brush2Broken,
    bulk: bulkIcons.Brush2Bulk,
    linear: linearIcons.Brush2Linear,
    outline: outlineIcons.Brush2Outline,
    twotone: twotoneIcons.Brush2TwoTone
  },
  Brush3: {
    bold: boldIcons.Brush3Bold,
    broken: brokenIcons.Brush3Broken,
    bulk: bulkIcons.Brush3Bulk,
    linear: linearIcons.Brush3Linear,
    outline: outlineIcons.Brush3Outline,
    twotone: twotoneIcons.Brush3TwoTone
  },
  Brush4: {
    bold: boldIcons.Brush4Bold,
    broken: brokenIcons.Brush4Broken,
    bulk: bulkIcons.Brush4Bulk,
    outline: outlineIcons.Brush4Outline,
    twotone: twotoneIcons.Brush4TwoTone
  },
  Bubble: {
    bold: boldIcons.BubbleBold,
    broken: brokenIcons.BubbleBroken,
    bulk: bulkIcons.BubbleBulk,
    linear: linearIcons.BubbleLinear,
    outline: outlineIcons.BubbleOutline,
    twotone: twotoneIcons.BubbleTwoTone
  },
  Bucket: {
    bold: boldIcons.BucketBold,
    broken: brokenIcons.BucketBroken,
    bulk: bulkIcons.BucketBulk,
    outline: outlineIcons.BucketOutline,
    twotone: twotoneIcons.BucketTwoTone
  },
  BucketCircle: {
    bold: boldIcons.BucketCircleBold,
    broken: brokenIcons.BucketCircleBroken,
    bulk: bulkIcons.BucketCircleBulk,
    linear: linearIcons.BucketCircleLinear,
    outline: outlineIcons.BucketCircleOutline,
    twotone: twotoneIcons.BucketCircleTwoTone
  },
  BucketCircle1: {
    linear: linearIcons.BucketCircle1Linear
  },
  BucketSquare: {
    bold: boldIcons.BucketSquareBold,
    broken: brokenIcons.BucketSquareBroken,
    bulk: bulkIcons.BucketSquareBulk,
    linear: linearIcons.BucketSquareLinear,
    outline: outlineIcons.BucketSquareOutline,
    twotone: twotoneIcons.BucketSquareTwoTone
  },
  BucketSquare1: {
    linear: linearIcons.BucketSquare1Linear
  },
  Building: {
    bold: boldIcons.BuildingBold,
    broken: brokenIcons.BuildingBroken,
    bulk: bulkIcons.BuildingBulk,
    linear: linearIcons.BuildingLinear,
    outline: outlineIcons.BuildingOutline,
    twotone: twotoneIcons.BuildingTwoTone
  },
  Building3: {
    bold: boldIcons.Building3Bold,
    broken: brokenIcons.Building3Broken,
    bulk: bulkIcons.Building3Bulk,
    linear: linearIcons.Building3Linear,
    outline: outlineIcons.Building3Outline,
    twotone: twotoneIcons.Building3TwoTone
  },
  Building4: {
    bold: boldIcons.Building4Bold,
    broken: brokenIcons.Building4Broken,
    bulk: bulkIcons.Building4Bulk,
    linear: linearIcons.Building4Linear,
    outline: outlineIcons.Building4Outline,
    twotone: twotoneIcons.Building4TwoTone
  },
  Buildings: {
    bold: boldIcons.BuildingsBold,
    broken: brokenIcons.BuildingsBroken,
    bulk: bulkIcons.BuildingsBulk,
    linear: linearIcons.BuildingsLinear,
    outline: outlineIcons.BuildingsOutline,
    twotone: twotoneIcons.BuildingsTwoTone
  },
  Buildings2: {
    bold: boldIcons.Buildings2Bold,
    broken: brokenIcons.Buildings2Broken,
    bulk: bulkIcons.Buildings2Bulk,
    linear: linearIcons.Buildings2Linear,
    outline: outlineIcons.Buildings2Outline,
    twotone: twotoneIcons.Buildings2TwoTone
  },
  Buliding: {
    bold: boldIcons.BulidingBold,
    broken: brokenIcons.BulidingBroken,
    bulk: bulkIcons.BulidingBulk,
    linear: linearIcons.BulidingLinear,
    outline: outlineIcons.BulidingOutline,
    twotone: twotoneIcons.BulidingTwoTone
  },
  Bus: {
    bold: boldIcons.BusBold,
    broken: brokenIcons.BusBroken,
    bulk: bulkIcons.BusBulk,
    linear: linearIcons.BusLinear,
    outline: outlineIcons.BusOutline,
    twotone: twotoneIcons.BusTwoTone
  },
  BuyCrypto: {
    bold: boldIcons.BuyCryptoBold,
    broken: brokenIcons.BuyCryptoBroken,
    bulk: bulkIcons.BuyCryptoBulk,
    linear: linearIcons.BuyCryptoLinear,
    outline: outlineIcons.BuyCryptoOutline,
    twotone: twotoneIcons.BuyCryptoTwoTone
  },
  Cake: {
    bold: boldIcons.CakeBold,
    broken: brokenIcons.CakeBroken,
    bulk: bulkIcons.CakeBulk,
    linear: linearIcons.CakeLinear,
    outline: outlineIcons.CakeOutline,
    twotone: twotoneIcons.CakeTwoTone
  },
  Calculator: {
    bold: boldIcons.CalculatorBold,
    broken: brokenIcons.CalculatorBroken,
    linear: linearIcons.CalculatorLinear,
    outline: outlineIcons.CalculatorOutline,
    twotone: twotoneIcons.CalculatorTwoTone
  },
  Calendar: {
    bold: boldIcons.CalendarBold,
    broken: brokenIcons.CalendarBroken,
    bulk: bulkIcons.CalendarBulk,
    linear: linearIcons.CalendarLinear,
    outline: outlineIcons.CalendarOutline,
    twotone: twotoneIcons.CalendarTwoTone
  },
  Calendar1: {
    bold: boldIcons.Calendar1Bold,
    broken: brokenIcons.Calendar1Broken,
    bulk: bulkIcons.Calendar1Bulk,
    linear: linearIcons.Calendar1Linear,
    outline: outlineIcons.Calendar1Outline,
    twotone: twotoneIcons.Calendar1TwoTone
  },
  Calendar2: {
    bold: boldIcons.Calendar2Bold,
    broken: brokenIcons.Calendar2Broken,
    bulk: bulkIcons.Calendar2Bulk,
    linear: linearIcons.Calendar2Linear,
    outline: outlineIcons.Calendar2Outline,
    twotone: twotoneIcons.Calendar2TwoTone
  },
  CalendarAdd: {
    bold: boldIcons.CalendarAddBold,
    broken: brokenIcons.CalendarAddBroken,
    bulk: bulkIcons.CalendarAddBulk,
    linear: linearIcons.CalendarAddLinear,
    outline: outlineIcons.CalendarAddOutline,
    twotone: twotoneIcons.CalendarAddTwoTone
  },
  CalendarCircle: {
    bold: boldIcons.CalendarCircleBold,
    broken: brokenIcons.CalendarCircleBroken,
    bulk: bulkIcons.CalendarCircleBulk,
    linear: linearIcons.CalendarCircleLinear,
    outline: outlineIcons.CalendarCircleOutline,
    twotone: twotoneIcons.CalendarCircleTwoTone
  },
  CalendarEdit: {
    bold: boldIcons.CalendarEditBold,
    broken: brokenIcons.CalendarEditBroken,
    bulk: bulkIcons.CalendarEditBulk,
    linear: linearIcons.CalendarEditLinear,
    outline: outlineIcons.CalendarEditOutline,
    twotone: twotoneIcons.CalendarEditTwoTone
  },
  CalendarRemove: {
    bold: boldIcons.CalendarRemoveBold,
    broken: brokenIcons.CalendarRemoveBroken,
    bulk: bulkIcons.CalendarRemoveBulk,
    linear: linearIcons.CalendarRemoveLinear,
    outline: outlineIcons.CalendarRemoveOutline,
    twotone: twotoneIcons.CalendarRemoveTwoTone
  },
  CalendarSearch: {
    bold: boldIcons.CalendarSearchBold,
    broken: brokenIcons.CalendarSearchBroken,
    bulk: bulkIcons.CalendarSearchBulk,
    linear: linearIcons.CalendarSearchLinear,
    outline: outlineIcons.CalendarSearchOutline,
    twotone: twotoneIcons.CalendarSearchTwoTone
  },
  CalendarTick: {
    bold: boldIcons.CalendarTickBold,
    broken: brokenIcons.CalendarTickBroken,
    bulk: bulkIcons.CalendarTickBulk,
    linear: linearIcons.CalendarTickLinear,
    outline: outlineIcons.CalendarTickOutline,
    twotone: twotoneIcons.CalendarTickTwoTone
  },
  Call: {
    bold: boldIcons.CallBold,
    broken: brokenIcons.CallBroken,
    bulk: bulkIcons.CallBulk,
    linear: linearIcons.CallLinear,
    outline: outlineIcons.CallOutline,
    twotone: twotoneIcons.CallTwoTone
  },
  CallAdd: {
    bold: boldIcons.CallAddBold,
    broken: brokenIcons.CallAddBroken,
    bulk: bulkIcons.CallAddBulk,
    linear: linearIcons.CallAddLinear,
    outline: outlineIcons.CallAddOutline,
    twotone: twotoneIcons.CallAddTwoTone
  },
  CallCalling: {
    bold: boldIcons.CallCallingBold,
    broken: brokenIcons.CallCallingBroken,
    bulk: bulkIcons.CallCallingBulk,
    linear: linearIcons.CallCallingLinear,
    outline: outlineIcons.CallCallingOutline,
    twotone: twotoneIcons.CallCallingTwoTone
  },
  CallIncoming: {
    bold: boldIcons.CallIncomingBold,
    broken: brokenIcons.CallIncomingBroken,
    bulk: bulkIcons.CallIncomingBulk,
    linear: linearIcons.CallIncomingLinear,
    outline: outlineIcons.CallIncomingOutline,
    twotone: twotoneIcons.CallIncomingTwoTone
  },
  CallMinus: {
    bold: boldIcons.CallMinusBold,
    broken: brokenIcons.CallMinusBroken,
    bulk: bulkIcons.CallMinusBulk,
    linear: linearIcons.CallMinusLinear,
    outline: outlineIcons.CallMinusOutline,
    twotone: twotoneIcons.CallMinusTwoTone
  },
  CallOutgoing: {
    bold: boldIcons.CallOutgoingBold,
    broken: brokenIcons.CallOutgoingBroken,
    bulk: bulkIcons.CallOutgoingBulk,
    linear: linearIcons.CallOutgoingLinear,
    outline: outlineIcons.CallOutgoingOutline,
    twotone: twotoneIcons.CallOutgoingTwoTone
  },
  CallReceived: {
    bold: boldIcons.CallReceivedBold,
    broken: brokenIcons.CallReceivedBroken,
    bulk: bulkIcons.CallReceivedBulk,
    linear: linearIcons.CallReceivedLinear,
    outline: outlineIcons.CallReceivedOutline,
    twotone: twotoneIcons.CallReceivedTwoTone
  },
  CallRemove: {
    bold: boldIcons.CallRemoveBold,
    broken: brokenIcons.CallRemoveBroken,
    bulk: bulkIcons.CallRemoveBulk,
    linear: linearIcons.CallRemoveLinear,
    outline: outlineIcons.CallRemoveOutline,
    twotone: twotoneIcons.CallRemoveTwoTone
  },
  CallSlash: {
    bold: boldIcons.CallSlashBold,
    broken: brokenIcons.CallSlashBroken,
    bulk: bulkIcons.CallSlashBulk,
    linear: linearIcons.CallSlashLinear,
    outline: outlineIcons.CallSlashOutline,
    twotone: twotoneIcons.CallSlashTwoTone
  },
  Camera: {
    bold: boldIcons.CameraBold,
    broken: brokenIcons.CameraBroken,
    bulk: bulkIcons.CameraBulk,
    linear: linearIcons.CameraLinear,
    outline: outlineIcons.CameraOutline,
    twotone: twotoneIcons.CameraTwoTone
  },
  CameraSlash: {
    bold: boldIcons.CameraSlashBold,
    broken: brokenIcons.CameraSlashBroken,
    bulk: bulkIcons.CameraSlashBulk,
    linear: linearIcons.CameraSlashLinear,
    outline: outlineIcons.CameraSlashOutline,
    twotone: twotoneIcons.CameraSlashTwoTone
  },
  Candle: {
    bold: boldIcons.CandleBold,
    broken: brokenIcons.CandleBroken,
    bulk: bulkIcons.CandleBulk,
    linear: linearIcons.CandleLinear,
    outline: outlineIcons.CandleOutline,
    twotone: twotoneIcons.CandleTwoTone
  },
  Candle2: {
    bold: boldIcons.Candle2Bold,
    broken: brokenIcons.Candle2Broken,
    bulk: bulkIcons.Candle2Bulk,
    linear: linearIcons.Candle2Linear,
    outline: outlineIcons.Candle2Outline,
    twotone: twotoneIcons.Candle2TwoTone
  },
  Car: {
    bold: boldIcons.CarBold,
    broken: brokenIcons.CarBroken,
    bulk: bulkIcons.CarBulk,
    linear: linearIcons.CarLinear,
    outline: outlineIcons.CarOutline,
    twotone: twotoneIcons.CarTwoTone
  },
  Card: {
    bold: boldIcons.CardBold,
    broken: brokenIcons.CardBroken,
    bulk: bulkIcons.CardBulk,
    linear: linearIcons.CardLinear,
    outline: outlineIcons.CardOutline,
    twotone: twotoneIcons.CardTwoTone
  },
  CardAdd: {
    bold: boldIcons.CardAddBold,
    broken: brokenIcons.CardAddBroken,
    bulk: bulkIcons.CardAddBulk,
    linear: linearIcons.CardAddLinear,
    outline: outlineIcons.CardAddOutline,
    twotone: twotoneIcons.CardAddTwoTone
  },
  CardanoAda: {
    bold: boldIcons.CardanoAdaBold,
    broken: brokenIcons.CardanoAdaBroken,
    bulk: bulkIcons.CardanoAdaBulk,
    linear: linearIcons.CardanoAdaLinear,
    outline: outlineIcons.CardanoAdaOutline,
    twotone: twotoneIcons.CardanoAdaTwoTone
  },
  CardCoin: {
    bold: boldIcons.CardCoinBold,
    broken: brokenIcons.CardCoinBroken,
    bulk: bulkIcons.CardCoinBulk,
    linear: linearIcons.CardCoinLinear,
    outline: outlineIcons.CardCoinOutline,
    twotone: twotoneIcons.CardCoinTwoTone
  },
  CardEdit: {
    bold: boldIcons.CardEditBold,
    broken: brokenIcons.CardEditBroken,
    bulk: bulkIcons.CardEditBulk,
    linear: linearIcons.CardEditLinear,
    outline: outlineIcons.CardEditOutline,
    twotone: twotoneIcons.CardEditTwoTone
  },
  CardPos: {
    bold: boldIcons.CardPosBold,
    broken: brokenIcons.CardPosBroken,
    bulk: bulkIcons.CardPosBulk,
    linear: linearIcons.CardPosLinear,
    outline: outlineIcons.CardPosOutline,
    twotone: twotoneIcons.CardPosTwoTone
  },
  CardReceive: {
    bold: boldIcons.CardReceiveBold,
    broken: brokenIcons.CardReceiveBroken,
    bulk: bulkIcons.CardReceiveBulk,
    linear: linearIcons.CardReceiveLinear,
    outline: outlineIcons.CardReceiveOutline,
    twotone: twotoneIcons.CardReceiveTwoTone
  },
  CardRemove: {
    bold: boldIcons.CardRemoveBold,
    broken: brokenIcons.CardRemoveBroken,
    bulk: bulkIcons.CardRemoveBulk,
    linear: linearIcons.CardRemoveLinear,
    outline: outlineIcons.CardRemoveOutline,
    twotone: twotoneIcons.CardRemoveTwoTone
  },
  CardRemove1: {
    bold: boldIcons.CardRemove1Bold,
    broken: brokenIcons.CardRemove1Broken,
    bulk: bulkIcons.CardRemove1Bulk,
    linear: linearIcons.CardRemove1Linear,
    outline: outlineIcons.CardRemove1Outline,
    twotone: twotoneIcons.CardRemove1TwoTone
  },
  Cards: {
    bold: boldIcons.CardsBold,
    broken: brokenIcons.CardsBroken,
    bulk: bulkIcons.CardsBulk,
    linear: linearIcons.CardsLinear,
    outline: outlineIcons.CardsOutline,
    twotone: twotoneIcons.CardsTwoTone
  },
  CardSend: {
    bold: boldIcons.CardSendBold,
    broken: brokenIcons.CardSendBroken,
    bulk: bulkIcons.CardSendBulk,
    linear: linearIcons.CardSendLinear,
    outline: outlineIcons.CardSendOutline,
    twotone: twotoneIcons.CardSendTwoTone
  },
  CardSlash: {
    bold: boldIcons.CardSlashBold,
    broken: brokenIcons.CardSlashBroken,
    bulk: bulkIcons.CardSlashBulk,
    linear: linearIcons.CardSlashLinear,
    outline: outlineIcons.CardSlashOutline,
    twotone: twotoneIcons.CardSlashTwoTone
  },
  CardTick: {
    bold: boldIcons.CardTickBold,
    broken: brokenIcons.CardTickBroken,
    bulk: bulkIcons.CardTickBulk,
    linear: linearIcons.CardTickLinear,
    outline: outlineIcons.CardTickOutline,
    twotone: twotoneIcons.CardTickTwoTone
  },
  CardTick1: {
    bold: boldIcons.CardTick1Bold,
    broken: brokenIcons.CardTick1Broken,
    bulk: bulkIcons.CardTick1Bulk,
    linear: linearIcons.CardTick1Linear,
    outline: outlineIcons.CardTick1Outline,
    twotone: twotoneIcons.CardTick1TwoTone
  },
  Category: {
    bold: boldIcons.CategoryBold,
    broken: brokenIcons.CategoryBroken,
    bulk: bulkIcons.CategoryBulk,
    linear: linearIcons.CategoryLinear,
    outline: outlineIcons.CategoryOutline,
    twotone: twotoneIcons.CategoryTwoTone
  },
  Category2: {
    bold: boldIcons.Category2Bold,
    broken: brokenIcons.Category2Broken,
    bulk: bulkIcons.Category2Bulk,
    linear: linearIcons.Category2Linear,
    outline: outlineIcons.Category2Outline,
    twotone: twotoneIcons.Category2TwoTone
  },
  Cd: {
    bold: boldIcons.CdBold,
    broken: brokenIcons.CdBroken,
    bulk: bulkIcons.CdBulk,
    linear: linearIcons.CdLinear,
    outline: outlineIcons.CdOutline,
    twotone: twotoneIcons.CdTwoTone
  },
  CeloCelo: {
    bold: boldIcons.CeloCeloBold,
    broken: brokenIcons.CeloCeloBroken,
    bulk: bulkIcons.CeloCeloBulk,
    linear: linearIcons.CeloCeloLinear,
    outline: outlineIcons.CeloCeloOutline,
    twotone: twotoneIcons.CeloCeloTwoTone
  },
  CelsiusCel: {
    bold: boldIcons.CelsiusCelBold,
    broken: brokenIcons.CelsiusCelBroken,
    bulk: bulkIcons.CelsiusCelBulk,
    linear: linearIcons.CelsiusCelLinear,
    outline: outlineIcons.CelsiusCelOutline,
    twotone: twotoneIcons.CelsiusCelTwoTone
  },
  ChainlinkLink: {
    bold: boldIcons.ChainlinkLinkBold,
    broken: brokenIcons.ChainlinkLinkBroken,
    bulk: bulkIcons.ChainlinkLinkBulk,
    linear: linearIcons.ChainlinkLinkLinear,
    outline: outlineIcons.ChainlinkLinkOutline,
    twotone: twotoneIcons.ChainlinkLinkTwoTone
  },
  Chart: {
    bold: boldIcons.ChartBold,
    broken: brokenIcons.ChartBroken,
    bulk: bulkIcons.ChartBulk,
    linear: linearIcons.ChartLinear,
    outline: outlineIcons.ChartOutline,
    twotone: twotoneIcons.ChartTwoTone
  },
  Chart1: {
    bold: boldIcons.Chart1Bold,
    broken: brokenIcons.Chart1Broken,
    bulk: bulkIcons.Chart1Bulk,
    linear: linearIcons.Chart1Linear,
    outline: outlineIcons.Chart1Outline,
    twotone: twotoneIcons.Chart1TwoTone
  },
  Chart2: {
    bold: boldIcons.Chart2Bold,
    broken: brokenIcons.Chart2Broken,
    bulk: bulkIcons.Chart2Bulk,
    linear: linearIcons.Chart2Linear,
    outline: outlineIcons.Chart2Outline,
    twotone: twotoneIcons.Chart2TwoTone
  },
  Chart21: {
    bold: boldIcons.Chart21Bold,
    broken: brokenIcons.Chart21Broken,
    bulk: bulkIcons.Chart21Bulk,
    linear: linearIcons.Chart21Linear,
    outline: outlineIcons.Chart21Outline,
    twotone: twotoneIcons.Chart21TwoTone
  },
  ChartCopy: {
    bold: boldIcons.ChartCopyBold,
    broken: brokenIcons.ChartCopyBroken,
    bulk: bulkIcons.ChartCopyBulk,
    linear: linearIcons.ChartCopyLinear,
    outline: outlineIcons.ChartCopyOutline,
    twotone: twotoneIcons.ChartCopyTwoTone
  },
  ChartFail: {
    bold: boldIcons.ChartFailBold,
    broken: brokenIcons.ChartFailBroken,
    outline: outlineIcons.ChartFailOutline
  },
  ChartSquare: {
    bold: boldIcons.ChartSquareBold,
    broken: brokenIcons.ChartSquareBroken,
    bulk: bulkIcons.ChartSquareBulk,
    linear: linearIcons.ChartSquareLinear,
    outline: outlineIcons.ChartSquareOutline,
    twotone: twotoneIcons.ChartSquareTwoTone
  },
  ChartSuccess: {
    bold: boldIcons.ChartSuccessBold,
    broken: brokenIcons.ChartSuccessBroken,
    bulk: bulkIcons.ChartSuccessBulk,
    linear: linearIcons.ChartSuccessLinear,
    outline: outlineIcons.ChartSuccessOutline,
    twotone: twotoneIcons.ChartSuccessTwoTone
  },
  Check: {
    bold: boldIcons.CheckBold,
    broken: brokenIcons.CheckBroken,
    bulk: bulkIcons.CheckBulk,
    linear: linearIcons.CheckLinear,
    outline: outlineIcons.CheckOutline,
    twotone: twotoneIcons.CheckTwoTone
  },
  Chrome: {
    bold: boldIcons.ChromeBold,
    broken: brokenIcons.ChromeBroken,
    bulk: bulkIcons.ChromeBulk,
    linear: linearIcons.ChromeLinear,
    outline: outlineIcons.ChromeOutline,
    twotone: twotoneIcons.ChromeTwoTone
  },
  CivicCvc: {
    bold: boldIcons.CivicCvcBold,
    broken: brokenIcons.CivicCvcBroken,
    bulk: bulkIcons.CivicCvcBulk,
    linear: linearIcons.CivicCvcLinear,
    outline: outlineIcons.CivicCvcOutline,
    twotone: twotoneIcons.CivicCvcTwoTone
  },
  Clipboard: {
    bold: boldIcons.ClipboardBold,
    broken: brokenIcons.ClipboardBroken,
    bulk: bulkIcons.ClipboardBulk,
    linear: linearIcons.ClipboardLinear,
    outline: outlineIcons.ClipboardOutline,
    twotone: twotoneIcons.ClipboardTwoTone
  },
  ClipboardClose: {
    bold: boldIcons.ClipboardCloseBold,
    broken: brokenIcons.ClipboardCloseBroken,
    bulk: bulkIcons.ClipboardCloseBulk,
    linear: linearIcons.ClipboardCloseLinear,
    outline: outlineIcons.ClipboardCloseOutline,
    twotone: twotoneIcons.ClipboardCloseTwoTone
  },
  ClipboardExport: {
    bold: boldIcons.ClipboardExportBold,
    broken: brokenIcons.ClipboardExportBroken,
    bulk: bulkIcons.ClipboardExportBulk,
    linear: linearIcons.ClipboardExportLinear,
    outline: outlineIcons.ClipboardExportOutline,
    twotone: twotoneIcons.ClipboardExportTwoTone
  },
  ClipboardImport: {
    bold: boldIcons.ClipboardImportBold,
    broken: brokenIcons.ClipboardImportBroken,
    bulk: bulkIcons.ClipboardImportBulk,
    linear: linearIcons.ClipboardImportLinear,
    outline: outlineIcons.ClipboardImportOutline,
    twotone: twotoneIcons.ClipboardImportTwoTone
  },
  ClipboardText: {
    bold: boldIcons.ClipboardTextBold,
    broken: brokenIcons.ClipboardTextBroken,
    bulk: bulkIcons.ClipboardTextBulk,
    linear: linearIcons.ClipboardTextLinear,
    outline: outlineIcons.ClipboardTextOutline,
    twotone: twotoneIcons.ClipboardTextTwoTone
  },
  ClipboardTick: {
    bold: boldIcons.ClipboardTickBold,
    broken: brokenIcons.ClipboardTickBroken,
    bulk: bulkIcons.ClipboardTickBulk,
    linear: linearIcons.ClipboardTickLinear,
    outline: outlineIcons.ClipboardTickOutline,
    twotone: twotoneIcons.ClipboardTickTwoTone
  },
  Clock: {
    bold: boldIcons.ClockBold,
    broken: brokenIcons.ClockBroken,
    bulk: bulkIcons.ClockBulk,
    linear: linearIcons.ClockLinear,
    outline: outlineIcons.ClockOutline,
    twotone: twotoneIcons.ClockTwoTone
  },
  Clock1: {
    broken: brokenIcons.Clock1Broken,
    bulk: bulkIcons.Clock1Bulk,
    linear: linearIcons.Clock1Linear,
    outline: outlineIcons.Clock1Outline,
    twotone: twotoneIcons.Clock1TwoTone
  },
  ClockCopy: {
    bold: boldIcons.ClockCopyBold
  },
  CloseCircle: {
    bold: boldIcons.CloseCircleBold,
    broken: brokenIcons.CloseCircleBroken,
    bulk: bulkIcons.CloseCircleBulk,
    linear: linearIcons.CloseCircleLinear,
    outline: outlineIcons.CloseCircleOutline,
    twotone: twotoneIcons.CloseCircleTwoTone
  },
  CloseSquare: {
    bold: boldIcons.CloseSquareBold,
    broken: brokenIcons.CloseSquareBroken,
    bulk: bulkIcons.CloseSquareBulk,
    linear: linearIcons.CloseSquareLinear,
    outline: outlineIcons.CloseSquareOutline,
    twotone: twotoneIcons.CloseSquareTwoTone
  },
  Cloud: {
    bold: boldIcons.CloudBold,
    broken: brokenIcons.CloudBroken,
    bulk: bulkIcons.CloudBulk,
    linear: linearIcons.CloudLinear,
    outline: outlineIcons.CloudOutline,
    twotone: twotoneIcons.CloudTwoTone
  },
  CloudAdd: {
    bold: boldIcons.CloudAddBold,
    broken: brokenIcons.CloudAddBroken,
    bulk: bulkIcons.CloudAddBulk,
    linear: linearIcons.CloudAddLinear,
    outline: outlineIcons.CloudAddOutline,
    twotone: twotoneIcons.CloudAddTwoTone
  },
  CloudChange: {
    bold: boldIcons.CloudChangeBold,
    broken: brokenIcons.CloudChangeBroken,
    bulk: bulkIcons.CloudChangeBulk,
    linear: linearIcons.CloudChangeLinear,
    outline: outlineIcons.CloudChangeOutline,
    twotone: twotoneIcons.CloudChangeTwoTone
  },
  CloudConnection: {
    bold: boldIcons.CloudConnectionBold,
    broken: brokenIcons.CloudConnectionBroken,
    bulk: bulkIcons.CloudConnectionBulk,
    linear: linearIcons.CloudConnectionLinear,
    outline: outlineIcons.CloudConnectionOutline,
    twotone: twotoneIcons.CloudConnectionTwoTone
  },
  CloudCross: {
    bold: boldIcons.CloudCrossBold,
    broken: brokenIcons.CloudCrossBroken,
    bulk: bulkIcons.CloudCrossBulk,
    linear: linearIcons.CloudCrossLinear,
    outline: outlineIcons.CloudCrossOutline,
    twotone: twotoneIcons.CloudCrossTwoTone
  },
  CloudDrizzle: {
    bold: boldIcons.CloudDrizzleBold,
    broken: brokenIcons.CloudDrizzleBroken,
    bulk: bulkIcons.CloudDrizzleBulk,
    linear: linearIcons.CloudDrizzleLinear,
    outline: outlineIcons.CloudDrizzleOutline,
    twotone: twotoneIcons.CloudDrizzleTwoTone
  },
  CloudFog: {
    bold: boldIcons.CloudFogBold,
    broken: brokenIcons.CloudFogBroken,
    bulk: bulkIcons.CloudFogBulk,
    linear: linearIcons.CloudFogLinear,
    outline: outlineIcons.CloudFogOutline,
    twotone: twotoneIcons.CloudFogTwoTone
  },
  CloudLightning: {
    bold: boldIcons.CloudLightningBold,
    broken: brokenIcons.CloudLightningBroken,
    bulk: bulkIcons.CloudLightningBulk,
    linear: linearIcons.CloudLightningLinear,
    outline: outlineIcons.CloudLightningOutline,
    twotone: twotoneIcons.CloudLightningTwoTone
  },
  CloudMinus: {
    bold: boldIcons.CloudMinusBold,
    broken: brokenIcons.CloudMinusBroken,
    bulk: bulkIcons.CloudMinusBulk,
    linear: linearIcons.CloudMinusLinear,
    outline: outlineIcons.CloudMinusOutline,
    twotone: twotoneIcons.CloudMinusTwoTone
  },
  CloudNotif: {
    bold: boldIcons.CloudNotifBold,
    broken: brokenIcons.CloudNotifBroken,
    bulk: bulkIcons.CloudNotifBulk,
    linear: linearIcons.CloudNotifLinear,
    outline: outlineIcons.CloudNotifOutline,
    twotone: twotoneIcons.CloudNotifTwoTone
  },
  CloudPlus: {
    bold: boldIcons.CloudPlusBold,
    broken: brokenIcons.CloudPlusBroken,
    bulk: bulkIcons.CloudPlusBulk,
    linear: linearIcons.CloudPlusLinear,
    outline: outlineIcons.CloudPlusOutline,
    twotone: twotoneIcons.CloudPlusTwoTone
  },
  CloudRemove: {
    bold: boldIcons.CloudRemoveBold,
    broken: brokenIcons.CloudRemoveBroken,
    bulk: bulkIcons.CloudRemoveBulk,
    linear: linearIcons.CloudRemoveLinear,
    outline: outlineIcons.CloudRemoveOutline,
    twotone: twotoneIcons.CloudRemoveTwoTone
  },
  CloudSnow: {
    bold: boldIcons.CloudSnowBold,
    broken: brokenIcons.CloudSnowBroken,
    bulk: bulkIcons.CloudSnowBulk,
    linear: linearIcons.CloudSnowLinear,
    outline: outlineIcons.CloudSnowOutline,
    twotone: twotoneIcons.CloudSnowTwoTone
  },
  CloudSunny: {
    bold: boldIcons.CloudSunnyBold,
    broken: brokenIcons.CloudSunnyBroken,
    bulk: bulkIcons.CloudSunnyBulk,
    linear: linearIcons.CloudSunnyLinear,
    outline: outlineIcons.CloudSunnyOutline,
    twotone: twotoneIcons.CloudSunnyTwoTone
  },
  Code: {
    bold: boldIcons.CodeBold,
    broken: brokenIcons.CodeBroken,
    bulk: bulkIcons.CodeBulk,
    linear: linearIcons.CodeLinear,
    outline: outlineIcons.CodeOutline,
    twotone: twotoneIcons.CodeTwoTone
  },
  Code1: {
    bold: boldIcons.Code1Bold,
    broken: brokenIcons.Code1Broken,
    bulk: bulkIcons.Code1Bulk,
    linear: linearIcons.Code1Linear,
    outline: outlineIcons.Code1Outline,
    twotone: twotoneIcons.Code1TwoTone
  },
  CodeCircle: {
    bold: boldIcons.CodeCircleBold,
    broken: brokenIcons.CodeCircleBroken,
    bulk: bulkIcons.CodeCircleBulk,
    linear: linearIcons.CodeCircleLinear,
    outline: outlineIcons.CodeCircleOutline,
    twotone: twotoneIcons.CodeCircleTwoTone
  },
  Coffee: {
    bold: boldIcons.CoffeeBold,
    broken: brokenIcons.CoffeeBroken,
    bulk: bulkIcons.CoffeeBulk,
    linear: linearIcons.CoffeeLinear,
    outline: outlineIcons.CoffeeOutline,
    twotone: twotoneIcons.CoffeeTwoTone
  },
  Coin: {
    bold: boldIcons.CoinBold,
    broken: brokenIcons.CoinBroken,
    bulk: bulkIcons.CoinBulk,
    linear: linearIcons.CoinLinear,
    outline: outlineIcons.CoinOutline,
    twotone: twotoneIcons.CoinTwoTone
  },
  Coin1: {
    bold: boldIcons.Coin1Bold,
    broken: brokenIcons.Coin1Broken,
    bulk: bulkIcons.Coin1Bulk,
    linear: linearIcons.Coin1Linear,
    outline: outlineIcons.Coin1Outline,
    twotone: twotoneIcons.Coin1TwoTone
  },
  Colorfilter: {
    bold: boldIcons.ColorfilterBold,
    broken: brokenIcons.ColorfilterBroken,
    bulk: bulkIcons.ColorfilterBulk,
    linear: linearIcons.ColorfilterLinear,
    outline: outlineIcons.ColorfilterOutline,
    twotone: twotoneIcons.ColorfilterTwoTone
  },
  ColorsSquare: {
    bold: boldIcons.ColorsSquareBold,
    broken: brokenIcons.ColorsSquareBroken,
    bulk: bulkIcons.ColorsSquareBulk,
    linear: linearIcons.ColorsSquareLinear,
    outline: outlineIcons.ColorsSquareOutline,
    twotone: twotoneIcons.ColorsSquareTwoTone
  },
  ColorsSquare1: {
    linear: linearIcons.ColorsSquare1Linear
  },
  ColorSwatch: {
    bold: boldIcons.ColorSwatchBold,
    broken: brokenIcons.ColorSwatchBroken,
    bulk: bulkIcons.ColorSwatchBulk,
    linear: linearIcons.ColorSwatchLinear,
    outline: outlineIcons.ColorSwatchOutline,
    twotone: twotoneIcons.ColorSwatchTwoTone
  },
  Command: {
    bold: boldIcons.CommandBold,
    broken: brokenIcons.CommandBroken,
    bulk: bulkIcons.CommandBulk,
    linear: linearIcons.CommandLinear,
    outline: outlineIcons.CommandOutline,
    twotone: twotoneIcons.CommandTwoTone
  },
  CommandSquare: {
    bold: boldIcons.CommandSquareBold,
    broken: brokenIcons.CommandSquareBroken,
    bulk: bulkIcons.CommandSquareBulk,
    linear: linearIcons.CommandSquareLinear,
    outline: outlineIcons.CommandSquareOutline,
    twotone: twotoneIcons.CommandSquareTwoTone
  },
  Component: {
    bold: boldIcons.ComponentBold,
    broken: brokenIcons.ComponentBroken,
    bulk: bulkIcons.ComponentBulk,
    linear: linearIcons.ComponentLinear,
    outline: outlineIcons.ComponentOutline,
    twotone: twotoneIcons.ComponentTwoTone
  },
  Component1: {
    linear: linearIcons.Component1Linear
  },
  Computing: {
    bold: boldIcons.ComputingBold,
    broken: brokenIcons.ComputingBroken,
    bulk: bulkIcons.ComputingBulk,
    linear: linearIcons.ComputingLinear,
    outline: outlineIcons.ComputingOutline,
    twotone: twotoneIcons.ComputingTwoTone
  },
  Convert: {
    bold: boldIcons.ConvertBold,
    broken: brokenIcons.ConvertBroken,
    bulk: bulkIcons.ConvertBulk,
    linear: linearIcons.ConvertLinear,
    outline: outlineIcons.ConvertOutline,
    twotone: twotoneIcons.ConvertTwoTone
  },
  Convert3dCube: {
    bold: boldIcons.Convert3dCubeBold,
    broken: brokenIcons.Convert3dCubeBroken,
    bulk: bulkIcons.Convert3dCubeBulk,
    linear: linearIcons.Convert3dCubeLinear,
    outline: outlineIcons.Convert3dCubeOutline,
    twotone: twotoneIcons.Convert3dCubeTwoTone
  },
  ConvertCard: {
    bold: boldIcons.ConvertCardBold,
    broken: brokenIcons.ConvertCardBroken,
    bulk: bulkIcons.ConvertCardBulk,
    outline: outlineIcons.ConvertCardOutline,
    twotone: twotoneIcons.ConvertCardTwoTone
  },
  Convertshape: {
    bold: boldIcons.ConvertshapeBold,
    broken: brokenIcons.ConvertshapeBroken,
    bulk: bulkIcons.ConvertshapeBulk,
    linear: linearIcons.ConvertshapeLinear,
    outline: outlineIcons.ConvertshapeOutline,
    twotone: twotoneIcons.ConvertshapeTwoTone
  },
  Convertshape2: {
    bold: boldIcons.Convertshape2Bold,
    broken: brokenIcons.Convertshape2Broken,
    bulk: bulkIcons.Convertshape2Bulk,
    linear: linearIcons.Convertshape2Linear,
    outline: outlineIcons.Convertshape2Outline,
    twotone: twotoneIcons.Convertshape2TwoTone
  },
  Copy: {
    bold: boldIcons.CopyBold,
    broken: brokenIcons.CopyBroken,
    bulk: bulkIcons.CopyBulk,
    linear: linearIcons.CopyLinear,
    outline: outlineIcons.CopyOutline,
    twotone: twotoneIcons.CopyTwoTone
  },
  Copyright: {
    bold: boldIcons.CopyrightBold,
    broken: brokenIcons.CopyrightBroken,
    bulk: bulkIcons.CopyrightBulk,
    linear: linearIcons.CopyrightLinear,
    outline: outlineIcons.CopyrightOutline,
    twotone: twotoneIcons.CopyrightTwoTone
  },
  CopySuccess: {
    bold: boldIcons.CopySuccessBold,
    broken: brokenIcons.CopySuccessBroken,
    bulk: bulkIcons.CopySuccessBulk,
    linear: linearIcons.CopySuccessLinear,
    outline: outlineIcons.CopySuccessOutline,
    twotone: twotoneIcons.CopySuccessTwoTone
  },
  Courthouse: {
    bold: boldIcons.CourthouseBold,
    broken: brokenIcons.CourthouseBroken,
    bulk: bulkIcons.CourthouseBulk,
    linear: linearIcons.CourthouseLinear,
    outline: outlineIcons.CourthouseOutline,
    twotone: twotoneIcons.CourthouseTwoTone
  },
  Cpu: {
    bold: boldIcons.CpuBold,
    broken: brokenIcons.CpuBroken,
    bulk: bulkIcons.CpuBulk,
    linear: linearIcons.CpuLinear,
    outline: outlineIcons.CpuOutline,
    twotone: twotoneIcons.CpuTwoTone
  },
  CpuCharge: {
    bold: boldIcons.CpuChargeBold,
    broken: brokenIcons.CpuChargeBroken,
    bulk: bulkIcons.CpuChargeBulk,
    linear: linearIcons.CpuChargeLinear,
    outline: outlineIcons.CpuChargeOutline,
    twotone: twotoneIcons.CpuChargeTwoTone
  },
  CpuSetting: {
    bold: boldIcons.CpuSettingBold,
    broken: brokenIcons.CpuSettingBroken,
    bulk: bulkIcons.CpuSettingBulk,
    linear: linearIcons.CpuSettingLinear,
    outline: outlineIcons.CpuSettingOutline,
    twotone: twotoneIcons.CpuSettingTwoTone
  },
  CreativeCommons: {
    bold: boldIcons.CreativeCommonsBold,
    broken: brokenIcons.CreativeCommonsBroken,
    bulk: bulkIcons.CreativeCommonsBulk,
    linear: linearIcons.CreativeCommonsLinear,
    outline: outlineIcons.CreativeCommonsOutline,
    twotone: twotoneIcons.CreativeCommonsTwoTone
  },
  Crop: {
    bold: boldIcons.CropBold,
    broken: brokenIcons.CropBroken,
    bulk: bulkIcons.CropBulk,
    linear: linearIcons.CropLinear,
    outline: outlineIcons.CropOutline,
    twotone: twotoneIcons.CropTwoTone
  },
  Crown: {
    bold: boldIcons.CrownBold,
    broken: brokenIcons.CrownBroken,
    bulk: bulkIcons.CrownBulk,
    linear: linearIcons.CrownLinear,
    outline: outlineIcons.CrownOutline,
    twotone: twotoneIcons.CrownTwoTone
  },
  Crown1: {
    bold: boldIcons.Crown1Bold,
    broken: brokenIcons.Crown1Broken,
    bulk: bulkIcons.Crown1Bulk,
    linear: linearIcons.Crown1Linear,
    outline: outlineIcons.Crown1Outline,
    twotone: twotoneIcons.Crown1TwoTone
  },
  Cup: {
    bold: boldIcons.CupBold,
    broken: brokenIcons.CupBroken,
    bulk: bulkIcons.CupBulk,
    linear: linearIcons.CupLinear,
    outline: outlineIcons.CupOutline,
    twotone: twotoneIcons.CupTwoTone
  },
  DaiDai: {
    bold: boldIcons.DaiDaiBold,
    broken: brokenIcons.DaiDaiBroken,
    bulk: bulkIcons.DaiDaiBulk,
    linear: linearIcons.DaiDaiLinear,
    outline: outlineIcons.DaiDaiOutline,
    twotone: twotoneIcons.DaiDaiTwoTone
  },
  Danger: {
    bold: boldIcons.DangerBold,
    broken: brokenIcons.DangerBroken,
    bulk: bulkIcons.DangerBulk,
    linear: linearIcons.DangerLinear,
    outline: outlineIcons.DangerOutline,
    twotone: twotoneIcons.DangerTwoTone
  },
  DashDash: {
    bold: boldIcons.DashDashBold,
    broken: brokenIcons.DashDashBroken,
    bulk: bulkIcons.DashDashBulk,
    linear: linearIcons.DashDashLinear,
    outline: outlineIcons.DashDashOutline,
    twotone: twotoneIcons.DashDashTwoTone
  },
  Data: {
    bold: boldIcons.DataBold,
    broken: brokenIcons.DataBroken,
    bulk: bulkIcons.DataBulk,
    linear: linearIcons.DataLinear,
    outline: outlineIcons.DataOutline,
    twotone: twotoneIcons.DataTwoTone
  },
  Data2: {
    bold: boldIcons.Data2Bold,
    broken: brokenIcons.Data2Broken,
    bulk: bulkIcons.Data2Bulk,
    linear: linearIcons.Data2Linear,
    outline: outlineIcons.Data2Outline,
    twotone: twotoneIcons.Data2TwoTone
  },
  DecredDcr: {
    bold: boldIcons.DecredDcrBold,
    broken: brokenIcons.DecredDcrBroken,
    bulk: bulkIcons.DecredDcrBulk,
    linear: linearIcons.DecredDcrLinear,
    outline: outlineIcons.DecredDcrOutline,
    twotone: twotoneIcons.DecredDcrTwoTone
  },
  DentDent: {
    bold: boldIcons.DentDentBold,
    broken: brokenIcons.DentDentBroken,
    bulk: bulkIcons.DentDentBulk,
    linear: linearIcons.DentDentLinear,
    outline: outlineIcons.DentDentOutline,
    twotone: twotoneIcons.DentDentTwoTone
  },
  Designtools: {
    bold: boldIcons.DesigntoolsBold,
    broken: brokenIcons.DesigntoolsBroken,
    bulk: bulkIcons.DesigntoolsBulk,
    linear: linearIcons.DesigntoolsLinear,
    outline: outlineIcons.DesigntoolsOutline,
    twotone: twotoneIcons.DesigntoolsTwoTone
  },
  DeviceMessage: {
    bold: boldIcons.DeviceMessageBold,
    broken: brokenIcons.DeviceMessageBroken,
    bulk: bulkIcons.DeviceMessageBulk,
    linear: linearIcons.DeviceMessageLinear,
    outline: outlineIcons.DeviceMessageOutline,
    twotone: twotoneIcons.DeviceMessageTwoTone
  },
  Devices: {
    bold: boldIcons.DevicesBold,
    broken: brokenIcons.DevicesBroken,
    bulk: bulkIcons.DevicesBulk,
    linear: linearIcons.DevicesLinear,
    outline: outlineIcons.DevicesOutline,
    twotone: twotoneIcons.DevicesTwoTone
  },
  DevicesCopy: {
    bold: boldIcons.DevicesCopyBold,
    broken: brokenIcons.DevicesCopyBroken,
    bulk: bulkIcons.DevicesCopyBulk,
    linear: linearIcons.DevicesCopyLinear,
    outline: outlineIcons.DevicesCopyOutline
  },
  Diagram: {
    bold: boldIcons.DiagramBold,
    broken: brokenIcons.DiagramBroken,
    bulk: bulkIcons.DiagramBulk,
    linear: linearIcons.DiagramLinear,
    outline: outlineIcons.DiagramOutline,
    twotone: twotoneIcons.DiagramTwoTone
  },
  Diamonds: {
    bold: boldIcons.DiamondsBold,
    broken: brokenIcons.DiamondsBroken,
    bulk: bulkIcons.DiamondsBulk,
    linear: linearIcons.DiamondsLinear,
    outline: outlineIcons.DiamondsOutline,
    twotone: twotoneIcons.DiamondsTwoTone
  },
  Direct: {
    bold: boldIcons.DirectBold,
    broken: brokenIcons.DirectBroken,
    bulk: bulkIcons.DirectBulk,
    linear: linearIcons.DirectLinear,
    outline: outlineIcons.DirectOutline,
    twotone: twotoneIcons.DirectTwoTone
  },
  DirectboxDefault: {
    bold: boldIcons.DirectboxDefaultBold,
    broken: brokenIcons.DirectboxDefaultBroken,
    bulk: bulkIcons.DirectboxDefaultBulk,
    linear: linearIcons.DirectboxDefaultLinear,
    outline: outlineIcons.DirectboxDefaultOutline,
    twotone: twotoneIcons.DirectboxDefaultTwoTone
  },
  DirectboxNotif: {
    bold: boldIcons.DirectboxNotifBold,
    broken: brokenIcons.DirectboxNotifBroken,
    bulk: bulkIcons.DirectboxNotifBulk,
    linear: linearIcons.DirectboxNotifLinear,
    outline: outlineIcons.DirectboxNotifOutline,
    twotone: twotoneIcons.DirectboxNotifTwoTone
  },
  DirectboxReceive: {
    bold: boldIcons.DirectboxReceiveBold,
    broken: brokenIcons.DirectboxReceiveBroken,
    bulk: bulkIcons.DirectboxReceiveBulk,
    linear: linearIcons.DirectboxReceiveLinear,
    outline: outlineIcons.DirectboxReceiveOutline,
    twotone: twotoneIcons.DirectboxReceiveTwoTone
  },
  DirectboxSend: {
    bold: boldIcons.DirectboxSendBold,
    broken: brokenIcons.DirectboxSendBroken,
    bulk: bulkIcons.DirectboxSendBulk,
    linear: linearIcons.DirectboxSendLinear,
    outline: outlineIcons.DirectboxSendOutline,
    twotone: twotoneIcons.DirectboxSendTwoTone
  },
  DirectDown: {
    bold: boldIcons.DirectDownBold,
    broken: brokenIcons.DirectDownBroken,
    bulk: bulkIcons.DirectDownBulk,
    linear: linearIcons.DirectDownLinear,
    outline: outlineIcons.DirectDownOutline,
    twotone: twotoneIcons.DirectDownTwoTone
  },
  DirectInbox: {
    bold: boldIcons.DirectInboxBold,
    broken: brokenIcons.DirectInboxBroken,
    bulk: bulkIcons.DirectInboxBulk,
    linear: linearIcons.DirectInboxLinear,
    outline: outlineIcons.DirectInboxOutline,
    twotone: twotoneIcons.DirectInboxTwoTone
  },
  DirectLeft: {
    bold: boldIcons.DirectLeftBold,
    broken: brokenIcons.DirectLeftBroken,
    bulk: bulkIcons.DirectLeftBulk,
    linear: linearIcons.DirectLeftLinear,
    outline: outlineIcons.DirectLeftOutline,
    twotone: twotoneIcons.DirectLeftTwoTone
  },
  DirectNormal: {
    bold: boldIcons.DirectNormalBold,
    broken: brokenIcons.DirectNormalBroken,
    bulk: bulkIcons.DirectNormalBulk,
    linear: linearIcons.DirectNormalLinear,
    outline: outlineIcons.DirectNormalOutline,
    twotone: twotoneIcons.DirectNormalTwoTone
  },
  DirectNotification: {
    bold: boldIcons.DirectNotificationBold,
    broken: brokenIcons.DirectNotificationBroken,
    bulk: bulkIcons.DirectNotificationBulk,
    linear: linearIcons.DirectNotificationLinear,
    outline: outlineIcons.DirectNotificationOutline,
    twotone: twotoneIcons.DirectNotificationTwoTone
  },
  DirectRight: {
    bold: boldIcons.DirectRightBold,
    broken: brokenIcons.DirectRightBroken,
    bulk: bulkIcons.DirectRightBulk,
    linear: linearIcons.DirectRightLinear,
    outline: outlineIcons.DirectRightOutline,
    twotone: twotoneIcons.DirectRightTwoTone
  },
  DirectSend: {
    bold: boldIcons.DirectSendBold,
    broken: brokenIcons.DirectSendBroken,
    bulk: bulkIcons.DirectSendBulk,
    linear: linearIcons.DirectSendLinear,
    outline: outlineIcons.DirectSendOutline,
    twotone: twotoneIcons.DirectSendTwoTone
  },
  DirectUp: {
    bold: boldIcons.DirectUpBold,
    broken: brokenIcons.DirectUpBroken,
    bulk: bulkIcons.DirectUpBulk,
    linear: linearIcons.DirectUpLinear,
    outline: outlineIcons.DirectUpOutline,
    twotone: twotoneIcons.DirectUpTwoTone
  },
  DiscountCircle: {
    bold: boldIcons.DiscountCircleBold,
    broken: brokenIcons.DiscountCircleBroken,
    bulk: bulkIcons.DiscountCircleBulk,
    linear: linearIcons.DiscountCircleLinear,
    outline: outlineIcons.DiscountCircleOutline,
    twotone: twotoneIcons.DiscountCircleTwoTone
  },
  DiscountShape: {
    bold: boldIcons.DiscountShapeBold,
    broken: brokenIcons.DiscountShapeBroken,
    bulk: bulkIcons.DiscountShapeBulk,
    linear: linearIcons.DiscountShapeLinear,
    outline: outlineIcons.DiscountShapeOutline,
    twotone: twotoneIcons.DiscountShapeTwoTone
  },
  Discover: {
    bold: boldIcons.DiscoverBold,
    broken: brokenIcons.DiscoverBroken,
    bulk: bulkIcons.DiscoverBulk,
    linear: linearIcons.DiscoverLinear,
    outline: outlineIcons.DiscoverOutline,
    twotone: twotoneIcons.DiscoverTwoTone
  },
  DiscoverCopy: {
    bold: boldIcons.DiscoverCopyBold,
    broken: brokenIcons.DiscoverCopyBroken,
    bulk: bulkIcons.DiscoverCopyBulk,
    linear: linearIcons.DiscoverCopyLinear,
    outline: outlineIcons.DiscoverCopyOutline,
    twotone: twotoneIcons.DiscoverCopyTwoTone
  },
  Dislike: {
    bold: boldIcons.DislikeBold,
    broken: brokenIcons.DislikeBroken,
    bulk: bulkIcons.DislikeBulk,
    linear: linearIcons.DislikeLinear,
    outline: outlineIcons.DislikeOutline,
    twotone: twotoneIcons.DislikeTwoTone
  },
  Document: {
    bold: boldIcons.DocumentBold,
    broken: brokenIcons.DocumentBroken,
    bulk: bulkIcons.DocumentBulk,
    linear: linearIcons.DocumentLinear,
    outline: outlineIcons.DocumentOutline,
    twotone: twotoneIcons.DocumentTwoTone
  },
  DocumentCloud: {
    bold: boldIcons.DocumentCloudBold,
    broken: brokenIcons.DocumentCloudBroken,
    bulk: bulkIcons.DocumentCloudBulk,
    linear: linearIcons.DocumentCloudLinear,
    outline: outlineIcons.DocumentCloudOutline,
    twotone: twotoneIcons.DocumentCloudTwoTone
  },
  DocumentCode: {
    bold: boldIcons.DocumentCodeBold,
    broken: brokenIcons.DocumentCodeBroken,
    bulk: bulkIcons.DocumentCodeBulk,
    linear: linearIcons.DocumentCodeLinear,
    outline: outlineIcons.DocumentCodeOutline,
    twotone: twotoneIcons.DocumentCodeTwoTone
  },
  DocumentCode2: {
    bold: boldIcons.DocumentCode2Bold,
    broken: brokenIcons.DocumentCode2Broken,
    bulk: bulkIcons.DocumentCode2Bulk,
    linear: linearIcons.DocumentCode2Linear,
    outline: outlineIcons.DocumentCode2Outline,
    twotone: twotoneIcons.DocumentCode2TwoTone
  },
  DocumentCopy: {
    bold: boldIcons.DocumentCopyBold,
    broken: brokenIcons.DocumentCopyBroken,
    bulk: bulkIcons.DocumentCopyBulk,
    linear: linearIcons.DocumentCopyLinear,
    outline: outlineIcons.DocumentCopyOutline,
    twotone: twotoneIcons.DocumentCopyTwoTone
  },
  DocumentCopy2: {
    bold: boldIcons.DocumentCopy2Bold,
    broken: brokenIcons.DocumentCopy2Broken,
    bulk: bulkIcons.DocumentCopy2Bulk,
    linear: linearIcons.DocumentCopy2Linear,
    outline: outlineIcons.DocumentCopy2Outline,
    twotone: twotoneIcons.DocumentCopy2TwoTone
  },
  DocumentDownload: {
    bold: boldIcons.DocumentDownloadBold,
    broken: brokenIcons.DocumentDownloadBroken,
    bulk: bulkIcons.DocumentDownloadBulk,
    linear: linearIcons.DocumentDownloadLinear,
    outline: outlineIcons.DocumentDownloadOutline,
    twotone: twotoneIcons.DocumentDownloadTwoTone
  },
  DocumentFavorite: {
    bold: boldIcons.DocumentFavoriteBold,
    broken: brokenIcons.DocumentFavoriteBroken,
    bulk: bulkIcons.DocumentFavoriteBulk,
    linear: linearIcons.DocumentFavoriteLinear,
    outline: outlineIcons.DocumentFavoriteOutline,
    twotone: twotoneIcons.DocumentFavoriteTwoTone
  },
  DocumentFilter: {
    bold: boldIcons.DocumentFilterBold,
    broken: brokenIcons.DocumentFilterBroken,
    bulk: bulkIcons.DocumentFilterBulk,
    linear: linearIcons.DocumentFilterLinear,
    outline: outlineIcons.DocumentFilterOutline,
    twotone: twotoneIcons.DocumentFilterTwoTone
  },
  DocumentForward: {
    bold: boldIcons.DocumentForwardBold,
    broken: brokenIcons.DocumentForwardBroken,
    bulk: bulkIcons.DocumentForwardBulk,
    linear: linearIcons.DocumentForwardLinear,
    outline: outlineIcons.DocumentForwardOutline,
    twotone: twotoneIcons.DocumentForwardTwoTone
  },
  DocumentLike: {
    bold: boldIcons.DocumentLikeBold,
    broken: brokenIcons.DocumentLikeBroken,
    bulk: bulkIcons.DocumentLikeBulk,
    linear: linearIcons.DocumentLikeLinear,
    outline: outlineIcons.DocumentLikeOutline,
    twotone: twotoneIcons.DocumentLikeTwoTone
  },
  DocumentNormal: {
    bold: boldIcons.DocumentNormalBold,
    broken: brokenIcons.DocumentNormalBroken,
    bulk: bulkIcons.DocumentNormalBulk,
    outline: outlineIcons.DocumentNormalOutline
  },
  DocumentPrevious: {
    bold: boldIcons.DocumentPreviousBold,
    broken: brokenIcons.DocumentPreviousBroken,
    bulk: bulkIcons.DocumentPreviousBulk,
    linear: linearIcons.DocumentPreviousLinear,
    outline: outlineIcons.DocumentPreviousOutline,
    twotone: twotoneIcons.DocumentPreviousTwoTone
  },
  DocumentSketch: {
    bold: boldIcons.DocumentSketchBold,
    broken: brokenIcons.DocumentSketchBroken,
    bulk: bulkIcons.DocumentSketchBulk,
    linear: linearIcons.DocumentSketchLinear,
    outline: outlineIcons.DocumentSketchOutline,
    twotone: twotoneIcons.DocumentSketchTwoTone
  },
  DocumentText: {
    bold: boldIcons.DocumentTextBold,
    broken: brokenIcons.DocumentTextBroken,
    bulk: bulkIcons.DocumentTextBulk,
    linear: linearIcons.DocumentTextLinear,
    outline: outlineIcons.DocumentTextOutline,
    twotone: twotoneIcons.DocumentTextTwoTone
  },
  DocumentText1: {
    bold: boldIcons.DocumentText1Bold,
    broken: brokenIcons.DocumentText1Broken,
    bulk: bulkIcons.DocumentText1Bulk,
    linear: linearIcons.DocumentText1Linear,
    outline: outlineIcons.DocumentText1Outline,
    twotone: twotoneIcons.DocumentText1TwoTone
  },
  DocumentUpload: {
    bold: boldIcons.DocumentUploadBold,
    broken: brokenIcons.DocumentUploadBroken,
    bulk: bulkIcons.DocumentUploadBulk,
    linear: linearIcons.DocumentUploadLinear,
    outline: outlineIcons.DocumentUploadOutline,
    twotone: twotoneIcons.DocumentUploadTwoTone
  },
  DollarCircle: {
    bold: boldIcons.DollarCircleBold,
    bulk: bulkIcons.DollarCircleBulk,
    linear: linearIcons.DollarCircleLinear,
    outline: outlineIcons.DollarCircleOutline,
    twotone: twotoneIcons.DollarCircleTwoTone
  },
  DollarSquare: {
    bold: boldIcons.DollarSquareBold,
    broken: brokenIcons.DollarSquareBroken,
    bulk: bulkIcons.DollarSquareBulk,
    linear: linearIcons.DollarSquareLinear,
    outline: outlineIcons.DollarSquareOutline,
    twotone: twotoneIcons.DollarSquareTwoTone
  },
  Dribbble: {
    bold: boldIcons.DribbbleBold,
    broken: brokenIcons.DribbbleBroken,
    bulk: bulkIcons.DribbbleBulk,
    linear: linearIcons.DribbbleLinear,
    outline: outlineIcons.DribbbleOutline,
    twotone: twotoneIcons.DribbbleTwoTone
  },
  Driver: {
    bold: boldIcons.DriverBold,
    broken: brokenIcons.DriverBroken,
    bulk: bulkIcons.DriverBulk,
    linear: linearIcons.DriverLinear,
    outline: outlineIcons.DriverOutline,
    twotone: twotoneIcons.DriverTwoTone
  },
  Driver2: {
    bold: boldIcons.Driver2Bold,
    broken: brokenIcons.Driver2Broken,
    bulk: bulkIcons.Driver2Bulk,
    linear: linearIcons.Driver2Linear,
    outline: outlineIcons.Driver2Outline,
    twotone: twotoneIcons.Driver2TwoTone
  },
  DriverRefresh: {
    bold: boldIcons.DriverRefreshBold,
    broken: brokenIcons.DriverRefreshBroken,
    bulk: bulkIcons.DriverRefreshBulk,
    linear: linearIcons.DriverRefreshLinear,
    outline: outlineIcons.DriverRefreshOutline,
    twotone: twotoneIcons.DriverRefreshTwoTone
  },
  Driving: {
    bold: boldIcons.DrivingBold,
    broken: brokenIcons.DrivingBroken,
    bulk: bulkIcons.DrivingBulk,
    linear: linearIcons.DrivingLinear,
    outline: outlineIcons.DrivingOutline,
    twotone: twotoneIcons.DrivingTwoTone
  },
  Drop: {
    bold: boldIcons.DropBold,
    broken: brokenIcons.DropBroken,
    bulk: bulkIcons.DropBulk,
    linear: linearIcons.DropLinear,
    twotone: twotoneIcons.DropTwoTone
  },
  Dropbox: {
    bold: boldIcons.DropboxBold,
    broken: brokenIcons.DropboxBroken,
    bulk: bulkIcons.DropboxBulk,
    linear: linearIcons.DropboxLinear,
    outline: outlineIcons.DropboxOutline,
    twotone: twotoneIcons.DropboxTwoTone
  },
  Edit: {
    bold: boldIcons.EditBold,
    broken: brokenIcons.EditBroken,
    bulk: bulkIcons.EditBulk,
    linear: linearIcons.EditLinear,
    outline: outlineIcons.EditOutline,
    twotone: twotoneIcons.EditTwoTone
  },
  Edit2: {
    bold: boldIcons.Edit2Bold,
    broken: brokenIcons.Edit2Broken,
    bulk: bulkIcons.Edit2Bulk,
    linear: linearIcons.Edit2Linear,
    outline: outlineIcons.Edit2Outline,
    twotone: twotoneIcons.Edit2TwoTone
  },
  EducareEkt: {
    bold: boldIcons.EducareEktBold,
    broken: brokenIcons.EducareEktBroken,
    bulk: bulkIcons.EducareEktBulk,
    linear: linearIcons.EducareEktLinear,
    outline: outlineIcons.EducareEktOutline,
    twotone: twotoneIcons.EducareEktTwoTone
  },
  Electricity: {
    bold: boldIcons.ElectricityBold,
    broken: brokenIcons.ElectricityBroken,
    bulk: bulkIcons.ElectricityBulk,
    linear: linearIcons.ElectricityLinear,
    outline: outlineIcons.ElectricityOutline,
    twotone: twotoneIcons.ElectricityTwoTone
  },
  Element1: {
    bulk: bulkIcons.Element1Bulk,
    linear: linearIcons.Element1Linear,
    twotone: twotoneIcons.Element1TwoTone
  },
  Element2: {
    bold: boldIcons.Element2Bold,
    broken: brokenIcons.Element2Broken,
    bulk: bulkIcons.Element2Bulk,
    linear: linearIcons.Element2Linear,
    outline: outlineIcons.Element2Outline,
    twotone: twotoneIcons.Element2TwoTone
  },
  Element3: {
    bold: boldIcons.Element3Bold,
    broken: brokenIcons.Element3Broken,
    bulk: bulkIcons.Element3Bulk,
    linear: linearIcons.Element3Linear,
    outline: outlineIcons.Element3Outline,
    twotone: twotoneIcons.Element3TwoTone
  },
  Element4: {
    bold: boldIcons.Element4Bold,
    broken: brokenIcons.Element4Broken,
    bulk: bulkIcons.Element4Bulk,
    linear: linearIcons.Element4Linear,
    outline: outlineIcons.Element4Outline,
    twotone: twotoneIcons.Element4TwoTone
  },
  ElementEqual: {
    bold: boldIcons.ElementEqualBold,
    broken: brokenIcons.ElementEqualBroken,
    bulk: bulkIcons.ElementEqualBulk,
    linear: linearIcons.ElementEqualLinear,
    outline: outlineIcons.ElementEqualOutline,
    twotone: twotoneIcons.ElementEqualTwoTone
  },
  ElementPlus: {
    bold: boldIcons.ElementPlusBold,
    broken: brokenIcons.ElementPlusBroken,
    bulk: bulkIcons.ElementPlusBulk,
    linear: linearIcons.ElementPlusLinear,
    outline: outlineIcons.ElementPlusOutline,
    twotone: twotoneIcons.ElementPlusTwoTone
  },
  EmercoinEmc: {
    bold: boldIcons.EmercoinEmcBold,
    broken: brokenIcons.EmercoinEmcBroken,
    bulk: bulkIcons.EmercoinEmcBulk,
    linear: linearIcons.EmercoinEmcLinear,
    outline: outlineIcons.EmercoinEmcOutline,
    twotone: twotoneIcons.EmercoinEmcTwoTone
  },
  EmojiHappy: {
    bold: boldIcons.EmojiHappyBold,
    broken: brokenIcons.EmojiHappyBroken,
    bulk: bulkIcons.EmojiHappyBulk,
    linear: linearIcons.EmojiHappyLinear,
    outline: outlineIcons.EmojiHappyOutline,
    twotone: twotoneIcons.EmojiHappyTwoTone
  },
  EmojiNormal: {
    bold: boldIcons.EmojiNormalBold,
    broken: brokenIcons.EmojiNormalBroken,
    bulk: bulkIcons.EmojiNormalBulk,
    linear: linearIcons.EmojiNormalLinear,
    outline: outlineIcons.EmojiNormalOutline,
    twotone: twotoneIcons.EmojiNormalTwoTone
  },
  EmojiSad: {
    bold: boldIcons.EmojiSadBold,
    broken: brokenIcons.EmojiSadBroken,
    bulk: bulkIcons.EmojiSadBulk,
    linear: linearIcons.EmojiSadLinear,
    outline: outlineIcons.EmojiSadOutline,
    twotone: twotoneIcons.EmojiSadTwoTone
  },
  EmptyWallet: {
    bold: boldIcons.EmptyWalletBold,
    broken: brokenIcons.EmptyWalletBroken,
    bulk: bulkIcons.EmptyWalletBulk,
    linear: linearIcons.EmptyWalletLinear,
    outline: outlineIcons.EmptyWalletOutline,
    twotone: twotoneIcons.EmptyWalletTwoTone
  },
  EmptyWalletAdd: {
    bold: boldIcons.EmptyWalletAddBold,
    broken: brokenIcons.EmptyWalletAddBroken,
    bulk: bulkIcons.EmptyWalletAddBulk,
    linear: linearIcons.EmptyWalletAddLinear,
    outline: outlineIcons.EmptyWalletAddOutline,
    twotone: twotoneIcons.EmptyWalletAddTwoTone
  },
  EmptyWalletChange: {
    bold: boldIcons.EmptyWalletChangeBold,
    broken: brokenIcons.EmptyWalletChangeBroken,
    bulk: bulkIcons.EmptyWalletChangeBulk,
    linear: linearIcons.EmptyWalletChangeLinear,
    outline: outlineIcons.EmptyWalletChangeOutline
  },
  EmptyWalletRemove: {
    bold: boldIcons.EmptyWalletRemoveBold,
    broken: brokenIcons.EmptyWalletRemoveBroken,
    bulk: bulkIcons.EmptyWalletRemoveBulk,
    linear: linearIcons.EmptyWalletRemoveLinear,
    outline: outlineIcons.EmptyWalletRemoveOutline,
    twotone: twotoneIcons.EmptyWalletRemoveTwoTone
  },
  EmptyWalletTick: {
    bold: boldIcons.EmptyWalletTickBold,
    broken: brokenIcons.EmptyWalletTickBroken,
    bulk: bulkIcons.EmptyWalletTickBulk,
    linear: linearIcons.EmptyWalletTickLinear,
    outline: outlineIcons.EmptyWalletTickOutline,
    twotone: twotoneIcons.EmptyWalletTickTwoTone
  },
  EmptyWalletTime: {
    bold: boldIcons.EmptyWalletTimeBold,
    broken: brokenIcons.EmptyWalletTimeBroken,
    bulk: bulkIcons.EmptyWalletTimeBulk,
    linear: linearIcons.EmptyWalletTimeLinear,
    outline: outlineIcons.EmptyWalletTimeOutline
  },
  EnjinCoinEnj: {
    bold: boldIcons.EnjinCoinEnjBold,
    broken: brokenIcons.EnjinCoinEnjBroken,
    bulk: bulkIcons.EnjinCoinEnjBulk,
    linear: linearIcons.EnjinCoinEnjLinear,
    outline: outlineIcons.EnjinCoinEnjOutline,
    twotone: twotoneIcons.EnjinCoinEnjTwoTone
  },
  EosEos: {
    bold: boldIcons.EosEosBold,
    broken: brokenIcons.EosEosBroken,
    bulk: bulkIcons.EosEosBulk,
    linear: linearIcons.EosEosLinear,
    outline: outlineIcons.EosEosOutline,
    twotone: twotoneIcons.EosEosTwoTone
  },
  Eraser: {
    bold: boldIcons.EraserBold,
    broken: brokenIcons.EraserBroken,
    bulk: bulkIcons.EraserBulk,
    linear: linearIcons.EraserLinear,
    outline: outlineIcons.EraserOutline,
    twotone: twotoneIcons.EraserTwoTone
  },
  Eraser1: {
    linear: linearIcons.Eraser1Linear
  },
  EraserCopy: {
    bold: boldIcons.EraserCopyBold,
    broken: brokenIcons.EraserCopyBroken,
    bulk: bulkIcons.EraserCopyBulk,
    outline: outlineIcons.EraserCopyOutline,
    twotone: twotoneIcons.EraserCopyTwoTone
  },
  EthereumClassicEtc: {
    bold: boldIcons.EthereumClassicEtcBold,
    broken: brokenIcons.EthereumClassicEtcBroken,
    bulk: bulkIcons.EthereumClassicEtcBulk,
    linear: linearIcons.EthereumClassicEtcLinear,
    outline: outlineIcons.EthereumClassicEtcOutline,
    twotone: twotoneIcons.EthereumClassicEtcTwoTone
  },
  EthereumEth: {
    bold: boldIcons.EthereumEthBold,
    broken: brokenIcons.EthereumEthBroken,
    bulk: bulkIcons.EthereumEthBulk,
    linear: linearIcons.EthereumEthLinear,
    outline: outlineIcons.EthereumEthOutline,
    twotone: twotoneIcons.EthereumEthTwoTone
  },
  Export: {
    bold: boldIcons.ExportBold,
    broken: brokenIcons.ExportBroken,
    bulk: bulkIcons.ExportBulk,
    linear: linearIcons.ExportLinear,
    outline: outlineIcons.ExportOutline,
    twotone: twotoneIcons.ExportTwoTone
  },
  Export1: {
    bold: boldIcons.Export1Bold,
    broken: brokenIcons.Export1Broken,
    bulk: bulkIcons.Export1Bulk,
    linear: linearIcons.Export1Linear,
    outline: outlineIcons.Export1Outline,
    twotone: twotoneIcons.Export1TwoTone
  },
  Export2: {
    bold: boldIcons.Export2Bold,
    broken: brokenIcons.Export2Broken,
    bulk: bulkIcons.Export2Bulk,
    linear: linearIcons.Export2Linear,
    outline: outlineIcons.Export2Outline,
    twotone: twotoneIcons.Export2TwoTone
  },
  Export3: {
    bold: boldIcons.Export3Bold,
    broken: brokenIcons.Export3Broken,
    bulk: bulkIcons.Export3Bulk,
    linear: linearIcons.Export3Linear,
    outline: outlineIcons.Export3Outline,
    twotone: twotoneIcons.Export3TwoTone
  },
  ExternalDrive: {
    bold: boldIcons.ExternalDriveBold,
    broken: brokenIcons.ExternalDriveBroken,
    bulk: bulkIcons.ExternalDriveBulk,
    linear: linearIcons.ExternalDriveLinear,
    outline: outlineIcons.ExternalDriveOutline,
    twotone: twotoneIcons.ExternalDriveTwoTone
  },
  Eye: {
    bold: boldIcons.EyeBold,
    broken: brokenIcons.EyeBroken,
    linear: linearIcons.EyeLinear,
    outline: outlineIcons.EyeOutline,
    twotone: twotoneIcons.EyeTwoTone
  },
  EyeSlash: {
    bold: boldIcons.EyeSlashBold,
    broken: brokenIcons.EyeSlashBroken,
    bulk: bulkIcons.EyeSlashBulk,
    linear: linearIcons.EyeSlashLinear,
    outline: outlineIcons.EyeSlashOutline,
    twotone: twotoneIcons.EyeSlashTwoTone
  },
  Facebook: {
    bold: boldIcons.FacebookBold,
    broken: brokenIcons.FacebookBroken,
    bulk: bulkIcons.FacebookBulk,
    linear: linearIcons.FacebookLinear,
    outline: outlineIcons.FacebookOutline,
    twotone: twotoneIcons.FacebookTwoTone
  },
  Fatrows: {
    bold: boldIcons.FatrowsBold,
    broken: brokenIcons.FatrowsBroken,
    bulk: bulkIcons.FatrowsBulk,
    linear: linearIcons.FatrowsLinear,
    outline: outlineIcons.FatrowsOutline,
    twotone: twotoneIcons.FatrowsTwoTone
  },
  FavoriteChart: {
    bold: boldIcons.FavoriteChartBold,
    broken: brokenIcons.FavoriteChartBroken,
    bulk: bulkIcons.FavoriteChartBulk,
    linear: linearIcons.FavoriteChartLinear,
    outline: outlineIcons.FavoriteChartOutline,
    twotone: twotoneIcons.FavoriteChartTwoTone
  },
  Figma: {
    bold: boldIcons.FigmaBold,
    broken: brokenIcons.FigmaBroken,
    bulk: bulkIcons.FigmaBulk,
    linear: linearIcons.FigmaLinear,
    outline: outlineIcons.FigmaOutline,
    twotone: twotoneIcons.FigmaTwoTone
  },
  Figma1: {
    bold: boldIcons.Figma1Bold,
    broken: brokenIcons.Figma1Broken,
    bulk: bulkIcons.Figma1Bulk,
    linear: linearIcons.Figma1Linear,
    outline: outlineIcons.Figma1Outline,
    twotone: twotoneIcons.Figma1TwoTone
  },
  Filter: {
    bold: boldIcons.FilterBold,
    broken: brokenIcons.FilterBroken,
    bulk: bulkIcons.FilterBulk,
    linear: linearIcons.FilterLinear,
    outline: outlineIcons.FilterOutline,
    twotone: twotoneIcons.FilterTwoTone
  },
  FilterAdd: {
    bold: boldIcons.FilterAddBold,
    broken: brokenIcons.FilterAddBroken,
    bulk: bulkIcons.FilterAddBulk,
    linear: linearIcons.FilterAddLinear,
    outline: outlineIcons.FilterAddOutline,
    twotone: twotoneIcons.FilterAddTwoTone
  },
  FilterEdit: {
    bold: boldIcons.FilterEditBold,
    broken: brokenIcons.FilterEditBroken,
    bulk: bulkIcons.FilterEditBulk,
    linear: linearIcons.FilterEditLinear,
    outline: outlineIcons.FilterEditOutline,
    twotone: twotoneIcons.FilterEditTwoTone
  },
  FilterRemove: {
    bold: boldIcons.FilterRemoveBold,
    broken: brokenIcons.FilterRemoveBroken,
    bulk: bulkIcons.FilterRemoveBulk,
    linear: linearIcons.FilterRemoveLinear,
    outline: outlineIcons.FilterRemoveOutline,
    twotone: twotoneIcons.FilterRemoveTwoTone
  },
  FilterSearch: {
    bold: boldIcons.FilterSearchBold,
    broken: brokenIcons.FilterSearchBroken,
    bulk: bulkIcons.FilterSearchBulk,
    linear: linearIcons.FilterSearchLinear,
    outline: outlineIcons.FilterSearchOutline,
    twotone: twotoneIcons.FilterSearchTwoTone
  },
  FilterSquare: {
    bold: boldIcons.FilterSquareBold,
    broken: brokenIcons.FilterSquareBroken,
    bulk: bulkIcons.FilterSquareBulk,
    linear: linearIcons.FilterSquareLinear,
    outline: outlineIcons.FilterSquareOutline,
    twotone: twotoneIcons.FilterSquareTwoTone
  },
  FilterTick: {
    bold: boldIcons.FilterTickBold,
    broken: brokenIcons.FilterTickBroken,
    bulk: bulkIcons.FilterTickBulk,
    linear: linearIcons.FilterTickLinear,
    outline: outlineIcons.FilterTickOutline,
    twotone: twotoneIcons.FilterTickTwoTone
  },
  FingerCricle: {
    bold: boldIcons.FingerCricleBold,
    broken: brokenIcons.FingerCricleBroken,
    bulk: bulkIcons.FingerCricleBulk,
    linear: linearIcons.FingerCricleLinear,
    outline: outlineIcons.FingerCricleOutline,
    twotone: twotoneIcons.FingerCricleTwoTone
  },
  FingerScan: {
    bold: boldIcons.FingerScanBold,
    broken: brokenIcons.FingerScanBroken,
    bulk: bulkIcons.FingerScanBulk,
    linear: linearIcons.FingerScanLinear,
    outline: outlineIcons.FingerScanOutline,
    twotone: twotoneIcons.FingerScanTwoTone
  },
  Firstline: {
    bold: boldIcons.FirstlineBold,
    broken: brokenIcons.FirstlineBroken,
    bulk: bulkIcons.FirstlineBulk,
    linear: linearIcons.FirstlineLinear,
    outline: outlineIcons.FirstlineOutline,
    twotone: twotoneIcons.FirstlineTwoTone
  },
  Flag: {
    bold: boldIcons.FlagBold,
    broken: brokenIcons.FlagBroken,
    bulk: bulkIcons.FlagBulk,
    linear: linearIcons.FlagLinear,
    outline: outlineIcons.FlagOutline,
    twotone: twotoneIcons.FlagTwoTone
  },
  Flag2: {
    bold: boldIcons.Flag2Bold,
    broken: brokenIcons.Flag2Broken,
    bulk: bulkIcons.Flag2Bulk,
    linear: linearIcons.Flag2Linear,
    outline: outlineIcons.Flag2Outline,
    twotone: twotoneIcons.Flag2TwoTone
  },
  Flash: {
    bold: boldIcons.FlashBold,
    broken: brokenIcons.FlashBroken,
    bulk: bulkIcons.FlashBulk,
    linear: linearIcons.FlashLinear,
    outline: outlineIcons.FlashOutline,
    twotone: twotoneIcons.FlashTwoTone
  },
  FlashCircle: {
    bold: boldIcons.FlashCircleBold,
    broken: brokenIcons.FlashCircleBroken,
    bulk: bulkIcons.FlashCircleBulk,
    linear: linearIcons.FlashCircleLinear,
    outline: outlineIcons.FlashCircleOutline,
    twotone: twotoneIcons.FlashCircleTwoTone
  },
  FlashCircle1: {
    linear: linearIcons.FlashCircle1Linear
  },
  FlashCircleCopy: {
    bold: boldIcons.FlashCircleCopyBold,
    broken: brokenIcons.FlashCircleCopyBroken,
    bulk: bulkIcons.FlashCircleCopyBulk,
    linear: linearIcons.FlashCircleCopyLinear,
    outline: outlineIcons.FlashCircleCopyOutline,
    twotone: twotoneIcons.FlashCircleCopyTwoTone
  },
  FlashCopy: {
    bold: boldIcons.FlashCopyBold,
    broken: brokenIcons.FlashCopyBroken,
    bulk: bulkIcons.FlashCopyBulk,
    linear: linearIcons.FlashCopyLinear,
    outline: outlineIcons.FlashCopyOutline,
    twotone: twotoneIcons.FlashCopyTwoTone
  },
  FlashSlash: {
    bold: boldIcons.FlashSlashBold,
    broken: brokenIcons.FlashSlashBroken,
    bulk: bulkIcons.FlashSlashBulk,
    linear: linearIcons.FlashSlashLinear,
    outline: outlineIcons.FlashSlashOutline,
    twotone: twotoneIcons.FlashSlashTwoTone
  },
  Folder: {
    bold: boldIcons.FolderBold,
    broken: brokenIcons.FolderBroken,
    bulk: bulkIcons.FolderBulk,
    linear: linearIcons.FolderLinear,
    outline: outlineIcons.FolderOutline,
    twotone: twotoneIcons.FolderTwoTone
  },
  Folder2: {
    bold: boldIcons.Folder2Bold,
    broken: brokenIcons.Folder2Broken,
    bulk: bulkIcons.Folder2Bulk,
    linear: linearIcons.Folder2Linear,
    outline: outlineIcons.Folder2Outline,
    twotone: twotoneIcons.Folder2TwoTone
  },
  FolderAdd: {
    bold: boldIcons.FolderAddBold,
    broken: brokenIcons.FolderAddBroken,
    bulk: bulkIcons.FolderAddBulk,
    linear: linearIcons.FolderAddLinear,
    outline: outlineIcons.FolderAddOutline,
    twotone: twotoneIcons.FolderAddTwoTone
  },
  FolderCloud: {
    bold: boldIcons.FolderCloudBold,
    broken: brokenIcons.FolderCloudBroken,
    bulk: bulkIcons.FolderCloudBulk,
    linear: linearIcons.FolderCloudLinear,
    outline: outlineIcons.FolderCloudOutline,
    twotone: twotoneIcons.FolderCloudTwoTone
  },
  FolderConnection: {
    bold: boldIcons.FolderConnectionBold,
    broken: brokenIcons.FolderConnectionBroken,
    bulk: bulkIcons.FolderConnectionBulk,
    linear: linearIcons.FolderConnectionLinear,
    outline: outlineIcons.FolderConnectionOutline,
    twotone: twotoneIcons.FolderConnectionTwoTone
  },
  FolderCross: {
    bold: boldIcons.FolderCrossBold,
    broken: brokenIcons.FolderCrossBroken,
    bulk: bulkIcons.FolderCrossBulk,
    linear: linearIcons.FolderCrossLinear,
    outline: outlineIcons.FolderCrossOutline,
    twotone: twotoneIcons.FolderCrossTwoTone
  },
  FolderFavorite: {
    bold: boldIcons.FolderFavoriteBold,
    broken: brokenIcons.FolderFavoriteBroken,
    bulk: bulkIcons.FolderFavoriteBulk,
    linear: linearIcons.FolderFavoriteLinear,
    outline: outlineIcons.FolderFavoriteOutline,
    twotone: twotoneIcons.FolderFavoriteTwoTone
  },
  FolderMinus: {
    bold: boldIcons.FolderMinusBold,
    broken: brokenIcons.FolderMinusBroken,
    bulk: bulkIcons.FolderMinusBulk,
    linear: linearIcons.FolderMinusLinear,
    outline: outlineIcons.FolderMinusOutline,
    twotone: twotoneIcons.FolderMinusTwoTone
  },
  FolderOpen: {
    bold: boldIcons.FolderOpenBold,
    broken: brokenIcons.FolderOpenBroken,
    bulk: bulkIcons.FolderOpenBulk,
    linear: linearIcons.FolderOpenLinear,
    outline: outlineIcons.FolderOpenOutline,
    twotone: twotoneIcons.FolderOpenTwoTone
  },
  Forbidden: {
    bold: boldIcons.ForbiddenBold,
    broken: brokenIcons.ForbiddenBroken,
    bulk: bulkIcons.ForbiddenBulk,
    outline: outlineIcons.ForbiddenOutline,
    twotone: twotoneIcons.ForbiddenTwoTone
  },
  Forbidden2: {
    bold: boldIcons.Forbidden2Bold,
    broken: brokenIcons.Forbidden2Broken,
    bulk: bulkIcons.Forbidden2Bulk,
    outline: outlineIcons.Forbidden2Outline,
    twotone: twotoneIcons.Forbidden2TwoTone
  },
  FormatCircle: {
    bold: boldIcons.FormatCircleBold,
    broken: brokenIcons.FormatCircleBroken,
    bulk: bulkIcons.FormatCircleBulk,
    linear: linearIcons.FormatCircleLinear,
    outline: outlineIcons.FormatCircleOutline,
    twotone: twotoneIcons.FormatCircleTwoTone
  },
  FormatSquare: {
    bold: boldIcons.FormatSquareBold,
    broken: brokenIcons.FormatSquareBroken,
    bulk: bulkIcons.FormatSquareBulk,
    linear: linearIcons.FormatSquareLinear,
    outline: outlineIcons.FormatSquareOutline,
    twotone: twotoneIcons.FormatSquareTwoTone
  },
  Forward: {
    bold: boldIcons.ForwardBold,
    broken: brokenIcons.ForwardBroken,
    bulk: bulkIcons.ForwardBulk,
    linear: linearIcons.ForwardLinear,
    outline: outlineIcons.ForwardOutline,
    twotone: twotoneIcons.ForwardTwoTone
  },
  Forward10Seconds: {
    bold: boldIcons.Forward10SecondsBold,
    broken: brokenIcons.Forward10SecondsBroken,
    bulk: bulkIcons.Forward10SecondsBulk,
    linear: linearIcons.Forward10SecondsLinear,
    outline: outlineIcons.Forward10SecondsOutline,
    twotone: twotoneIcons.Forward10SecondsTwoTone
  },
  Forward15Seconds: {
    bold: boldIcons.Forward15SecondsBold,
    broken: brokenIcons.Forward15SecondsBroken,
    bulk: bulkIcons.Forward15SecondsBulk,
    linear: linearIcons.Forward15SecondsLinear,
    outline: outlineIcons.Forward15SecondsOutline,
    twotone: twotoneIcons.Forward15SecondsTwoTone
  },
  Forward5Seconds: {
    bold: boldIcons.Forward5SecondsBold,
    broken: brokenIcons.Forward5SecondsBroken,
    bulk: bulkIcons.Forward5SecondsBulk,
    linear: linearIcons.Forward5SecondsLinear,
    outline: outlineIcons.Forward5SecondsOutline,
    twotone: twotoneIcons.Forward5SecondsTwoTone
  },
  ForwardItem: {
    bold: boldIcons.ForwardItemBold,
    broken: brokenIcons.ForwardItemBroken,
    bulk: bulkIcons.ForwardItemBulk,
    linear: linearIcons.ForwardItemLinear,
    outline: outlineIcons.ForwardItemOutline,
    twotone: twotoneIcons.ForwardItemTwoTone
  },
  ForwardItem1: {
    linear: linearIcons.ForwardItem1Linear
  },
  ForwardSquare: {
    bold: boldIcons.ForwardSquareBold,
    broken: brokenIcons.ForwardSquareBroken,
    bulk: bulkIcons.ForwardSquareBulk,
    linear: linearIcons.ForwardSquareLinear,
    outline: outlineIcons.ForwardSquareOutline,
    twotone: twotoneIcons.ForwardSquareTwoTone
  },
  Frame: {
    bold: boldIcons.FrameBold,
    broken: brokenIcons.FrameBroken,
    bulk: bulkIcons.FrameBulk,
    linear: linearIcons.FrameLinear,
    outline: outlineIcons.FrameOutline,
    twotone: twotoneIcons.FrameTwoTone
  },
  Frame1: {
    bold: boldIcons.Frame1Bold,
    broken: brokenIcons.Frame1Broken,
    bulk: bulkIcons.Frame1Bulk,
    linear: linearIcons.Frame1Linear,
    outline: outlineIcons.Frame1Outline,
    twotone: twotoneIcons.Frame1TwoTone
  },
  Frame1Copy: {
    broken: brokenIcons.Frame1CopyBroken,
    bulk: bulkIcons.Frame1CopyBulk,
    linear: linearIcons.Frame1CopyLinear,
    outline: outlineIcons.Frame1CopyOutline
  },
  Frame1Copy2: {
    broken: brokenIcons.Frame1Copy2Broken
  },
  Frame2: {
    broken: brokenIcons.Frame2Broken,
    bulk: bulkIcons.Frame2Bulk,
    linear: linearIcons.Frame2Linear,
    twotone: twotoneIcons.Frame2TwoTone
  },
  Frame2Copy: {
    linear: linearIcons.Frame2CopyLinear
  },
  Frame3: {
    bulk: bulkIcons.Frame3Bulk
  },
  Frame4: {
    bulk: bulkIcons.Frame4Bulk
  },
  Frame5: {
    bulk: bulkIcons.Frame5Bulk
  },
  FrameCopy: {
    bold: boldIcons.FrameCopyBold,
    broken: brokenIcons.FrameCopyBroken,
    bulk: bulkIcons.FrameCopyBulk,
    linear: linearIcons.FrameCopyLinear,
    outline: outlineIcons.FrameCopyOutline,
    twotone: twotoneIcons.FrameCopyTwoTone
  },
  FrameCopy2: {
    bold: boldIcons.FrameCopy2Bold,
    broken: brokenIcons.FrameCopy2Broken,
    bulk: bulkIcons.FrameCopy2Bulk,
    linear: linearIcons.FrameCopy2Linear,
    outline: outlineIcons.FrameCopy2Outline,
    twotone: twotoneIcons.FrameCopy2TwoTone
  },
  FrameCopy3: {
    bold: boldIcons.FrameCopy3Bold,
    broken: brokenIcons.FrameCopy3Broken,
    bulk: bulkIcons.FrameCopy3Bulk,
    linear: linearIcons.FrameCopy3Linear,
    twotone: twotoneIcons.FrameCopy3TwoTone
  },
  Framer: {
    bold: boldIcons.FramerBold,
    broken: brokenIcons.FramerBroken,
    bulk: bulkIcons.FramerBulk,
    linear: linearIcons.FramerLinear,
    outline: outlineIcons.FramerOutline,
    twotone: twotoneIcons.FramerTwoTone
  },
  FtxTokenFtt: {
    bold: boldIcons.FtxTokenFttBold,
    broken: brokenIcons.FtxTokenFttBroken,
    bulk: bulkIcons.FtxTokenFttBulk,
    linear: linearIcons.FtxTokenFttLinear,
    outline: outlineIcons.FtxTokenFttOutline,
    twotone: twotoneIcons.FtxTokenFttTwoTone
  },
  Gallery: {
    bold: boldIcons.GalleryBold,
    broken: brokenIcons.GalleryBroken,
    bulk: bulkIcons.GalleryBulk,
    linear: linearIcons.GalleryLinear,
    outline: outlineIcons.GalleryOutline,
    twotone: twotoneIcons.GalleryTwoTone
  },
  GalleryAdd: {
    bold: boldIcons.GalleryAddBold,
    broken: brokenIcons.GalleryAddBroken,
    bulk: bulkIcons.GalleryAddBulk,
    linear: linearIcons.GalleryAddLinear,
    outline: outlineIcons.GalleryAddOutline,
    twotone: twotoneIcons.GalleryAddTwoTone
  },
  GalleryEdit: {
    bold: boldIcons.GalleryEditBold,
    broken: brokenIcons.GalleryEditBroken,
    bulk: bulkIcons.GalleryEditBulk,
    linear: linearIcons.GalleryEditLinear,
    outline: outlineIcons.GalleryEditOutline,
    twotone: twotoneIcons.GalleryEditTwoTone
  },
  GalleryExport: {
    bold: boldIcons.GalleryExportBold,
    broken: brokenIcons.GalleryExportBroken,
    linear: linearIcons.GalleryExportLinear,
    outline: outlineIcons.GalleryExportOutline,
    twotone: twotoneIcons.GalleryExportTwoTone
  },
  GalleryFavorite: {
    bold: boldIcons.GalleryFavoriteBold,
    broken: brokenIcons.GalleryFavoriteBroken,
    bulk: bulkIcons.GalleryFavoriteBulk,
    linear: linearIcons.GalleryFavoriteLinear,
    outline: outlineIcons.GalleryFavoriteOutline,
    twotone: twotoneIcons.GalleryFavoriteTwoTone
  },
  GalleryImport: {
    bold: boldIcons.GalleryImportBold,
    broken: brokenIcons.GalleryImportBroken,
    bulk: bulkIcons.GalleryImportBulk,
    linear: linearIcons.GalleryImportLinear,
    outline: outlineIcons.GalleryImportOutline,
    twotone: twotoneIcons.GalleryImportTwoTone
  },
  GalleryRemove: {
    bold: boldIcons.GalleryRemoveBold,
    broken: brokenIcons.GalleryRemoveBroken,
    bulk: bulkIcons.GalleryRemoveBulk,
    linear: linearIcons.GalleryRemoveLinear,
    outline: outlineIcons.GalleryRemoveOutline,
    twotone: twotoneIcons.GalleryRemoveTwoTone
  },
  GallerySlash: {
    bold: boldIcons.GallerySlashBold,
    broken: brokenIcons.GallerySlashBroken,
    bulk: bulkIcons.GallerySlashBulk,
    linear: linearIcons.GallerySlashLinear,
    outline: outlineIcons.GallerySlashOutline,
    twotone: twotoneIcons.GallerySlashTwoTone
  },
  GalleryTick: {
    bold: boldIcons.GalleryTickBold,
    broken: brokenIcons.GalleryTickBroken,
    bulk: bulkIcons.GalleryTickBulk,
    linear: linearIcons.GalleryTickLinear,
    outline: outlineIcons.GalleryTickOutline,
    twotone: twotoneIcons.GalleryTickTwoTone
  },
  Game: {
    bold: boldIcons.GameBold,
    broken: brokenIcons.GameBroken,
    bulk: bulkIcons.GameBulk,
    linear: linearIcons.GameLinear,
    outline: outlineIcons.GameOutline,
    twotone: twotoneIcons.GameTwoTone
  },
  Gameboy: {
    bold: boldIcons.GameboyBold,
    broken: brokenIcons.GameboyBroken,
    bulk: bulkIcons.GameboyBulk,
    linear: linearIcons.GameboyLinear,
    outline: outlineIcons.GameboyOutline,
    twotone: twotoneIcons.GameboyTwoTone
  },
  GasStation: {
    bold: boldIcons.GasStationBold,
    broken: brokenIcons.GasStationBroken,
    bulk: bulkIcons.GasStationBulk,
    linear: linearIcons.GasStationLinear,
    outline: outlineIcons.GasStationOutline
  },
  Gemini: {
    bold: boldIcons.GeminiBold,
    broken: brokenIcons.GeminiBroken,
    bulk: bulkIcons.GeminiBulk,
    linear: linearIcons.GeminiLinear,
    outline: outlineIcons.GeminiOutline,
    twotone: twotoneIcons.GeminiTwoTone
  },
  Gemini2: {
    bold: boldIcons.Gemini2Bold,
    broken: brokenIcons.Gemini2Broken,
    bulk: bulkIcons.Gemini2Bulk,
    linear: linearIcons.Gemini2Linear,
    outline: outlineIcons.Gemini2Outline,
    twotone: twotoneIcons.Gemini2TwoTone
  },
  Ghost: {
    bold: boldIcons.GhostBold,
    broken: brokenIcons.GhostBroken,
    bulk: bulkIcons.GhostBulk,
    linear: linearIcons.GhostLinear,
    outline: outlineIcons.GhostOutline,
    twotone: twotoneIcons.GhostTwoTone
  },
  Gift: {
    bold: boldIcons.GiftBold,
    broken: brokenIcons.GiftBroken,
    linear: linearIcons.GiftLinear,
    outline: outlineIcons.GiftOutline,
    twotone: twotoneIcons.GiftTwoTone
  },
  Glass: {
    bold: boldIcons.GlassBold,
    broken: brokenIcons.GlassBroken,
    bulk: bulkIcons.GlassBulk,
    linear: linearIcons.GlassLinear,
    outline: outlineIcons.GlassOutline,
    twotone: twotoneIcons.GlassTwoTone
  },
  GlassCopy: {
    bold: boldIcons.GlassCopyBold,
    broken: brokenIcons.GlassCopyBroken,
    bulk: bulkIcons.GlassCopyBulk,
    linear: linearIcons.GlassCopyLinear,
    outline: outlineIcons.GlassCopyOutline,
    twotone: twotoneIcons.GlassCopyTwoTone
  },
  Global: {
    bold: boldIcons.GlobalBold,
    broken: brokenIcons.GlobalBroken,
    bulk: bulkIcons.GlobalBulk,
    linear: linearIcons.GlobalLinear,
    outline: outlineIcons.GlobalOutline,
    twotone: twotoneIcons.GlobalTwoTone
  },
  GlobalEdit: {
    bold: boldIcons.GlobalEditBold,
    broken: brokenIcons.GlobalEditBroken,
    bulk: bulkIcons.GlobalEditBulk,
    linear: linearIcons.GlobalEditLinear,
    outline: outlineIcons.GlobalEditOutline,
    twotone: twotoneIcons.GlobalEditTwoTone
  },
  GlobalRefresh: {
    bold: boldIcons.GlobalRefreshBold,
    broken: brokenIcons.GlobalRefreshBroken,
    bulk: bulkIcons.GlobalRefreshBulk,
    linear: linearIcons.GlobalRefreshLinear,
    outline: outlineIcons.GlobalRefreshOutline,
    twotone: twotoneIcons.GlobalRefreshTwoTone
  },
  GlobalSearch: {
    bold: boldIcons.GlobalSearchBold,
    broken: brokenIcons.GlobalSearchBroken,
    bulk: bulkIcons.GlobalSearchBulk,
    linear: linearIcons.GlobalSearchLinear,
    outline: outlineIcons.GlobalSearchOutline,
    twotone: twotoneIcons.GlobalSearchTwoTone
  },
  Google: {
    bold: boldIcons.GoogleBold,
    broken: brokenIcons.GoogleBroken,
    bulk: bulkIcons.GoogleBulk,
    linear: linearIcons.GoogleLinear,
    outline: outlineIcons.GoogleOutline,
    twotone: twotoneIcons.GoogleTwoTone
  },
  Google1: {
    bold: boldIcons.Google1Bold,
    bulk: bulkIcons.Google1Bulk,
    linear: linearIcons.Google1Linear,
    twotone: twotoneIcons.Google1TwoTone
  },
  GoogleDrive: {
    broken: brokenIcons.GoogleDriveBroken,
    outline: outlineIcons.GoogleDriveOutline
  },
  GooglePaly: {
    outline: outlineIcons.GooglePalyOutline
  },
  GooglePlay: {
    bold: boldIcons.GooglePlayBold,
    broken: brokenIcons.GooglePlayBroken,
    bulk: bulkIcons.GooglePlayBulk,
    linear: linearIcons.GooglePlayLinear,
    twotone: twotoneIcons.GooglePlayTwoTone
  },
  Gps: {
    bold: boldIcons.GpsBold,
    broken: brokenIcons.GpsBroken,
    bulk: bulkIcons.GpsBulk,
    linear: linearIcons.GpsLinear,
    outline: outlineIcons.GpsOutline,
    twotone: twotoneIcons.GpsTwoTone
  },
  GpsSlash: {
    bold: boldIcons.GpsSlashBold,
    broken: brokenIcons.GpsSlashBroken,
    bulk: bulkIcons.GpsSlashBulk,
    linear: linearIcons.GpsSlashLinear,
    outline: outlineIcons.GpsSlashOutline,
    twotone: twotoneIcons.GpsSlashTwoTone
  },
  Grammerly: {
    bold: boldIcons.GrammerlyBold,
    broken: brokenIcons.GrammerlyBroken,
    bulk: bulkIcons.GrammerlyBulk,
    linear: linearIcons.GrammerlyLinear,
    outline: outlineIcons.GrammerlyOutline,
    twotone: twotoneIcons.GrammerlyTwoTone
  },
  Graph: {
    bold: boldIcons.GraphBold,
    broken: brokenIcons.GraphBroken,
    bulk: bulkIcons.GraphBulk,
    linear: linearIcons.GraphLinear,
    outline: outlineIcons.GraphOutline,
    twotone: twotoneIcons.GraphTwoTone
  },
  Grid1: {
    bold: boldIcons.Grid1Bold,
    broken: brokenIcons.Grid1Broken,
    bulk: bulkIcons.Grid1Bulk,
    linear: linearIcons.Grid1Linear,
    outline: outlineIcons.Grid1Outline,
    twotone: twotoneIcons.Grid1TwoTone
  },
  Grid2: {
    bold: boldIcons.Grid2Bold,
    broken: brokenIcons.Grid2Broken,
    bulk: bulkIcons.Grid2Bulk,
    linear: linearIcons.Grid2Linear,
    outline: outlineIcons.Grid2Outline,
    twotone: twotoneIcons.Grid2TwoTone
  },
  Grid3: {
    bold: boldIcons.Grid3Bold,
    broken: brokenIcons.Grid3Broken,
    bulk: bulkIcons.Grid3Bulk,
    linear: linearIcons.Grid3Linear,
    outline: outlineIcons.Grid3Outline,
    twotone: twotoneIcons.Grid3TwoTone
  },
  Grid4: {
    bold: boldIcons.Grid4Bold,
    broken: brokenIcons.Grid4Broken,
    bulk: bulkIcons.Grid4Bulk,
    linear: linearIcons.Grid4Linear,
    outline: outlineIcons.Grid4Outline,
    twotone: twotoneIcons.Grid4TwoTone
  },
  Grid5: {
    bold: boldIcons.Grid5Bold,
    broken: brokenIcons.Grid5Broken,
    bulk: bulkIcons.Grid5Bulk,
    linear: linearIcons.Grid5Linear,
    outline: outlineIcons.Grid5Outline,
    twotone: twotoneIcons.Grid5TwoTone
  },
  Grid6: {
    bold: boldIcons.Grid6Bold,
    broken: brokenIcons.Grid6Broken,
    bulk: bulkIcons.Grid6Bulk,
    linear: linearIcons.Grid6Linear,
    outline: outlineIcons.Grid6Outline,
    twotone: twotoneIcons.Grid6TwoTone
  },
  Grid7: {
    bold: boldIcons.Grid7Bold,
    broken: brokenIcons.Grid7Broken,
    bulk: bulkIcons.Grid7Bulk,
    linear: linearIcons.Grid7Linear,
    outline: outlineIcons.Grid7Outline,
    twotone: twotoneIcons.Grid7TwoTone
  },
  Grid8: {
    bold: boldIcons.Grid8Bold,
    broken: brokenIcons.Grid8Broken,
    bulk: bulkIcons.Grid8Bulk,
    linear: linearIcons.Grid8Linear,
    outline: outlineIcons.Grid8Outline,
    twotone: twotoneIcons.Grid8TwoTone
  },
  Grid9: {
    bold: boldIcons.Grid9Bold,
    broken: brokenIcons.Grid9Broken,
    bulk: bulkIcons.Grid9Bulk,
    linear: linearIcons.Grid9Linear,
    outline: outlineIcons.Grid9Outline,
    twotone: twotoneIcons.Grid9TwoTone
  },
  GridEdit: {
    bold: boldIcons.GridEditBold,
    broken: brokenIcons.GridEditBroken,
    bulk: bulkIcons.GridEditBulk,
    linear: linearIcons.GridEditLinear,
    outline: outlineIcons.GridEditOutline,
    twotone: twotoneIcons.GridEditTwoTone
  },
  GridEraser: {
    bold: boldIcons.GridEraserBold,
    broken: brokenIcons.GridEraserBroken,
    bulk: bulkIcons.GridEraserBulk,
    linear: linearIcons.GridEraserLinear,
    outline: outlineIcons.GridEraserOutline,
    twotone: twotoneIcons.GridEraserTwoTone
  },
  GridLock: {
    bold: boldIcons.GridLockBold,
    broken: brokenIcons.GridLockBroken,
    bulk: bulkIcons.GridLockBulk,
    linear: linearIcons.GridLockLinear,
    outline: outlineIcons.GridLockOutline,
    twotone: twotoneIcons.GridLockTwoTone
  },
  Group: {
    broken: brokenIcons.GroupBroken,
    bulk: bulkIcons.GroupBulk,
    linear: linearIcons.GroupLinear
  },
  Group1: {
    bulk: bulkIcons.Group1Bulk,
    linear: linearIcons.Group1Linear
  },
  Group1Copy: {
    linear: linearIcons.Group1CopyLinear
  },
  Group2: {
    linear: linearIcons.Group2Linear
  },
  Group2Copy: {
    linear: linearIcons.Group2CopyLinear
  },
  Group2Copy2: {
    linear: linearIcons.Group2Copy2Linear
  },
  Group3: {
    linear: linearIcons.Group3Linear
  },
  Group4: {
    linear: linearIcons.Group4Linear
  },
  Group5: {
    linear: linearIcons.Group5Linear
  },
  GroupCopy: {
    linear: linearIcons.GroupCopyLinear
  },
  GroupCopy2: {
    linear: linearIcons.GroupCopy2Linear
  },
  Happyemoji: {
    bold: boldIcons.HappyemojiBold,
    broken: brokenIcons.HappyemojiBroken,
    bulk: bulkIcons.HappyemojiBulk,
    linear: linearIcons.HappyemojiLinear,
    outline: outlineIcons.HappyemojiOutline,
    twotone: twotoneIcons.HappyemojiTwoTone
  },
  HarmonyOne: {
    bold: boldIcons.HarmonyOneBold,
    broken: brokenIcons.HarmonyOneBroken,
    bulk: bulkIcons.HarmonyOneBulk,
    linear: linearIcons.HarmonyOneLinear,
    outline: outlineIcons.HarmonyOneOutline,
    twotone: twotoneIcons.HarmonyOneTwoTone
  },
  Hashtag: {
    bold: boldIcons.HashtagBold,
    broken: brokenIcons.HashtagBroken,
    bulk: bulkIcons.HashtagBulk,
    linear: linearIcons.HashtagLinear,
    outline: outlineIcons.HashtagOutline,
    twotone: twotoneIcons.HashtagTwoTone
  },
  HashtagCopy: {
    bold: boldIcons.HashtagCopyBold,
    broken: brokenIcons.HashtagCopyBroken,
    bulk: bulkIcons.HashtagCopyBulk,
    linear: linearIcons.HashtagCopyLinear,
    outline: outlineIcons.HashtagCopyOutline,
    twotone: twotoneIcons.HashtagCopyTwoTone
  },
  HashtagDown: {
    bold: boldIcons.HashtagDownBold,
    broken: brokenIcons.HashtagDownBroken,
    bulk: bulkIcons.HashtagDownBulk,
    linear: linearIcons.HashtagDownLinear,
    outline: outlineIcons.HashtagDownOutline,
    twotone: twotoneIcons.HashtagDownTwoTone
  },
  HashtagUp: {
    bold: boldIcons.HashtagUpBold,
    broken: brokenIcons.HashtagUpBroken,
    bulk: bulkIcons.HashtagUpBulk,
    linear: linearIcons.HashtagUpLinear,
    outline: outlineIcons.HashtagUpOutline,
    twotone: twotoneIcons.HashtagUpTwoTone
  },
  Headphone: {
    bold: boldIcons.HeadphoneBold,
    broken: brokenIcons.HeadphoneBroken,
    bulk: bulkIcons.HeadphoneBulk,
    linear: linearIcons.HeadphoneLinear,
    outline: outlineIcons.HeadphoneOutline,
    twotone: twotoneIcons.HeadphoneTwoTone
  },
  Headphones: {
    bold: boldIcons.HeadphonesBold,
    broken: brokenIcons.HeadphonesBroken,
    bulk: bulkIcons.HeadphonesBulk,
    linear: linearIcons.HeadphonesLinear,
    outline: outlineIcons.HeadphonesOutline,
    twotone: twotoneIcons.HeadphonesTwoTone
  },
  Health: {
    bold: boldIcons.HealthBold,
    broken: brokenIcons.HealthBroken,
    bulk: bulkIcons.HealthBulk,
    linear: linearIcons.HealthLinear,
    outline: outlineIcons.HealthOutline,
    twotone: twotoneIcons.HealthTwoTone
  },
  Heart: {
    bold: boldIcons.HeartBold,
    broken: brokenIcons.HeartBroken,
    bulk: bulkIcons.HeartBulk,
    linear: linearIcons.HeartLinear,
    outline: outlineIcons.HeartOutline,
    twotone: twotoneIcons.HeartTwoTone
  },
  HeartAdd: {
    bold: boldIcons.HeartAddBold,
    broken: brokenIcons.HeartAddBroken,
    bulk: bulkIcons.HeartAddBulk,
    linear: linearIcons.HeartAddLinear,
    outline: outlineIcons.HeartAddOutline,
    twotone: twotoneIcons.HeartAddTwoTone
  },
  HeartCircle: {
    bold: boldIcons.HeartCircleBold,
    broken: brokenIcons.HeartCircleBroken,
    bulk: bulkIcons.HeartCircleBulk,
    linear: linearIcons.HeartCircleLinear,
    outline: outlineIcons.HeartCircleOutline,
    twotone: twotoneIcons.HeartCircleTwoTone
  },
  HeartEdit: {
    bold: boldIcons.HeartEditBold,
    broken: brokenIcons.HeartEditBroken,
    bulk: bulkIcons.HeartEditBulk,
    linear: linearIcons.HeartEditLinear,
    outline: outlineIcons.HeartEditOutline,
    twotone: twotoneIcons.HeartEditTwoTone
  },
  HeartRemove: {
    bold: boldIcons.HeartRemoveBold,
    broken: brokenIcons.HeartRemoveBroken,
    bulk: bulkIcons.HeartRemoveBulk,
    linear: linearIcons.HeartRemoveLinear,
    outline: outlineIcons.HeartRemoveOutline,
    twotone: twotoneIcons.HeartRemoveTwoTone
  },
  HeartSearch: {
    bold: boldIcons.HeartSearchBold,
    broken: brokenIcons.HeartSearchBroken,
    bulk: bulkIcons.HeartSearchBulk,
    linear: linearIcons.HeartSearchLinear,
    outline: outlineIcons.HeartSearchOutline,
    twotone: twotoneIcons.HeartSearchTwoTone
  },
  HeartSlash: {
    bold: boldIcons.HeartSlashBold,
    broken: brokenIcons.HeartSlashBroken,
    bulk: bulkIcons.HeartSlashBulk,
    linear: linearIcons.HeartSlashLinear,
    outline: outlineIcons.HeartSlashOutline,
    twotone: twotoneIcons.HeartSlashTwoTone
  },
  HeartTick: {
    bold: boldIcons.HeartTickBold,
    broken: brokenIcons.HeartTickBroken,
    bulk: bulkIcons.HeartTickBulk,
    linear: linearIcons.HeartTickLinear,
    outline: outlineIcons.HeartTickOutline,
    twotone: twotoneIcons.HeartTickTwoTone
  },
  HederaHashgraphHbar: {
    bold: boldIcons.HederaHashgraphHbarBold,
    broken: brokenIcons.HederaHashgraphHbarBroken,
    bulk: bulkIcons.HederaHashgraphHbarBulk,
    linear: linearIcons.HederaHashgraphHbarLinear,
    outline: outlineIcons.HederaHashgraphHbarOutline,
    twotone: twotoneIcons.HederaHashgraphHbarTwoTone
  },
  HexHex: {
    bold: boldIcons.HexHexBold,
    broken: brokenIcons.HexHexBroken,
    bulk: bulkIcons.HexHexBulk,
    linear: linearIcons.HexHexLinear,
    outline: outlineIcons.HexHexOutline,
    twotone: twotoneIcons.HexHexTwoTone
  },
  Hierarchy: {
    bold: boldIcons.HierarchyBold,
    broken: brokenIcons.HierarchyBroken,
    bulk: bulkIcons.HierarchyBulk,
    linear: linearIcons.HierarchyLinear,
    outline: outlineIcons.HierarchyOutline,
    twotone: twotoneIcons.HierarchyTwoTone
  },
  Hierarchy2: {
    bold: boldIcons.Hierarchy2Bold,
    broken: brokenIcons.Hierarchy2Broken,
    bulk: bulkIcons.Hierarchy2Bulk,
    linear: linearIcons.Hierarchy2Linear,
    outline: outlineIcons.Hierarchy2Outline,
    twotone: twotoneIcons.Hierarchy2TwoTone
  },
  Hierarchy3: {
    bold: boldIcons.Hierarchy3Bold,
    broken: brokenIcons.Hierarchy3Broken,
    bulk: bulkIcons.Hierarchy3Bulk,
    linear: linearIcons.Hierarchy3Linear,
    outline: outlineIcons.Hierarchy3Outline,
    twotone: twotoneIcons.Hierarchy3TwoTone
  },
  HierarchySquare: {
    bold: boldIcons.HierarchySquareBold,
    broken: brokenIcons.HierarchySquareBroken,
    bulk: bulkIcons.HierarchySquareBulk,
    linear: linearIcons.HierarchySquareLinear,
    outline: outlineIcons.HierarchySquareOutline,
    twotone: twotoneIcons.HierarchySquareTwoTone
  },
  HierarchySquare2: {
    bold: boldIcons.HierarchySquare2Bold,
    broken: brokenIcons.HierarchySquare2Broken,
    bulk: bulkIcons.HierarchySquare2Bulk,
    linear: linearIcons.HierarchySquare2Linear,
    outline: outlineIcons.HierarchySquare2Outline,
    twotone: twotoneIcons.HierarchySquare2TwoTone
  },
  HierarchySquare3: {
    bold: boldIcons.HierarchySquare3Bold,
    broken: brokenIcons.HierarchySquare3Broken,
    bulk: bulkIcons.HierarchySquare3Bulk,
    linear: linearIcons.HierarchySquare3Linear,
    outline: outlineIcons.HierarchySquare3Outline,
    twotone: twotoneIcons.HierarchySquare3TwoTone
  },
  Home: {
    bold: boldIcons.HomeBold,
    broken: brokenIcons.HomeBroken,
    bulk: bulkIcons.HomeBulk,
    linear: linearIcons.HomeLinear,
    outline: outlineIcons.HomeOutline,
    twotone: twotoneIcons.HomeTwoTone
  },
  Home1: {
    bold: boldIcons.Home1Bold,
    broken: brokenIcons.Home1Broken,
    bulk: bulkIcons.Home1Bulk,
    outline: outlineIcons.Home1Outline,
    twotone: twotoneIcons.Home1TwoTone
  },
  Home2: {
    bold: boldIcons.Home2Bold,
    broken: brokenIcons.Home2Broken,
    bulk: bulkIcons.Home2Bulk,
    linear: linearIcons.Home2Linear,
    outline: outlineIcons.Home2Outline,
    twotone: twotoneIcons.Home2TwoTone
  },
  HomeHashtag: {
    bold: boldIcons.HomeHashtagBold,
    broken: brokenIcons.HomeHashtagBroken,
    bulk: bulkIcons.HomeHashtagBulk,
    linear: linearIcons.HomeHashtagLinear,
    outline: outlineIcons.HomeHashtagOutline,
    twotone: twotoneIcons.HomeHashtagTwoTone
  },
  HomeTrendDown: {
    bold: boldIcons.HomeTrendDownBold,
    broken: brokenIcons.HomeTrendDownBroken,
    bulk: bulkIcons.HomeTrendDownBulk,
    linear: linearIcons.HomeTrendDownLinear,
    outline: outlineIcons.HomeTrendDownOutline,
    twotone: twotoneIcons.HomeTrendDownTwoTone
  },
  HomeTrendUp: {
    bold: boldIcons.HomeTrendUpBold,
    broken: brokenIcons.HomeTrendUpBroken,
    bulk: bulkIcons.HomeTrendUpBulk,
    linear: linearIcons.HomeTrendUpLinear,
    outline: outlineIcons.HomeTrendUpOutline,
    twotone: twotoneIcons.HomeTrendUpTwoTone
  },
  HomeWifi: {
    bold: boldIcons.HomeWifiBold,
    broken: brokenIcons.HomeWifiBroken,
    bulk: bulkIcons.HomeWifiBulk,
    linear: linearIcons.HomeWifiLinear,
    outline: outlineIcons.HomeWifiOutline,
    twotone: twotoneIcons.HomeWifiTwoTone
  },
  Hospital: {
    bold: boldIcons.HospitalBold,
    broken: brokenIcons.HospitalBroken,
    bulk: bulkIcons.HospitalBulk,
    linear: linearIcons.HospitalLinear,
    outline: outlineIcons.HospitalOutline,
    twotone: twotoneIcons.HospitalTwoTone
  },
  House: {
    bold: boldIcons.HouseBold,
    broken: brokenIcons.HouseBroken,
    bulk: bulkIcons.HouseBulk,
    linear: linearIcons.HouseLinear,
    outline: outlineIcons.HouseOutline,
    twotone: twotoneIcons.HouseTwoTone
  },
  House2: {
    bold: boldIcons.House2Bold,
    broken: brokenIcons.House2Broken,
    bulk: bulkIcons.House2Bulk,
    linear: linearIcons.House2Linear,
    outline: outlineIcons.House2Outline,
    twotone: twotoneIcons.House2TwoTone
  },
  Html3: {
    bold: boldIcons.Html3Bold,
    broken: brokenIcons.Html3Broken,
    bulk: bulkIcons.Html3Bulk,
    linear: linearIcons.Html3Linear,
    outline: outlineIcons.Html3Outline,
    twotone: twotoneIcons.Html3TwoTone
  },
  Html5: {
    bold: boldIcons.Html5Bold,
    broken: brokenIcons.Html5Broken,
    bulk: bulkIcons.Html5Bulk,
    linear: linearIcons.Html5Linear,
    outline: outlineIcons.Html5Outline,
    twotone: twotoneIcons.Html5TwoTone
  },
  HuobiTokenHt: {
    bold: boldIcons.HuobiTokenHtBold,
    broken: brokenIcons.HuobiTokenHtBroken,
    bulk: bulkIcons.HuobiTokenHtBulk,
    linear: linearIcons.HuobiTokenHtLinear,
    outline: outlineIcons.HuobiTokenHtOutline,
    twotone: twotoneIcons.HuobiTokenHtTwoTone
  },
  Icon: {
    bold: boldIcons.IconBold,
    broken: brokenIcons.IconBroken,
    outline: outlineIcons.IconOutline,
    twotone: twotoneIcons.IconTwoTone
  },
  Icon1: {
    bold: boldIcons.Icon1Bold,
    broken: brokenIcons.Icon1Broken,
    outline: outlineIcons.Icon1Outline,
    twotone: twotoneIcons.Icon1TwoTone
  },
  Icon1Copy: {
    twotone: twotoneIcons.Icon1CopyTwoTone
  },
  Icon1Copy2: {
    twotone: twotoneIcons.Icon1Copy2TwoTone
  },
  Icon24Support: {
    bold: boldIcons.Icon24SupportBold,
    broken: brokenIcons.Icon24SupportBroken,
    bulk: bulkIcons.Icon24SupportBulk,
    linear: linearIcons.Icon24SupportLinear,
    outline: outlineIcons.Icon24SupportOutline,
    twotone: twotoneIcons.Icon24SupportTwoTone
  },
  Icon3dcube: {
    bold: boldIcons.Icon3dcubeBold,
    broken: brokenIcons.Icon3dcubeBroken,
    bulk: bulkIcons.Icon3dcubeBulk,
    linear: linearIcons.Icon3dcubeLinear,
    outline: outlineIcons.Icon3dcubeOutline,
    twotone: twotoneIcons.Icon3dcubeTwoTone
  },
  Icon3dCubeScan: {
    bold: boldIcons.Icon3dCubeScanBold,
    broken: brokenIcons.Icon3dCubeScanBroken,
    bulk: bulkIcons.Icon3dCubeScanBulk,
    linear: linearIcons.Icon3dCubeScanLinear,
    outline: outlineIcons.Icon3dCubeScanOutline,
    twotone: twotoneIcons.Icon3dCubeScanTwoTone
  },
  Icon3dRotate: {
    bold: boldIcons.Icon3dRotateBold,
    broken: brokenIcons.Icon3dRotateBroken,
    bulk: bulkIcons.Icon3dRotateBulk,
    linear: linearIcons.Icon3dRotateLinear,
    outline: outlineIcons.Icon3dRotateOutline,
    twotone: twotoneIcons.Icon3dRotateTwoTone
  },
  Icon3dSquare: {
    bold: boldIcons.Icon3dSquareBold,
    broken: brokenIcons.Icon3dSquareBroken,
    bulk: bulkIcons.Icon3dSquareBulk,
    linear: linearIcons.Icon3dSquareLinear,
    outline: outlineIcons.Icon3dSquareOutline,
    twotone: twotoneIcons.Icon3dSquareTwoTone
  },
  Icon3full: {
    bold: boldIcons.Icon3fullBold,
    broken: brokenIcons.Icon3fullBroken,
    bulk: bulkIcons.Icon3fullBulk,
    linear: linearIcons.Icon3fullLinear,
    outline: outlineIcons.Icon3fullOutline,
    twotone: twotoneIcons.Icon3fullTwoTone
  },
  Icon3square: {
    bold: boldIcons.Icon3squareBold,
    broken: brokenIcons.Icon3squareBroken,
    bulk: bulkIcons.Icon3squareBulk,
    linear: linearIcons.Icon3squareLinear,
    outline: outlineIcons.Icon3squareOutline,
    twotone: twotoneIcons.Icon3squareTwoTone
  },
  IconCopy: {
    broken: brokenIcons.IconCopyBroken,
    outline: outlineIcons.IconCopyOutline,
    twotone: twotoneIcons.IconCopyTwoTone
  },
  IconCopy2: {
    twotone: twotoneIcons.IconCopy2TwoTone
  },
  IconIcx: {
    bold: boldIcons.IconIcxBold,
    broken: brokenIcons.IconIcxBroken,
    bulk: bulkIcons.IconIcxBulk,
    linear: linearIcons.IconIcxLinear,
    outline: outlineIcons.IconIcxOutline,
    twotone: twotoneIcons.IconIcxTwoTone
  },
  Illustrator: {
    bold: boldIcons.IllustratorBold,
    broken: brokenIcons.IllustratorBroken,
    bulk: bulkIcons.IllustratorBulk,
    linear: linearIcons.IllustratorLinear,
    outline: outlineIcons.IllustratorOutline,
    twotone: twotoneIcons.IllustratorTwoTone
  },
  Image: {
    bold: boldIcons.ImageBold,
    broken: brokenIcons.ImageBroken,
    bulk: bulkIcons.ImageBulk,
    linear: linearIcons.ImageLinear,
    outline: outlineIcons.ImageOutline,
    twotone: twotoneIcons.ImageTwoTone
  },
  Import: {
    bold: boldIcons.ImportBold,
    broken: brokenIcons.ImportBroken,
    bulk: bulkIcons.ImportBulk,
    linear: linearIcons.ImportLinear,
    outline: outlineIcons.ImportOutline,
    twotone: twotoneIcons.ImportTwoTone
  },
  Import1: {
    bold: boldIcons.Import1Bold,
    broken: brokenIcons.Import1Broken,
    bulk: bulkIcons.Import1Bulk,
    linear: linearIcons.Import1Linear,
    outline: outlineIcons.Import1Outline,
    twotone: twotoneIcons.Import1TwoTone
  },
  Import2: {
    bold: boldIcons.Import2Bold,
    broken: brokenIcons.Import2Broken,
    bulk: bulkIcons.Import2Bulk,
    linear: linearIcons.Import2Linear,
    outline: outlineIcons.Import2Outline,
    twotone: twotoneIcons.Import2TwoTone
  },
  Import3: {
    bold: boldIcons.Import3Bold
  },
  InfoCircle: {
    bold: boldIcons.InfoCircleBold,
    broken: brokenIcons.InfoCircleBroken,
    bulk: bulkIcons.InfoCircleBulk,
    linear: linearIcons.InfoCircleLinear,
    outline: outlineIcons.InfoCircleOutline,
    twotone: twotoneIcons.InfoCircleTwoTone
  },
  Information: {
    bold: boldIcons.InformationBold,
    broken: brokenIcons.InformationBroken,
    bulk: bulkIcons.InformationBulk,
    linear: linearIcons.InformationLinear,
    outline: outlineIcons.InformationOutline,
    twotone: twotoneIcons.InformationTwoTone
  },
  Instagram: {
    bold: boldIcons.InstagramBold,
    broken: brokenIcons.InstagramBroken,
    bulk: bulkIcons.InstagramBulk,
    linear: linearIcons.InstagramLinear,
    outline: outlineIcons.InstagramOutline,
    twotone: twotoneIcons.InstagramTwoTone
  },
  IostIost: {
    bold: boldIcons.IostIostBold,
    broken: brokenIcons.IostIostBroken,
    bulk: bulkIcons.IostIostBulk,
    linear: linearIcons.IostIostLinear,
    outline: outlineIcons.IostIostOutline,
    twotone: twotoneIcons.IostIostTwoTone
  },
  Javascript: {
    broken: brokenIcons.JavascriptBroken
  },
  JavaScript: {
    bold: boldIcons.JavaScriptBold,
    bulk: bulkIcons.JavaScriptBulk,
    linear: linearIcons.JavaScriptLinear,
    outline: outlineIcons.JavaScriptOutline,
    twotone: twotoneIcons.JavaScriptTwoTone
  },
  Js: {
    bold: boldIcons.JsBold,
    broken: brokenIcons.JsBroken,
    bulk: bulkIcons.JsBulk,
    linear: linearIcons.JsLinear,
    outline: outlineIcons.JsOutline,
    twotone: twotoneIcons.JsTwoTone
  },
  Judge: {
    bold: boldIcons.JudgeBold,
    broken: brokenIcons.JudgeBroken,
    bulk: bulkIcons.JudgeBulk,
    linear: linearIcons.JudgeLinear,
    outline: outlineIcons.JudgeOutline,
    twotone: twotoneIcons.JudgeTwoTone
  },
  Kanban: {
    bold: boldIcons.KanbanBold,
    bulk: bulkIcons.KanbanBulk,
    linear: linearIcons.KanbanLinear,
    outline: outlineIcons.KanbanOutline,
    twotone: twotoneIcons.KanbanTwoTone
  },
  Key: {
    bold: boldIcons.KeyBold,
    broken: brokenIcons.KeyBroken,
    bulk: bulkIcons.KeyBulk,
    linear: linearIcons.KeyLinear,
    outline: outlineIcons.KeyOutline,
    twotone: twotoneIcons.KeyTwoTone
  },
  Keyboard: {
    bold: boldIcons.KeyboardBold,
    broken: brokenIcons.KeyboardBroken,
    bulk: bulkIcons.KeyboardBulk,
    linear: linearIcons.KeyboardLinear,
    outline: outlineIcons.KeyboardOutline,
    twotone: twotoneIcons.KeyboardTwoTone
  },
  KeyboardOpen: {
    bold: boldIcons.KeyboardOpenBold,
    broken: brokenIcons.KeyboardOpenBroken,
    bulk: bulkIcons.KeyboardOpenBulk,
    linear: linearIcons.KeyboardOpenLinear,
    outline: outlineIcons.KeyboardOpenOutline,
    twotone: twotoneIcons.KeyboardOpenTwoTone
  },
  KeySquare: {
    bold: boldIcons.KeySquareBold,
    broken: brokenIcons.KeySquareBroken,
    bulk: bulkIcons.KeySquareBulk,
    linear: linearIcons.KeySquareLinear,
    outline: outlineIcons.KeySquareOutline,
    twotone: twotoneIcons.KeySquareTwoTone
  },
  KyberNetworkKnc: {
    bold: boldIcons.KyberNetworkKncBold,
    broken: brokenIcons.KyberNetworkKncBroken,
    bulk: bulkIcons.KyberNetworkKncBulk,
    linear: linearIcons.KyberNetworkKncLinear,
    outline: outlineIcons.KyberNetworkKncOutline,
    twotone: twotoneIcons.KyberNetworkKncTwoTone
  },
  Lamp: {
    bold: boldIcons.LampBold,
    broken: brokenIcons.LampBroken,
    bulk: bulkIcons.LampBulk,
    linear: linearIcons.LampLinear,
    outline: outlineIcons.LampOutline,
    twotone: twotoneIcons.LampTwoTone
  },
  Lamp1: {
    bold: boldIcons.Lamp1Bold
  },
  LampCharge: {
    bold: boldIcons.LampChargeBold,
    broken: brokenIcons.LampChargeBroken,
    bulk: bulkIcons.LampChargeBulk,
    linear: linearIcons.LampChargeLinear,
    outline: outlineIcons.LampChargeOutline,
    twotone: twotoneIcons.LampChargeTwoTone
  },
  LampCopy: {
    broken: brokenIcons.LampCopyBroken,
    bulk: bulkIcons.LampCopyBulk,
    linear: linearIcons.LampCopyLinear,
    outline: outlineIcons.LampCopyOutline,
    twotone: twotoneIcons.LampCopyTwoTone
  },
  LampOn: {
    bold: boldIcons.LampOnBold,
    broken: brokenIcons.LampOnBroken,
    bulk: bulkIcons.LampOnBulk,
    linear: linearIcons.LampOnLinear,
    outline: outlineIcons.LampOnOutline,
    twotone: twotoneIcons.LampOnTwoTone
  },
  LampSlash: {
    bold: boldIcons.LampSlashBold,
    broken: brokenIcons.LampSlashBroken,
    bulk: bulkIcons.LampSlashBulk,
    linear: linearIcons.LampSlashLinear,
    outline: outlineIcons.LampSlashOutline,
    twotone: twotoneIcons.LampSlashTwoTone
  },
  LanguageCircle: {
    bold: boldIcons.LanguageCircleBold,
    broken: brokenIcons.LanguageCircleBroken,
    bulk: bulkIcons.LanguageCircleBulk,
    linear: linearIcons.LanguageCircleLinear,
    outline: outlineIcons.LanguageCircleOutline,
    twotone: twotoneIcons.LanguageCircleTwoTone
  },
  LanguageSquare: {
    bold: boldIcons.LanguageSquareBold,
    broken: brokenIcons.LanguageSquareBroken,
    bulk: bulkIcons.LanguageSquareBulk,
    linear: linearIcons.LanguageSquareLinear,
    outline: outlineIcons.LanguageSquareOutline,
    twotone: twotoneIcons.LanguageSquareTwoTone
  },
  Layer: {
    bold: boldIcons.LayerBold,
    broken: brokenIcons.LayerBroken,
    bulk: bulkIcons.LayerBulk,
    linear: linearIcons.LayerLinear,
    outline: outlineIcons.LayerOutline,
    twotone: twotoneIcons.LayerTwoTone
  },
  Level: {
    bold: boldIcons.LevelBold,
    broken: brokenIcons.LevelBroken,
    bulk: bulkIcons.LevelBulk,
    linear: linearIcons.LevelLinear,
    outline: outlineIcons.LevelOutline,
    twotone: twotoneIcons.LevelTwoTone
  },
  Lifebuoy: {
    bold: boldIcons.LifebuoyBold,
    broken: brokenIcons.LifebuoyBroken,
    bulk: bulkIcons.LifebuoyBulk,
    linear: linearIcons.LifebuoyLinear,
    outline: outlineIcons.LifebuoyOutline,
    twotone: twotoneIcons.LifebuoyTwoTone
  },
  Like: {
    bold: boldIcons.LikeBold,
    broken: brokenIcons.LikeBroken,
    bulk: bulkIcons.LikeBulk,
    linear: linearIcons.LikeLinear,
    outline: outlineIcons.LikeOutline,
    twotone: twotoneIcons.LikeTwoTone
  },
  Like1: {
    bold: boldIcons.Like1Bold,
    broken: brokenIcons.Like1Broken,
    bulk: bulkIcons.Like1Bulk,
    linear: linearIcons.Like1Linear,
    outline: outlineIcons.Like1Outline,
    twotone: twotoneIcons.Like1TwoTone
  },
  LikeDislike: {
    bold: boldIcons.LikeDislikeBold,
    broken: brokenIcons.LikeDislikeBroken,
    bulk: bulkIcons.LikeDislikeBulk,
    linear: linearIcons.LikeDislikeLinear,
    outline: outlineIcons.LikeDislikeOutline,
    twotone: twotoneIcons.LikeDislikeTwoTone
  },
  LikeShapes: {
    bold: boldIcons.LikeShapesBold,
    broken: brokenIcons.LikeShapesBroken,
    bulk: bulkIcons.LikeShapesBulk,
    linear: linearIcons.LikeShapesLinear,
    outline: outlineIcons.LikeShapesOutline,
    twotone: twotoneIcons.LikeShapesTwoTone
  },
  LikeTag: {
    bold: boldIcons.LikeTagBold,
    broken: brokenIcons.LikeTagBroken,
    bulk: bulkIcons.LikeTagBulk,
    linear: linearIcons.LikeTagLinear,
    outline: outlineIcons.LikeTagOutline,
    twotone: twotoneIcons.LikeTagTwoTone
  },
  Link: {
    bold: boldIcons.LinkBold,
    broken: brokenIcons.LinkBroken,
    bulk: bulkIcons.LinkBulk,
    linear: linearIcons.LinkLinear,
    outline: outlineIcons.LinkOutline,
    twotone: twotoneIcons.LinkTwoTone
  },
  Link1: {
    bold: boldIcons.Link1Bold,
    broken: brokenIcons.Link1Broken,
    bulk: bulkIcons.Link1Bulk,
    linear: linearIcons.Link1Linear,
    outline: outlineIcons.Link1Outline,
    twotone: twotoneIcons.Link1TwoTone
  },
  Link2: {
    bold: boldIcons.Link2Bold,
    broken: brokenIcons.Link2Broken,
    bulk: bulkIcons.Link2Bulk,
    linear: linearIcons.Link2Linear,
    outline: outlineIcons.Link2Outline,
    twotone: twotoneIcons.Link2TwoTone
  },
  Link21: {
    bold: boldIcons.Link21Bold,
    broken: brokenIcons.Link21Broken,
    bulk: bulkIcons.Link21Bulk,
    linear: linearIcons.Link21Linear,
    outline: outlineIcons.Link21Outline,
    twotone: twotoneIcons.Link21TwoTone
  },
  LinkCircle: {
    bold: boldIcons.LinkCircleBold,
    broken: brokenIcons.LinkCircleBroken,
    bulk: bulkIcons.LinkCircleBulk,
    linear: linearIcons.LinkCircleLinear,
    outline: outlineIcons.LinkCircleOutline,
    twotone: twotoneIcons.LinkCircleTwoTone
  },
  LinkSquare: {
    bold: boldIcons.LinkSquareBold,
    broken: brokenIcons.LinkSquareBroken,
    bulk: bulkIcons.LinkSquareBulk,
    linear: linearIcons.LinkSquareLinear,
    outline: outlineIcons.LinkSquareOutline,
    twotone: twotoneIcons.LinkSquareTwoTone
  },
  LitecoinLtc: {
    bold: boldIcons.LitecoinLtcBold,
    broken: brokenIcons.LitecoinLtcBroken,
    bulk: bulkIcons.LitecoinLtcBulk,
    linear: linearIcons.LitecoinLtcLinear,
    outline: outlineIcons.LitecoinLtcOutline,
    twotone: twotoneIcons.LitecoinLtcTwoTone
  },
  Location: {
    bold: boldIcons.LocationBold,
    broken: brokenIcons.LocationBroken,
    bulk: bulkIcons.LocationBulk,
    linear: linearIcons.LocationLinear,
    outline: outlineIcons.LocationOutline,
    twotone: twotoneIcons.LocationTwoTone
  },
  LocationAdd: {
    bold: boldIcons.LocationAddBold,
    broken: brokenIcons.LocationAddBroken,
    bulk: bulkIcons.LocationAddBulk,
    linear: linearIcons.LocationAddLinear,
    outline: outlineIcons.LocationAddOutline,
    twotone: twotoneIcons.LocationAddTwoTone
  },
  LocationCross: {
    bold: boldIcons.LocationCrossBold,
    broken: brokenIcons.LocationCrossBroken,
    bulk: bulkIcons.LocationCrossBulk,
    linear: linearIcons.LocationCrossLinear,
    outline: outlineIcons.LocationCrossOutline,
    twotone: twotoneIcons.LocationCrossTwoTone
  },
  LocationMinus: {
    bold: boldIcons.LocationMinusBold,
    broken: brokenIcons.LocationMinusBroken,
    bulk: bulkIcons.LocationMinusBulk,
    linear: linearIcons.LocationMinusLinear,
    outline: outlineIcons.LocationMinusOutline,
    twotone: twotoneIcons.LocationMinusTwoTone
  },
  LocationSlash: {
    bold: boldIcons.LocationSlashBold,
    broken: brokenIcons.LocationSlashBroken,
    bulk: bulkIcons.LocationSlashBulk,
    linear: linearIcons.LocationSlashLinear,
    outline: outlineIcons.LocationSlashOutline,
    twotone: twotoneIcons.LocationSlashTwoTone
  },
  LocationTick: {
    bold: boldIcons.LocationTickBold,
    broken: brokenIcons.LocationTickBroken,
    bulk: bulkIcons.LocationTickBulk,
    linear: linearIcons.LocationTickLinear,
    outline: outlineIcons.LocationTickOutline,
    twotone: twotoneIcons.LocationTickTwoTone
  },
  Lock: {
    bold: boldIcons.LockBold,
    broken: brokenIcons.LockBroken,
    bulk: bulkIcons.LockBulk,
    linear: linearIcons.LockLinear,
    outline: outlineIcons.LockOutline,
    twotone: twotoneIcons.LockTwoTone
  },
  Lock1: {
    bold: boldIcons.Lock1Bold,
    broken: brokenIcons.Lock1Broken,
    bulk: bulkIcons.Lock1Bulk,
    linear: linearIcons.Lock1Linear,
    outline: outlineIcons.Lock1Outline,
    twotone: twotoneIcons.Lock1TwoTone
  },
  LockCircle: {
    bold: boldIcons.LockCircleBold,
    broken: brokenIcons.LockCircleBroken,
    bulk: bulkIcons.LockCircleBulk,
    linear: linearIcons.LockCircleLinear,
    outline: outlineIcons.LockCircleOutline,
    twotone: twotoneIcons.LockCircleTwoTone
  },
  LockSlash: {
    bold: boldIcons.LockSlashBold,
    broken: brokenIcons.LockSlashBroken,
    bulk: bulkIcons.LockSlashBulk,
    linear: linearIcons.LockSlashLinear,
    outline: outlineIcons.LockSlashOutline,
    twotone: twotoneIcons.LockSlashTwoTone
  },
  Login: {
    bold: boldIcons.LoginBold,
    broken: brokenIcons.LoginBroken,
    bulk: bulkIcons.LoginBulk,
    linear: linearIcons.LoginLinear,
    outline: outlineIcons.LoginOutline,
    twotone: twotoneIcons.LoginTwoTone
  },
  Login1: {
    bold: boldIcons.Login1Bold,
    broken: brokenIcons.Login1Broken,
    bulk: bulkIcons.Login1Bulk,
    linear: linearIcons.Login1Linear,
    outline: outlineIcons.Login1Outline,
    twotone: twotoneIcons.Login1TwoTone
  },
  Logout: {
    bold: boldIcons.LogoutBold,
    broken: brokenIcons.LogoutBroken,
    bulk: bulkIcons.LogoutBulk,
    linear: linearIcons.LogoutLinear,
    outline: outlineIcons.LogoutOutline,
    twotone: twotoneIcons.LogoutTwoTone
  },
  Logout1: {
    bold: boldIcons.Logout1Bold,
    broken: brokenIcons.Logout1Broken,
    bulk: bulkIcons.Logout1Bulk,
    linear: linearIcons.Logout1Linear,
    outline: outlineIcons.Logout1Outline,
    twotone: twotoneIcons.Logout1TwoTone
  },
  Lovely: {
    bold: boldIcons.LovelyBold,
    broken: brokenIcons.LovelyBroken,
    bulk: bulkIcons.LovelyBulk,
    linear: linearIcons.LovelyLinear,
    outline: outlineIcons.LovelyOutline,
    twotone: twotoneIcons.LovelyTwoTone
  },
  Magicpen: {
    bold: boldIcons.MagicpenBold,
    broken: brokenIcons.MagicpenBroken,
    bulk: bulkIcons.MagicpenBulk,
    linear: linearIcons.MagicpenLinear,
    outline: outlineIcons.MagicpenOutline,
    twotone: twotoneIcons.MagicpenTwoTone
  },
  MagicStar: {
    bold: boldIcons.MagicStarBold,
    broken: brokenIcons.MagicStarBroken,
    bulk: bulkIcons.MagicStarBulk,
    linear: linearIcons.MagicStarLinear,
    outline: outlineIcons.MagicStarOutline,
    twotone: twotoneIcons.MagicStarTwoTone
  },
  MainComponent: {
    bold: boldIcons.MainComponentBold,
    broken: brokenIcons.MainComponentBroken,
    bulk: bulkIcons.MainComponentBulk,
    linear: linearIcons.MainComponentLinear,
    outline: outlineIcons.MainComponentOutline,
    twotone: twotoneIcons.MainComponentTwoTone
  },
  MainComponent1: {
    linear: linearIcons.MainComponent1Linear
  },
  MakerMkr: {
    bold: boldIcons.MakerMkrBold,
    broken: brokenIcons.MakerMkrBroken,
    bulk: bulkIcons.MakerMkrBulk,
    linear: linearIcons.MakerMkrLinear,
    outline: outlineIcons.MakerMkrOutline,
    twotone: twotoneIcons.MakerMkrTwoTone
  },
  Man: {
    bold: boldIcons.ManBold,
    broken: brokenIcons.ManBroken,
    bulk: bulkIcons.ManBulk,
    linear: linearIcons.ManLinear,
    outline: outlineIcons.ManOutline,
    twotone: twotoneIcons.ManTwoTone
  },
  Map: {
    bold: boldIcons.MapBold,
    broken: brokenIcons.MapBroken,
    bulk: bulkIcons.MapBulk,
    linear: linearIcons.MapLinear,
    outline: outlineIcons.MapOutline,
    twotone: twotoneIcons.MapTwoTone
  },
  Map1: {
    bold: boldIcons.Map1Bold,
    broken: brokenIcons.Map1Broken,
    bulk: bulkIcons.Map1Bulk,
    linear: linearIcons.Map1Linear,
    outline: outlineIcons.Map1Outline
  },
  MapCopy: {
    twotone: twotoneIcons.MapCopyTwoTone
  },
  Mask: {
    bold: boldIcons.MaskBold,
    broken: brokenIcons.MaskBroken,
    bulk: bulkIcons.MaskBulk,
    linear: linearIcons.MaskLinear,
    outline: outlineIcons.MaskOutline,
    twotone: twotoneIcons.MaskTwoTone
  },
  Mask1: {
    bold: boldIcons.Mask1Bold,
    broken: brokenIcons.Mask1Broken,
    bulk: bulkIcons.Mask1Bulk,
    linear: linearIcons.Mask1Linear,
    outline: outlineIcons.Mask1Outline,
    twotone: twotoneIcons.Mask1TwoTone
  },
  Mask2: {
    bold: boldIcons.Mask2Bold,
    broken: brokenIcons.Mask2Broken,
    bulk: bulkIcons.Mask2Bulk,
    linear: linearIcons.Mask2Linear,
    outline: outlineIcons.Mask2Outline,
    twotone: twotoneIcons.Mask2TwoTone
  },
  Mask3: {
    linear: linearIcons.Mask3Linear
  },
  Math: {
    bold: boldIcons.MathBold,
    broken: brokenIcons.MathBroken,
    bulk: bulkIcons.MathBulk,
    linear: linearIcons.MathLinear,
    outline: outlineIcons.MathOutline,
    twotone: twotoneIcons.MathTwoTone
  },
  Maximize: {
    bold: boldIcons.MaximizeBold,
    broken: brokenIcons.MaximizeBroken,
    bulk: bulkIcons.MaximizeBulk,
    linear: linearIcons.MaximizeLinear,
    outline: outlineIcons.MaximizeOutline,
    twotone: twotoneIcons.MaximizeTwoTone
  },
  Maximize1: {
    bold: boldIcons.Maximize1Bold,
    broken: brokenIcons.Maximize1Broken,
    bulk: bulkIcons.Maximize1Bulk,
    linear: linearIcons.Maximize1Linear,
    outline: outlineIcons.Maximize1Outline,
    twotone: twotoneIcons.Maximize1TwoTone
  },
  Maximize2: {
    bold: boldIcons.Maximize2Bold,
    broken: brokenIcons.Maximize2Broken,
    bulk: bulkIcons.Maximize2Bulk,
    linear: linearIcons.Maximize2Linear,
    outline: outlineIcons.Maximize2Outline,
    twotone: twotoneIcons.Maximize2TwoTone
  },
  Maximize3: {
    bold: boldIcons.Maximize3Bold,
    broken: brokenIcons.Maximize3Broken,
    bulk: bulkIcons.Maximize3Bulk,
    linear: linearIcons.Maximize3Linear,
    outline: outlineIcons.Maximize3Outline,
    twotone: twotoneIcons.Maximize3TwoTone
  },
  Maximize4: {
    bold: boldIcons.Maximize4Bold,
    broken: brokenIcons.Maximize4Broken,
    bulk: bulkIcons.Maximize4Bulk,
    linear: linearIcons.Maximize4Linear,
    outline: outlineIcons.Maximize4Outline,
    twotone: twotoneIcons.Maximize4TwoTone
  },
  MaximizeCircle: {
    bold: boldIcons.MaximizeCircleBold,
    broken: brokenIcons.MaximizeCircleBroken,
    linear: linearIcons.MaximizeCircleLinear,
    outline: outlineIcons.MaximizeCircleOutline
  },
  MaximizeCopy: {
    bold: boldIcons.MaximizeCopyBold,
    broken: brokenIcons.MaximizeCopyBroken,
    bulk: bulkIcons.MaximizeCopyBulk,
    linear: linearIcons.MaximizeCopyLinear,
    outline: outlineIcons.MaximizeCopyOutline,
    twotone: twotoneIcons.MaximizeCopyTwoTone
  },
  Medal: {
    bold: boldIcons.MedalBold,
    broken: brokenIcons.MedalBroken,
    bulk: bulkIcons.MedalBulk,
    linear: linearIcons.MedalLinear,
    outline: outlineIcons.MedalOutline,
    twotone: twotoneIcons.MedalTwoTone
  },
  MedalStar: {
    bold: boldIcons.MedalStarBold,
    broken: brokenIcons.MedalStarBroken,
    bulk: bulkIcons.MedalStarBulk,
    linear: linearIcons.MedalStarLinear,
    outline: outlineIcons.MedalStarOutline,
    twotone: twotoneIcons.MedalStarTwoTone
  },
  Menu: {
    bold: boldIcons.MenuBold,
    broken: brokenIcons.MenuBroken,
    bulk: bulkIcons.MenuBulk,
    linear: linearIcons.MenuLinear,
    outline: outlineIcons.MenuOutline,
    twotone: twotoneIcons.MenuTwoTone
  },
  MenuBoard: {
    bold: boldIcons.MenuBoardBold,
    broken: brokenIcons.MenuBoardBroken,
    bulk: bulkIcons.MenuBoardBulk,
    linear: linearIcons.MenuBoardLinear,
    outline: outlineIcons.MenuBoardOutline,
    twotone: twotoneIcons.MenuBoardTwoTone
  },
  MenuCopy: {
    bold: boldIcons.MenuCopyBold,
    broken: brokenIcons.MenuCopyBroken,
    bulk: bulkIcons.MenuCopyBulk,
    linear: linearIcons.MenuCopyLinear,
    outline: outlineIcons.MenuCopyOutline,
    twotone: twotoneIcons.MenuCopyTwoTone
  },
  Message: {
    bold: boldIcons.MessageBold,
    broken: brokenIcons.MessageBroken,
    bulk: bulkIcons.MessageBulk,
    linear: linearIcons.MessageLinear,
    outline: outlineIcons.MessageOutline,
    twotone: twotoneIcons.MessageTwoTone
  },
  Message2: {
    bold: boldIcons.Message2Bold,
    broken: brokenIcons.Message2Broken,
    bulk: bulkIcons.Message2Bulk,
    linear: linearIcons.Message2Linear,
    outline: outlineIcons.Message2Outline,
    twotone: twotoneIcons.Message2TwoTone
  },
  MessageAdd: {
    bold: boldIcons.MessageAddBold,
    broken: brokenIcons.MessageAddBroken,
    bulk: bulkIcons.MessageAddBulk,
    linear: linearIcons.MessageAddLinear,
    outline: outlineIcons.MessageAddOutline,
    twotone: twotoneIcons.MessageAddTwoTone
  },
  MessageAdd1: {
    bold: boldIcons.MessageAdd1Bold,
    broken: brokenIcons.MessageAdd1Broken,
    bulk: bulkIcons.MessageAdd1Bulk,
    linear: linearIcons.MessageAdd1Linear,
    outline: outlineIcons.MessageAdd1Outline,
    twotone: twotoneIcons.MessageAdd1TwoTone
  },
  MessageCircle: {
    bold: boldIcons.MessageCircleBold,
    broken: brokenIcons.MessageCircleBroken,
    bulk: bulkIcons.MessageCircleBulk,
    linear: linearIcons.MessageCircleLinear,
    outline: outlineIcons.MessageCircleOutline,
    twotone: twotoneIcons.MessageCircleTwoTone
  },
  MessageEdit: {
    bold: boldIcons.MessageEditBold,
    broken: brokenIcons.MessageEditBroken,
    bulk: bulkIcons.MessageEditBulk,
    linear: linearIcons.MessageEditLinear,
    outline: outlineIcons.MessageEditOutline,
    twotone: twotoneIcons.MessageEditTwoTone
  },
  MessageFavorite: {
    bold: boldIcons.MessageFavoriteBold,
    broken: brokenIcons.MessageFavoriteBroken,
    bulk: bulkIcons.MessageFavoriteBulk,
    linear: linearIcons.MessageFavoriteLinear,
    outline: outlineIcons.MessageFavoriteOutline,
    twotone: twotoneIcons.MessageFavoriteTwoTone
  },
  MessageMinus: {
    bold: boldIcons.MessageMinusBold,
    broken: brokenIcons.MessageMinusBroken,
    bulk: bulkIcons.MessageMinusBulk,
    linear: linearIcons.MessageMinusLinear,
    outline: outlineIcons.MessageMinusOutline,
    twotone: twotoneIcons.MessageMinusTwoTone
  },
  MessageNotif: {
    bold: boldIcons.MessageNotifBold,
    broken: brokenIcons.MessageNotifBroken,
    bulk: bulkIcons.MessageNotifBulk,
    linear: linearIcons.MessageNotifLinear,
    outline: outlineIcons.MessageNotifOutline,
    twotone: twotoneIcons.MessageNotifTwoTone
  },
  MessageProgramming: {
    bold: boldIcons.MessageProgrammingBold,
    broken: brokenIcons.MessageProgrammingBroken,
    bulk: bulkIcons.MessageProgrammingBulk,
    linear: linearIcons.MessageProgrammingLinear,
    outline: outlineIcons.MessageProgrammingOutline,
    twotone: twotoneIcons.MessageProgrammingTwoTone
  },
  MessageQuestion: {
    bold: boldIcons.MessageQuestionBold,
    broken: brokenIcons.MessageQuestionBroken,
    bulk: bulkIcons.MessageQuestionBulk,
    linear: linearIcons.MessageQuestionLinear,
    outline: outlineIcons.MessageQuestionOutline,
    twotone: twotoneIcons.MessageQuestionTwoTone
  },
  MessageRemove: {
    bold: boldIcons.MessageRemoveBold,
    broken: brokenIcons.MessageRemoveBroken,
    bulk: bulkIcons.MessageRemoveBulk,
    linear: linearIcons.MessageRemoveLinear,
    outline: outlineIcons.MessageRemoveOutline,
    twotone: twotoneIcons.MessageRemoveTwoTone
  },
  Messages: {
    bold: boldIcons.MessagesBold,
    broken: brokenIcons.MessagesBroken,
    bulk: bulkIcons.MessagesBulk,
    linear: linearIcons.MessagesLinear,
    outline: outlineIcons.MessagesOutline,
    twotone: twotoneIcons.MessagesTwoTone
  },
  Messages1: {
    bold: boldIcons.Messages1Bold,
    broken: brokenIcons.Messages1Broken,
    bulk: bulkIcons.Messages1Bulk,
    linear: linearIcons.Messages1Linear,
    outline: outlineIcons.Messages1Outline,
    twotone: twotoneIcons.Messages1TwoTone
  },
  Messages2: {
    bold: boldIcons.Messages2Bold,
    broken: brokenIcons.Messages2Broken,
    bulk: bulkIcons.Messages2Bulk,
    linear: linearIcons.Messages2Linear,
    outline: outlineIcons.Messages2Outline,
    twotone: twotoneIcons.Messages2TwoTone
  },
  Messages3: {
    bold: boldIcons.Messages3Bold,
    broken: brokenIcons.Messages3Broken,
    bulk: bulkIcons.Messages3Bulk,
    linear: linearIcons.Messages3Linear,
    outline: outlineIcons.Messages3Outline,
    twotone: twotoneIcons.Messages3TwoTone
  },
  MessageSearch: {
    bold: boldIcons.MessageSearchBold,
    broken: brokenIcons.MessageSearchBroken,
    bulk: bulkIcons.MessageSearchBulk,
    linear: linearIcons.MessageSearchLinear,
    outline: outlineIcons.MessageSearchOutline,
    twotone: twotoneIcons.MessageSearchTwoTone
  },
  MessageSquare: {
    bold: boldIcons.MessageSquareBold,
    broken: brokenIcons.MessageSquareBroken,
    bulk: bulkIcons.MessageSquareBulk,
    linear: linearIcons.MessageSquareLinear,
    outline: outlineIcons.MessageSquareOutline,
    twotone: twotoneIcons.MessageSquareTwoTone
  },
  MessageText: {
    bold: boldIcons.MessageTextBold,
    broken: brokenIcons.MessageTextBroken,
    bulk: bulkIcons.MessageTextBulk,
    linear: linearIcons.MessageTextLinear,
    outline: outlineIcons.MessageTextOutline,
    twotone: twotoneIcons.MessageTextTwoTone
  },
  MessageText1: {
    bold: boldIcons.MessageText1Bold,
    broken: brokenIcons.MessageText1Broken,
    bulk: bulkIcons.MessageText1Bulk,
    linear: linearIcons.MessageText1Linear,
    outline: outlineIcons.MessageText1Outline,
    twotone: twotoneIcons.MessageText1TwoTone
  },
  MessageTick: {
    bold: boldIcons.MessageTickBold,
    broken: brokenIcons.MessageTickBroken,
    bulk: bulkIcons.MessageTickBulk,
    linear: linearIcons.MessageTickLinear,
    outline: outlineIcons.MessageTickOutline,
    twotone: twotoneIcons.MessageTickTwoTone
  },
  MessageTime: {
    bold: boldIcons.MessageTimeBold,
    broken: brokenIcons.MessageTimeBroken,
    bulk: bulkIcons.MessageTimeBulk,
    linear: linearIcons.MessageTimeLinear,
    outline: outlineIcons.MessageTimeOutline,
    twotone: twotoneIcons.MessageTimeTwoTone
  },
  Messenger: {
    bold: boldIcons.MessengerBold,
    broken: brokenIcons.MessengerBroken,
    bulk: bulkIcons.MessengerBulk,
    linear: linearIcons.MessengerLinear,
    outline: outlineIcons.MessengerOutline,
    twotone: twotoneIcons.MessengerTwoTone
  },
  Microphone: {
    bold: boldIcons.MicrophoneBold,
    broken: brokenIcons.MicrophoneBroken,
    bulk: bulkIcons.MicrophoneBulk,
    linear: linearIcons.MicrophoneLinear,
    outline: outlineIcons.MicrophoneOutline,
    twotone: twotoneIcons.MicrophoneTwoTone
  },
  Microphone2: {
    bold: boldIcons.Microphone2Bold,
    broken: brokenIcons.Microphone2Broken,
    bulk: bulkIcons.Microphone2Bulk,
    linear: linearIcons.Microphone2Linear,
    outline: outlineIcons.Microphone2Outline,
    twotone: twotoneIcons.Microphone2TwoTone
  },
  MicrophoneSlash: {
    bold: boldIcons.MicrophoneSlashBold,
    broken: brokenIcons.MicrophoneSlashBroken,
    bulk: bulkIcons.MicrophoneSlashBulk,
    linear: linearIcons.MicrophoneSlashLinear,
    outline: outlineIcons.MicrophoneSlashOutline,
    twotone: twotoneIcons.MicrophoneSlashTwoTone
  },
  MicrophoneSlash1: {
    bold: boldIcons.MicrophoneSlash1Bold,
    broken: brokenIcons.MicrophoneSlash1Broken,
    bulk: bulkIcons.MicrophoneSlash1Bulk,
    linear: linearIcons.MicrophoneSlash1Linear,
    outline: outlineIcons.MicrophoneSlash1Outline,
    twotone: twotoneIcons.MicrophoneSlash1TwoTone
  },
  Microscope: {
    bold: boldIcons.MicroscopeBold,
    broken: brokenIcons.MicroscopeBroken,
    bulk: bulkIcons.MicroscopeBulk,
    linear: linearIcons.MicroscopeLinear,
    outline: outlineIcons.MicroscopeOutline,
    twotone: twotoneIcons.MicroscopeTwoTone
  },
  Milk: {
    bold: boldIcons.MilkBold,
    broken: brokenIcons.MilkBroken,
    bulk: bulkIcons.MilkBulk,
    linear: linearIcons.MilkLinear,
    outline: outlineIcons.MilkOutline,
    twotone: twotoneIcons.MilkTwoTone
  },
  MiniMusicSqaure: {
    bold: boldIcons.MiniMusicSqaureBold,
    broken: brokenIcons.MiniMusicSqaureBroken,
    bulk: bulkIcons.MiniMusicSqaureBulk,
    linear: linearIcons.MiniMusicSqaureLinear,
    outline: outlineIcons.MiniMusicSqaureOutline,
    twotone: twotoneIcons.MiniMusicSqaureTwoTone
  },
  Minus: {
    bold: boldIcons.MinusBold,
    broken: brokenIcons.MinusBroken,
    bulk: bulkIcons.MinusBulk,
    linear: linearIcons.MinusLinear,
    outline: outlineIcons.MinusOutline,
    twotone: twotoneIcons.MinusTwoTone
  },
  MinusCirlce: {
    bold: boldIcons.MinusCirlceBold,
    broken: brokenIcons.MinusCirlceBroken,
    bulk: bulkIcons.MinusCirlceBulk,
    linear: linearIcons.MinusCirlceLinear,
    outline: outlineIcons.MinusCirlceOutline,
    twotone: twotoneIcons.MinusCirlceTwoTone
  },
  MinusSquare: {
    bold: boldIcons.MinusSquareBold,
    broken: brokenIcons.MinusSquareBroken,
    bulk: bulkIcons.MinusSquareBulk,
    linear: linearIcons.MinusSquareLinear,
    outline: outlineIcons.MinusSquareOutline,
    twotone: twotoneIcons.MinusSquareTwoTone
  },
  Mirror: {
    bold: boldIcons.MirrorBold,
    broken: brokenIcons.MirrorBroken,
    bulk: bulkIcons.MirrorBulk,
    linear: linearIcons.MirrorLinear,
    outline: outlineIcons.MirrorOutline,
    twotone: twotoneIcons.MirrorTwoTone
  },
  MirroringScreen: {
    bold: boldIcons.MirroringScreenBold,
    broken: brokenIcons.MirroringScreenBroken,
    bulk: bulkIcons.MirroringScreenBulk,
    linear: linearIcons.MirroringScreenLinear,
    outline: outlineIcons.MirroringScreenOutline,
    twotone: twotoneIcons.MirroringScreenTwoTone
  },
  Mobile: {
    bold: boldIcons.MobileBold,
    broken: brokenIcons.MobileBroken,
    bulk: bulkIcons.MobileBulk,
    linear: linearIcons.MobileLinear,
    outline: outlineIcons.MobileOutline,
    twotone: twotoneIcons.MobileTwoTone
  },
  MobileProgramming: {
    bold: boldIcons.MobileProgrammingBold,
    broken: brokenIcons.MobileProgrammingBroken,
    bulk: bulkIcons.MobileProgrammingBulk,
    linear: linearIcons.MobileProgrammingLinear,
    outline: outlineIcons.MobileProgrammingOutline,
    twotone: twotoneIcons.MobileProgrammingTwoTone
  },
  MoneroXmr: {
    bold: boldIcons.MoneroXmrBold,
    broken: brokenIcons.MoneroXmrBroken,
    linear: linearIcons.MoneroXmrLinear,
    outline: outlineIcons.MoneroXmrOutline,
    twotone: twotoneIcons.MoneroXmrTwoTone
  },
  Money: {
    bold: boldIcons.MoneyBold,
    broken: brokenIcons.MoneyBroken,
    bulk: bulkIcons.MoneyBulk,
    linear: linearIcons.MoneyLinear,
    outline: outlineIcons.MoneyOutline,
    twotone: twotoneIcons.MoneyTwoTone
  },
  Money2: {
    bold: boldIcons.Money2Bold,
    broken: brokenIcons.Money2Broken,
    bulk: bulkIcons.Money2Bulk,
    linear: linearIcons.Money2Linear,
    outline: outlineIcons.Money2Outline,
    twotone: twotoneIcons.Money2TwoTone
  },
  Money3: {
    bold: boldIcons.Money3Bold,
    broken: brokenIcons.Money3Broken,
    bulk: bulkIcons.Money3Bulk,
    linear: linearIcons.Money3Linear,
    outline: outlineIcons.Money3Outline,
    twotone: twotoneIcons.Money3TwoTone
  },
  Money4: {
    bold: boldIcons.Money4Bold,
    broken: brokenIcons.Money4Broken,
    bulk: bulkIcons.Money4Bulk,
    linear: linearIcons.Money4Linear,
    outline: outlineIcons.Money4Outline,
    twotone: twotoneIcons.Money4TwoTone
  },
  MoneyAdd: {
    bold: boldIcons.MoneyAddBold,
    broken: brokenIcons.MoneyAddBroken,
    bulk: bulkIcons.MoneyAddBulk,
    linear: linearIcons.MoneyAddLinear,
    outline: outlineIcons.MoneyAddOutline,
    twotone: twotoneIcons.MoneyAddTwoTone
  },
  MoneyChange: {
    bold: boldIcons.MoneyChangeBold,
    broken: brokenIcons.MoneyChangeBroken,
    bulk: bulkIcons.MoneyChangeBulk,
    linear: linearIcons.MoneyChangeLinear,
    outline: outlineIcons.MoneyChangeOutline,
    twotone: twotoneIcons.MoneyChangeTwoTone
  },
  MoneyForbidden: {
    bold: boldIcons.MoneyForbiddenBold,
    broken: brokenIcons.MoneyForbiddenBroken,
    bulk: bulkIcons.MoneyForbiddenBulk,
    linear: linearIcons.MoneyForbiddenLinear,
    outline: outlineIcons.MoneyForbiddenOutline,
    twotone: twotoneIcons.MoneyForbiddenTwoTone
  },
  MoneyRecive: {
    bold: boldIcons.MoneyReciveBold,
    broken: brokenIcons.MoneyReciveBroken,
    bulk: bulkIcons.MoneyReciveBulk,
    linear: linearIcons.MoneyReciveLinear,
    outline: outlineIcons.MoneyReciveOutline,
    twotone: twotoneIcons.MoneyReciveTwoTone
  },
  MoneyRemove: {
    bold: boldIcons.MoneyRemoveBold,
    broken: brokenIcons.MoneyRemoveBroken,
    bulk: bulkIcons.MoneyRemoveBulk,
    linear: linearIcons.MoneyRemoveLinear,
    outline: outlineIcons.MoneyRemoveOutline,
    twotone: twotoneIcons.MoneyRemoveTwoTone
  },
  Moneys: {
    bold: boldIcons.MoneysBold,
    broken: brokenIcons.MoneysBroken,
    bulk: bulkIcons.MoneysBulk,
    linear: linearIcons.MoneysLinear,
    outline: outlineIcons.MoneysOutline,
    twotone: twotoneIcons.MoneysTwoTone
  },
  MoneySend: {
    bold: boldIcons.MoneySendBold,
    broken: brokenIcons.MoneySendBroken,
    bulk: bulkIcons.MoneySendBulk,
    linear: linearIcons.MoneySendLinear,
    outline: outlineIcons.MoneySendOutline,
    twotone: twotoneIcons.MoneySendTwoTone
  },
  MoneyTick: {
    bold: boldIcons.MoneyTickBold,
    broken: brokenIcons.MoneyTickBroken,
    bulk: bulkIcons.MoneyTickBulk,
    linear: linearIcons.MoneyTickLinear,
    outline: outlineIcons.MoneyTickOutline,
    twotone: twotoneIcons.MoneyTickTwoTone
  },
  MoneyTime: {
    bold: boldIcons.MoneyTimeBold,
    broken: brokenIcons.MoneyTimeBroken,
    bulk: bulkIcons.MoneyTimeBulk,
    linear: linearIcons.MoneyTimeLinear,
    outline: outlineIcons.MoneyTimeOutline,
    twotone: twotoneIcons.MoneyTimeTwoTone
  },
  Monitor: {
    bold: boldIcons.MonitorBold,
    broken: brokenIcons.MonitorBroken,
    bulk: bulkIcons.MonitorBulk,
    linear: linearIcons.MonitorLinear,
    outline: outlineIcons.MonitorOutline,
    twotone: twotoneIcons.MonitorTwoTone
  },
  MonitorMobbile: {
    bold: boldIcons.MonitorMobbileBold,
    broken: brokenIcons.MonitorMobbileBroken,
    bulk: bulkIcons.MonitorMobbileBulk,
    linear: linearIcons.MonitorMobbileLinear,
    outline: outlineIcons.MonitorMobbileOutline,
    twotone: twotoneIcons.MonitorMobbileTwoTone
  },
  MonitorRecorder: {
    bold: boldIcons.MonitorRecorderBold,
    broken: brokenIcons.MonitorRecorderBroken,
    bulk: bulkIcons.MonitorRecorderBulk,
    linear: linearIcons.MonitorRecorderLinear,
    outline: outlineIcons.MonitorRecorderOutline,
    twotone: twotoneIcons.MonitorRecorderTwoTone
  },
  Moon: {
    bold: boldIcons.MoonBold,
    broken: brokenIcons.MoonBroken,
    bulk: bulkIcons.MoonBulk,
    linear: linearIcons.MoonLinear,
    outline: outlineIcons.MoonOutline,
    twotone: twotoneIcons.MoonTwoTone
  },
  More: {
    bold: boldIcons.MoreBold,
    broken: brokenIcons.MoreBroken,
    bulk: bulkIcons.MoreBulk,
    linear: linearIcons.MoreLinear,
    outline: outlineIcons.MoreOutline,
    twotone: twotoneIcons.MoreTwoTone
  },
  More2: {
    bold: boldIcons.More2Bold,
    broken: brokenIcons.More2Broken,
    bulk: bulkIcons.More2Bulk,
    linear: linearIcons.More2Linear,
    outline: outlineIcons.More2Outline,
    twotone: twotoneIcons.More2TwoTone
  },
  MoreCircle: {
    bold: boldIcons.MoreCircleBold,
    broken: brokenIcons.MoreCircleBroken,
    bulk: bulkIcons.MoreCircleBulk,
    linear: linearIcons.MoreCircleLinear,
    outline: outlineIcons.MoreCircleOutline,
    twotone: twotoneIcons.MoreCircleTwoTone
  },
  MoreSquare: {
    bold: boldIcons.MoreSquareBold,
    broken: brokenIcons.MoreSquareBroken,
    bulk: bulkIcons.MoreSquareBulk,
    linear: linearIcons.MoreSquareLinear,
    outline: outlineIcons.MoreSquareOutline,
    twotone: twotoneIcons.MoreSquareTwoTone
  },
  Mouse: {
    bold: boldIcons.MouseBold,
    broken: brokenIcons.MouseBroken,
    bulk: bulkIcons.MouseBulk,
    linear: linearIcons.MouseLinear,
    outline: outlineIcons.MouseOutline,
    twotone: twotoneIcons.MouseTwoTone
  },
  Mouse1: {
    bold: boldIcons.Mouse1Bold
  },
  MouseCircle: {
    bold: boldIcons.MouseCircleBold,
    broken: brokenIcons.MouseCircleBroken,
    bulk: bulkIcons.MouseCircleBulk,
    linear: linearIcons.MouseCircleLinear,
    outline: outlineIcons.MouseCircleOutline,
    twotone: twotoneIcons.MouseCircleTwoTone
  },
  MouseCopy: {
    broken: brokenIcons.MouseCopyBroken,
    bulk: bulkIcons.MouseCopyBulk,
    linear: linearIcons.MouseCopyLinear,
    outline: outlineIcons.MouseCopyOutline,
    twotone: twotoneIcons.MouseCopyTwoTone
  },
  MouseSquare: {
    bold: boldIcons.MouseSquareBold,
    broken: brokenIcons.MouseSquareBroken,
    bulk: bulkIcons.MouseSquareBulk,
    linear: linearIcons.MouseSquareLinear,
    outline: outlineIcons.MouseSquareOutline,
    twotone: twotoneIcons.MouseSquareTwoTone
  },
  Music: {
    bold: boldIcons.MusicBold,
    broken: brokenIcons.MusicBroken,
    bulk: bulkIcons.MusicBulk,
    linear: linearIcons.MusicLinear,
    outline: outlineIcons.MusicOutline,
    twotone: twotoneIcons.MusicTwoTone
  },
  MusicCircle: {
    bold: boldIcons.MusicCircleBold,
    broken: brokenIcons.MusicCircleBroken,
    bulk: bulkIcons.MusicCircleBulk,
    linear: linearIcons.MusicCircleLinear,
    outline: outlineIcons.MusicCircleOutline,
    twotone: twotoneIcons.MusicCircleTwoTone
  },
  MusicDashboard: {
    bold: boldIcons.MusicDashboardBold,
    broken: brokenIcons.MusicDashboardBroken,
    bulk: bulkIcons.MusicDashboardBulk,
    linear: linearIcons.MusicDashboardLinear,
    outline: outlineIcons.MusicDashboardOutline,
    twotone: twotoneIcons.MusicDashboardTwoTone
  },
  MusicFilter: {
    bold: boldIcons.MusicFilterBold,
    broken: brokenIcons.MusicFilterBroken,
    bulk: bulkIcons.MusicFilterBulk,
    linear: linearIcons.MusicFilterLinear,
    outline: outlineIcons.MusicFilterOutline,
    twotone: twotoneIcons.MusicFilterTwoTone
  },
  MusicLibrary2: {
    bold: boldIcons.MusicLibrary2Bold,
    broken: brokenIcons.MusicLibrary2Broken,
    bulk: bulkIcons.MusicLibrary2Bulk,
    linear: linearIcons.MusicLibrary2Linear,
    outline: outlineIcons.MusicLibrary2Outline,
    twotone: twotoneIcons.MusicLibrary2TwoTone
  },
  Musicnote: {
    bold: boldIcons.MusicnoteBold,
    broken: brokenIcons.MusicnoteBroken,
    bulk: bulkIcons.MusicnoteBulk,
    linear: linearIcons.MusicnoteLinear,
    outline: outlineIcons.MusicnoteOutline,
    twotone: twotoneIcons.MusicnoteTwoTone
  },
  MusicPlay: {
    bold: boldIcons.MusicPlayBold,
    broken: brokenIcons.MusicPlayBroken,
    bulk: bulkIcons.MusicPlayBulk,
    linear: linearIcons.MusicPlayLinear,
    outline: outlineIcons.MusicPlayOutline,
    twotone: twotoneIcons.MusicPlayTwoTone
  },
  MusicPlaylist: {
    bold: boldIcons.MusicPlaylistBold,
    broken: brokenIcons.MusicPlaylistBroken,
    bulk: bulkIcons.MusicPlaylistBulk,
    linear: linearIcons.MusicPlaylistLinear,
    outline: outlineIcons.MusicPlaylistOutline,
    twotone: twotoneIcons.MusicPlaylistTwoTone
  },
  MusicSquare: {
    bold: boldIcons.MusicSquareBold,
    broken: brokenIcons.MusicSquareBroken,
    bulk: bulkIcons.MusicSquareBulk,
    linear: linearIcons.MusicSquareLinear,
    outline: outlineIcons.MusicSquareOutline,
    twotone: twotoneIcons.MusicSquareTwoTone
  },
  MusicSquareAdd: {
    bold: boldIcons.MusicSquareAddBold,
    broken: brokenIcons.MusicSquareAddBroken,
    bulk: bulkIcons.MusicSquareAddBulk,
    linear: linearIcons.MusicSquareAddLinear,
    outline: outlineIcons.MusicSquareAddOutline,
    twotone: twotoneIcons.MusicSquareAddTwoTone
  },
  MusicSquareRemove: {
    bold: boldIcons.MusicSquareRemoveBold,
    broken: brokenIcons.MusicSquareRemoveBroken,
    bulk: bulkIcons.MusicSquareRemoveBulk,
    linear: linearIcons.MusicSquareRemoveLinear,
    outline: outlineIcons.MusicSquareRemoveOutline,
    twotone: twotoneIcons.MusicSquareRemoveTwoTone
  },
  MusicSquareSearch: {
    bold: boldIcons.MusicSquareSearchBold,
    broken: brokenIcons.MusicSquareSearchBroken,
    bulk: bulkIcons.MusicSquareSearchBulk,
    linear: linearIcons.MusicSquareSearchLinear,
    outline: outlineIcons.MusicSquareSearchOutline,
    twotone: twotoneIcons.MusicSquareSearchTwoTone
  },
  NebulasNas: {
    bold: boldIcons.NebulasNasBold,
    broken: brokenIcons.NebulasNasBroken,
    bulk: bulkIcons.NebulasNasBulk,
    linear: linearIcons.NebulasNasLinear,
    outline: outlineIcons.NebulasNasOutline,
    twotone: twotoneIcons.NebulasNasTwoTone
  },
  NemXem: {
    bold: boldIcons.NemXemBold,
    broken: brokenIcons.NemXemBroken,
    bulk: bulkIcons.NemXemBulk,
    linear: linearIcons.NemXemLinear,
    outline: outlineIcons.NemXemOutline,
    twotone: twotoneIcons.NemXemTwoTone
  },
  NexoNexo: {
    bold: boldIcons.NexoNexoBold,
    broken: brokenIcons.NexoNexoBroken,
    linear: linearIcons.NexoNexoLinear,
    outline: outlineIcons.NexoNexoOutline,
    twotone: twotoneIcons.NexoNexoTwoTone
  },
  Next: {
    bold: boldIcons.NextBold,
    broken: brokenIcons.NextBroken,
    bulk: bulkIcons.NextBulk,
    linear: linearIcons.NextLinear,
    outline: outlineIcons.NextOutline,
    twotone: twotoneIcons.NextTwoTone
  },
  Note: {
    bold: boldIcons.NoteBold,
    broken: brokenIcons.NoteBroken,
    bulk: bulkIcons.NoteBulk,
    linear: linearIcons.NoteLinear,
    outline: outlineIcons.NoteOutline,
    twotone: twotoneIcons.NoteTwoTone
  },
  Note1: {
    bold: boldIcons.Note1Bold,
    broken: brokenIcons.Note1Broken,
    bulk: bulkIcons.Note1Bulk,
    linear: linearIcons.Note1Linear,
    outline: outlineIcons.Note1Outline,
    twotone: twotoneIcons.Note1TwoTone
  },
  Note2: {
    bold: boldIcons.Note2Bold,
    broken: brokenIcons.Note2Broken,
    linear: linearIcons.Note2Linear,
    outline: outlineIcons.Note2Outline,
    twotone: twotoneIcons.Note2TwoTone
  },
  NoteAdd: {
    bold: boldIcons.NoteAddBold,
    broken: brokenIcons.NoteAddBroken,
    bulk: bulkIcons.NoteAddBulk,
    linear: linearIcons.NoteAddLinear,
    outline: outlineIcons.NoteAddOutline,
    twotone: twotoneIcons.NoteAddTwoTone
  },
  NoteCopy: {
    bold: boldIcons.NoteCopyBold,
    broken: brokenIcons.NoteCopyBroken,
    bulk: bulkIcons.NoteCopyBulk,
    linear: linearIcons.NoteCopyLinear,
    outline: outlineIcons.NoteCopyOutline,
    twotone: twotoneIcons.NoteCopyTwoTone
  },
  NoteFavorite: {
    bold: boldIcons.NoteFavoriteBold,
    broken: brokenIcons.NoteFavoriteBroken,
    bulk: bulkIcons.NoteFavoriteBulk,
    linear: linearIcons.NoteFavoriteLinear,
    outline: outlineIcons.NoteFavoriteOutline,
    twotone: twotoneIcons.NoteFavoriteTwoTone
  },
  NoteRemove: {
    bold: boldIcons.NoteRemoveBold,
    broken: brokenIcons.NoteRemoveBroken,
    bulk: bulkIcons.NoteRemoveBulk,
    linear: linearIcons.NoteRemoveLinear,
    outline: outlineIcons.NoteRemoveOutline,
    twotone: twotoneIcons.NoteRemoveTwoTone
  },
  NoteSquare: {
    bold: boldIcons.NoteSquareBold,
    broken: brokenIcons.NoteSquareBroken,
    bulk: bulkIcons.NoteSquareBulk,
    linear: linearIcons.NoteSquareLinear,
    outline: outlineIcons.NoteSquareOutline,
    twotone: twotoneIcons.NoteSquareTwoTone
  },
  NoteText: {
    bold: boldIcons.NoteTextBold,
    broken: brokenIcons.NoteTextBroken,
    bulk: bulkIcons.NoteTextBulk,
    linear: linearIcons.NoteTextLinear,
    outline: outlineIcons.NoteTextOutline,
    twotone: twotoneIcons.NoteTextTwoTone
  },
  Notification: {
    bold: boldIcons.NotificationBold,
    broken: brokenIcons.NotificationBroken,
    bulk: bulkIcons.NotificationBulk,
    linear: linearIcons.NotificationLinear,
    outline: outlineIcons.NotificationOutline,
    twotone: twotoneIcons.NotificationTwoTone
  },
  Notification1: {
    bold: boldIcons.Notification1Bold,
    broken: brokenIcons.Notification1Broken,
    bulk: bulkIcons.Notification1Bulk,
    linear: linearIcons.Notification1Linear,
    outline: outlineIcons.Notification1Outline,
    twotone: twotoneIcons.Notification1TwoTone
  },
  NotificationBing: {
    bold: boldIcons.NotificationBingBold,
    broken: brokenIcons.NotificationBingBroken,
    bulk: bulkIcons.NotificationBingBulk,
    linear: linearIcons.NotificationBingLinear,
    outline: outlineIcons.NotificationBingOutline,
    twotone: twotoneIcons.NotificationBingTwoTone
  },
  NotificationCircle: {
    broken: brokenIcons.NotificationCircleBroken,
    bulk: bulkIcons.NotificationCircleBulk,
    linear: linearIcons.NotificationCircleLinear,
    outline: outlineIcons.NotificationCircleOutline,
    twotone: twotoneIcons.NotificationCircleTwoTone
  },
  NotificationFavorite: {
    bold: boldIcons.NotificationFavoriteBold,
    broken: brokenIcons.NotificationFavoriteBroken,
    bulk: bulkIcons.NotificationFavoriteBulk,
    linear: linearIcons.NotificationFavoriteLinear,
    outline: outlineIcons.NotificationFavoriteOutline,
    twotone: twotoneIcons.NotificationFavoriteTwoTone
  },
  NotificationStatus: {
    bold: boldIcons.NotificationStatusBold,
    broken: brokenIcons.NotificationStatusBroken,
    bulk: bulkIcons.NotificationStatusBulk,
    linear: linearIcons.NotificationStatusLinear,
    outline: outlineIcons.NotificationStatusOutline,
    twotone: twotoneIcons.NotificationStatusTwoTone
  },
  OceanProtocolOcean: {
    bold: boldIcons.OceanProtocolOceanBold,
    broken: brokenIcons.OceanProtocolOceanBroken,
    bulk: bulkIcons.OceanProtocolOceanBulk,
    linear: linearIcons.OceanProtocolOceanLinear,
    outline: outlineIcons.OceanProtocolOceanOutline,
    twotone: twotoneIcons.OceanProtocolOceanTwoTone
  },
  OkbOkb: {
    bold: boldIcons.OkbOkbBold,
    broken: brokenIcons.OkbOkbBroken,
    bulk: bulkIcons.OkbOkbBulk,
    linear: linearIcons.OkbOkbLinear,
    outline: outlineIcons.OkbOkbOutline,
    twotone: twotoneIcons.OkbOkbTwoTone
  },
  OmegaCircle: {
    bold: boldIcons.OmegaCircleBold,
    broken: brokenIcons.OmegaCircleBroken,
    bulk: bulkIcons.OmegaCircleBulk,
    linear: linearIcons.OmegaCircleLinear,
    outline: outlineIcons.OmegaCircleOutline,
    twotone: twotoneIcons.OmegaCircleTwoTone
  },
  OmegaCircle1: {
    linear: linearIcons.OmegaCircle1Linear
  },
  OmegaSquare: {
    bold: boldIcons.OmegaSquareBold,
    broken: brokenIcons.OmegaSquareBroken,
    bulk: bulkIcons.OmegaSquareBulk,
    linear: linearIcons.OmegaSquareLinear,
    outline: outlineIcons.OmegaSquareOutline,
    twotone: twotoneIcons.OmegaSquareTwoTone
  },
  OmegaSquare1: {
    linear: linearIcons.OmegaSquare1Linear
  },
  OntologyOnt: {
    bold: boldIcons.OntologyOntBold,
    broken: brokenIcons.OntologyOntBroken,
    bulk: bulkIcons.OntologyOntBulk,
    linear: linearIcons.OntologyOntLinear,
    outline: outlineIcons.OntologyOntOutline,
    twotone: twotoneIcons.OntologyOntTwoTone
  },
  Paintbucket: {
    bold: boldIcons.PaintbucketBold,
    broken: brokenIcons.PaintbucketBroken,
    bulk: bulkIcons.PaintbucketBulk,
    linear: linearIcons.PaintbucketLinear,
    outline: outlineIcons.PaintbucketOutline,
    twotone: twotoneIcons.PaintbucketTwoTone
  },
  Paperclip: {
    bold: boldIcons.PaperclipBold,
    broken: brokenIcons.PaperclipBroken,
    bulk: bulkIcons.PaperclipBulk,
    linear: linearIcons.PaperclipLinear,
    outline: outlineIcons.PaperclipOutline,
    twotone: twotoneIcons.PaperclipTwoTone
  },
  Paperclip2: {
    bold: boldIcons.Paperclip2Bold,
    broken: brokenIcons.Paperclip2Broken,
    bulk: bulkIcons.Paperclip2Bulk,
    linear: linearIcons.Paperclip2Linear,
    outline: outlineIcons.Paperclip2Outline,
    twotone: twotoneIcons.Paperclip2TwoTone
  },
  PasswordCheck: {
    bold: boldIcons.PasswordCheckBold,
    broken: brokenIcons.PasswordCheckBroken,
    bulk: bulkIcons.PasswordCheckBulk,
    linear: linearIcons.PasswordCheckLinear,
    outline: outlineIcons.PasswordCheckOutline,
    twotone: twotoneIcons.PasswordCheckTwoTone
  },
  Path: {
    bold: boldIcons.PathBold,
    broken: brokenIcons.PathBroken,
    bulk: bulkIcons.PathBulk,
    linear: linearIcons.PathLinear,
    outline: outlineIcons.PathOutline,
    twotone: twotoneIcons.PathTwoTone
  },
  Path2: {
    bold: boldIcons.Path2Bold,
    broken: brokenIcons.Path2Broken,
    bulk: bulkIcons.Path2Bulk,
    linear: linearIcons.Path2Linear,
    outline: outlineIcons.Path2Outline,
    twotone: twotoneIcons.Path2TwoTone
  },
  PathSquare: {
    bold: boldIcons.PathSquareBold,
    broken: brokenIcons.PathSquareBroken,
    bulk: bulkIcons.PathSquareBulk,
    linear: linearIcons.PathSquareLinear,
    outline: outlineIcons.PathSquareOutline,
    twotone: twotoneIcons.PathSquareTwoTone
  },
  Pause: {
    bold: boldIcons.PauseBold,
    broken: brokenIcons.PauseBroken,
    bulk: bulkIcons.PauseBulk,
    linear: linearIcons.PauseLinear,
    outline: outlineIcons.PauseOutline,
    twotone: twotoneIcons.PauseTwoTone
  },
  PauseCircle: {
    bold: boldIcons.PauseCircleBold,
    broken: brokenIcons.PauseCircleBroken,
    bulk: bulkIcons.PauseCircleBulk,
    linear: linearIcons.PauseCircleLinear,
    outline: outlineIcons.PauseCircleOutline,
    twotone: twotoneIcons.PauseCircleTwoTone
  },
  Paypal: {
    bold: boldIcons.PaypalBold,
    broken: brokenIcons.PaypalBroken,
    bulk: bulkIcons.PaypalBulk,
    linear: linearIcons.PaypalLinear,
    outline: outlineIcons.PaypalOutline,
    twotone: twotoneIcons.PaypalTwoTone
  },
  PenAdd: {
    bold: boldIcons.PenAddBold,
    broken: brokenIcons.PenAddBroken,
    bulk: bulkIcons.PenAddBulk,
    linear: linearIcons.PenAddLinear,
    outline: outlineIcons.PenAddOutline,
    twotone: twotoneIcons.PenAddTwoTone
  },
  PenAdd1: {
    linear: linearIcons.PenAdd1Linear
  },
  PenClose: {
    bold: boldIcons.PenCloseBold,
    broken: brokenIcons.PenCloseBroken,
    bulk: bulkIcons.PenCloseBulk,
    linear: linearIcons.PenCloseLinear,
    outline: outlineIcons.PenCloseOutline,
    twotone: twotoneIcons.PenCloseTwoTone
  },
  PenClose1: {
    linear: linearIcons.PenClose1Linear
  },
  PenRemove: {
    bold: boldIcons.PenRemoveBold,
    broken: brokenIcons.PenRemoveBroken,
    bulk: bulkIcons.PenRemoveBulk,
    linear: linearIcons.PenRemoveLinear,
    outline: outlineIcons.PenRemoveOutline,
    twotone: twotoneIcons.PenRemoveTwoTone
  },
  PenRemove1: {
    linear: linearIcons.PenRemove1Linear
  },
  PenTool: {
    bold: boldIcons.PenToolBold,
    broken: brokenIcons.PenToolBroken,
    bulk: bulkIcons.PenToolBulk,
    linear: linearIcons.PenToolLinear,
    outline: outlineIcons.PenToolOutline,
    twotone: twotoneIcons.PenToolTwoTone
  },
  PenTool1: {
    linear: linearIcons.PenTool1Linear
  },
  PenTool2: {
    bold: boldIcons.PenTool2Bold,
    broken: brokenIcons.PenTool2Broken,
    bulk: bulkIcons.PenTool2Bulk,
    linear: linearIcons.PenTool2Linear,
    outline: outlineIcons.PenTool2Outline,
    twotone: twotoneIcons.PenTool2TwoTone
  },
  PenTool21: {
    linear: linearIcons.PenTool21Linear
  },
  People: {
    bold: boldIcons.PeopleBold,
    broken: brokenIcons.PeopleBroken,
    bulk: bulkIcons.PeopleBulk,
    linear: linearIcons.PeopleLinear,
    outline: outlineIcons.PeopleOutline,
    twotone: twotoneIcons.PeopleTwoTone
  },
  PercentageCircle: {
    bold: boldIcons.PercentageCircleBold,
    broken: brokenIcons.PercentageCircleBroken,
    bulk: bulkIcons.PercentageCircleBulk,
    outline: outlineIcons.PercentageCircleOutline,
    twotone: twotoneIcons.PercentageCircleTwoTone
  },
  PercentageSquare: {
    bold: boldIcons.PercentageSquareBold,
    broken: brokenIcons.PercentageSquareBroken,
    bulk: bulkIcons.PercentageSquareBulk,
    linear: linearIcons.PercentageSquareLinear,
    outline: outlineIcons.PercentageSquareOutline,
    twotone: twotoneIcons.PercentageSquareTwoTone
  },
  Personalcard: {
    bold: boldIcons.PersonalcardBold,
    broken: brokenIcons.PersonalcardBroken,
    bulk: bulkIcons.PersonalcardBulk,
    linear: linearIcons.PersonalcardLinear,
    outline: outlineIcons.PersonalcardOutline,
    twotone: twotoneIcons.PersonalcardTwoTone
  },
  Pet: {
    bold: boldIcons.PetBold,
    broken: brokenIcons.PetBroken,
    bulk: bulkIcons.PetBulk,
    linear: linearIcons.PetLinear,
    outline: outlineIcons.PetOutline,
    twotone: twotoneIcons.PetTwoTone
  },
  Pharagraphspacing: {
    bold: boldIcons.PharagraphspacingBold,
    broken: brokenIcons.PharagraphspacingBroken,
    bulk: bulkIcons.PharagraphspacingBulk,
    linear: linearIcons.PharagraphspacingLinear,
    outline: outlineIcons.PharagraphspacingOutline,
    twotone: twotoneIcons.PharagraphspacingTwoTone
  },
  Photoshop: {
    bold: boldIcons.PhotoshopBold,
    broken: brokenIcons.PhotoshopBroken,
    bulk: bulkIcons.PhotoshopBulk,
    linear: linearIcons.PhotoshopLinear,
    outline: outlineIcons.PhotoshopOutline,
    twotone: twotoneIcons.PhotoshopTwoTone
  },
  PictureFrame: {
    bold: boldIcons.PictureFrameBold,
    broken: brokenIcons.PictureFrameBroken,
    bulk: bulkIcons.PictureFrameBulk,
    linear: linearIcons.PictureFrameLinear,
    outline: outlineIcons.PictureFrameOutline,
    twotone: twotoneIcons.PictureFrameTwoTone
  },
  Play: {
    bold: boldIcons.PlayBold,
    broken: brokenIcons.PlayBroken,
    bulk: bulkIcons.PlayBulk,
    linear: linearIcons.PlayLinear,
    outline: outlineIcons.PlayOutline,
    twotone: twotoneIcons.PlayTwoTone
  },
  PlayAdd: {
    bold: boldIcons.PlayAddBold,
    broken: brokenIcons.PlayAddBroken,
    bulk: bulkIcons.PlayAddBulk,
    linear: linearIcons.PlayAddLinear,
    outline: outlineIcons.PlayAddOutline,
    twotone: twotoneIcons.PlayAddTwoTone
  },
  PlayCircle: {
    bold: boldIcons.PlayCircleBold,
    broken: brokenIcons.PlayCircleBroken,
    bulk: bulkIcons.PlayCircleBulk,
    linear: linearIcons.PlayCircleLinear,
    outline: outlineIcons.PlayCircleOutline,
    twotone: twotoneIcons.PlayCircleTwoTone
  },
  PlayCricle: {
    bold: boldIcons.PlayCricleBold,
    broken: brokenIcons.PlayCricleBroken,
    bulk: bulkIcons.PlayCricleBulk,
    linear: linearIcons.PlayCricleLinear,
    outline: outlineIcons.PlayCricleOutline,
    twotone: twotoneIcons.PlayCricleTwoTone
  },
  PlayRemove: {
    bold: boldIcons.PlayRemoveBold,
    broken: brokenIcons.PlayRemoveBroken,
    bulk: bulkIcons.PlayRemoveBulk,
    linear: linearIcons.PlayRemoveLinear,
    outline: outlineIcons.PlayRemoveOutline,
    twotone: twotoneIcons.PlayRemoveTwoTone
  },
  PolkadotDot: {
    bold: boldIcons.PolkadotDotBold,
    broken: brokenIcons.PolkadotDotBroken,
    bulk: bulkIcons.PolkadotDotBulk,
    linear: linearIcons.PolkadotDotLinear,
    outline: outlineIcons.PolkadotDotOutline,
    twotone: twotoneIcons.PolkadotDotTwoTone
  },
  PolygonMatic: {
    bold: boldIcons.PolygonMaticBold,
    broken: brokenIcons.PolygonMaticBroken,
    bulk: bulkIcons.PolygonMaticBulk,
    linear: linearIcons.PolygonMaticLinear,
    outline: outlineIcons.PolygonMaticOutline,
    twotone: twotoneIcons.PolygonMaticTwoTone
  },
  PolyswarmNct: {
    bold: boldIcons.PolyswarmNctBold,
    broken: brokenIcons.PolyswarmNctBroken,
    bulk: bulkIcons.PolyswarmNctBulk,
    linear: linearIcons.PolyswarmNctLinear,
    outline: outlineIcons.PolyswarmNctOutline,
    twotone: twotoneIcons.PolyswarmNctTwoTone
  },
  PresentionChart: {
    bold: boldIcons.PresentionChartBold,
    broken: brokenIcons.PresentionChartBroken,
    bulk: bulkIcons.PresentionChartBulk,
    linear: linearIcons.PresentionChartLinear,
    outline: outlineIcons.PresentionChartOutline,
    twotone: twotoneIcons.PresentionChartTwoTone
  },
  Previous: {
    bold: boldIcons.PreviousBold,
    broken: brokenIcons.PreviousBroken,
    bulk: bulkIcons.PreviousBulk,
    linear: linearIcons.PreviousLinear,
    outline: outlineIcons.PreviousOutline,
    twotone: twotoneIcons.PreviousTwoTone
  },
  Printer: {
    bold: boldIcons.PrinterBold,
    broken: brokenIcons.PrinterBroken,
    bulk: bulkIcons.PrinterBulk,
    linear: linearIcons.PrinterLinear,
    outline: outlineIcons.PrinterOutline,
    twotone: twotoneIcons.PrinterTwoTone
  },
  PrinterSlash: {
    bold: boldIcons.PrinterSlashBold,
    broken: brokenIcons.PrinterSlashBroken,
    bulk: bulkIcons.PrinterSlashBulk,
    linear: linearIcons.PrinterSlashLinear,
    outline: outlineIcons.PrinterSlashOutline,
    twotone: twotoneIcons.PrinterSlashTwoTone
  },
  Profile: {
    bulk: bulkIcons.ProfileBulk,
    linear: linearIcons.ProfileLinear,
    twotone: twotoneIcons.ProfileTwoTone
  },
  Profile2user: {
    bold: boldIcons.Profile2userBold,
    broken: brokenIcons.Profile2userBroken,
    bulk: bulkIcons.Profile2userBulk,
    linear: linearIcons.Profile2userLinear,
    outline: outlineIcons.Profile2userOutline,
    twotone: twotoneIcons.Profile2userTwoTone
  },
  ProfileAdd: {
    bold: boldIcons.ProfileAddBold,
    broken: brokenIcons.ProfileAddBroken,
    bulk: bulkIcons.ProfileAddBulk,
    linear: linearIcons.ProfileAddLinear,
    outline: outlineIcons.ProfileAddOutline,
    twotone: twotoneIcons.ProfileAddTwoTone
  },
  ProfileCircle: {
    bold: boldIcons.ProfileCircleBold,
    broken: brokenIcons.ProfileCircleBroken,
    bulk: bulkIcons.ProfileCircleBulk,
    linear: linearIcons.ProfileCircleLinear,
    outline: outlineIcons.ProfileCircleOutline,
    twotone: twotoneIcons.ProfileCircleTwoTone
  },
  ProfileDelete: {
    bold: boldIcons.ProfileDeleteBold,
    broken: brokenIcons.ProfileDeleteBroken,
    bulk: bulkIcons.ProfileDeleteBulk,
    linear: linearIcons.ProfileDeleteLinear,
    outline: outlineIcons.ProfileDeleteOutline,
    twotone: twotoneIcons.ProfileDeleteTwoTone
  },
  ProfileRemove: {
    bold: boldIcons.ProfileRemoveBold,
    broken: brokenIcons.ProfileRemoveBroken,
    bulk: bulkIcons.ProfileRemoveBulk,
    linear: linearIcons.ProfileRemoveLinear,
    outline: outlineIcons.ProfileRemoveOutline,
    twotone: twotoneIcons.ProfileRemoveTwoTone
  },
  ProfileTick: {
    bold: boldIcons.ProfileTickBold,
    broken: brokenIcons.ProfileTickBroken,
    bulk: bulkIcons.ProfileTickBulk,
    linear: linearIcons.ProfileTickLinear,
    outline: outlineIcons.ProfileTickOutline,
    twotone: twotoneIcons.ProfileTickTwoTone
  },
  ProgrammingArrow: {
    bold: boldIcons.ProgrammingArrowBold,
    broken: brokenIcons.ProgrammingArrowBroken,
    bulk: bulkIcons.ProgrammingArrowBulk,
    linear: linearIcons.ProgrammingArrowLinear,
    outline: outlineIcons.ProgrammingArrowOutline,
    twotone: twotoneIcons.ProgrammingArrowTwoTone
  },
  ProgrammingArrows: {
    bold: boldIcons.ProgrammingArrowsBold,
    broken: brokenIcons.ProgrammingArrowsBroken,
    bulk: bulkIcons.ProgrammingArrowsBulk,
    linear: linearIcons.ProgrammingArrowsLinear,
    outline: outlineIcons.ProgrammingArrowsOutline,
    twotone: twotoneIcons.ProgrammingArrowsTwoTone
  },
  Python: {
    bold: boldIcons.PythonBold,
    broken: brokenIcons.PythonBroken,
    bulk: bulkIcons.PythonBulk,
    linear: linearIcons.PythonLinear,
    outline: outlineIcons.PythonOutline,
    twotone: twotoneIcons.PythonTwoTone
  },
  QuantQnt: {
    bold: boldIcons.QuantQntBold,
    broken: brokenIcons.QuantQntBroken,
    bulk: bulkIcons.QuantQntBulk,
    linear: linearIcons.QuantQntLinear,
    outline: outlineIcons.QuantQntOutline,
    twotone: twotoneIcons.QuantQntTwoTone
  },
  QuoteDown: {
    bold: boldIcons.QuoteDownBold,
    broken: brokenIcons.QuoteDownBroken,
    bulk: bulkIcons.QuoteDownBulk,
    linear: linearIcons.QuoteDownLinear,
    outline: outlineIcons.QuoteDownOutline,
    twotone: twotoneIcons.QuoteDownTwoTone
  },
  QuoteDownCircle: {
    bold: boldIcons.QuoteDownCircleBold,
    broken: brokenIcons.QuoteDownCircleBroken,
    bulk: bulkIcons.QuoteDownCircleBulk,
    linear: linearIcons.QuoteDownCircleLinear,
    outline: outlineIcons.QuoteDownCircleOutline,
    twotone: twotoneIcons.QuoteDownCircleTwoTone
  },
  QuoteDownSquare: {
    bold: boldIcons.QuoteDownSquareBold,
    broken: brokenIcons.QuoteDownSquareBroken,
    bulk: bulkIcons.QuoteDownSquareBulk,
    linear: linearIcons.QuoteDownSquareLinear,
    outline: outlineIcons.QuoteDownSquareOutline,
    twotone: twotoneIcons.QuoteDownSquareTwoTone
  },
  QuoteUp: {
    bold: boldIcons.QuoteUpBold,
    broken: brokenIcons.QuoteUpBroken,
    bulk: bulkIcons.QuoteUpBulk,
    linear: linearIcons.QuoteUpLinear,
    outline: outlineIcons.QuoteUpOutline,
    twotone: twotoneIcons.QuoteUpTwoTone
  },
  QuoteUpCircle: {
    bold: boldIcons.QuoteUpCircleBold,
    broken: brokenIcons.QuoteUpCircleBroken,
    bulk: bulkIcons.QuoteUpCircleBulk,
    linear: linearIcons.QuoteUpCircleLinear,
    outline: outlineIcons.QuoteUpCircleOutline,
    twotone: twotoneIcons.QuoteUpCircleTwoTone
  },
  QuoteUpSquare: {
    bold: boldIcons.QuoteUpSquareBold,
    broken: brokenIcons.QuoteUpSquareBroken,
    bulk: bulkIcons.QuoteUpSquareBulk,
    linear: linearIcons.QuoteUpSquareLinear,
    outline: outlineIcons.QuoteUpSquareOutline,
    twotone: twotoneIcons.QuoteUpSquareTwoTone
  },
  Radar: {
    bold: boldIcons.RadarBold,
    broken: brokenIcons.RadarBroken,
    bulk: bulkIcons.RadarBulk,
    linear: linearIcons.RadarLinear,
    outline: outlineIcons.RadarOutline,
    twotone: twotoneIcons.RadarTwoTone
  },
  Radar1: {
    bold: boldIcons.Radar1Bold,
    broken: brokenIcons.Radar1Broken,
    bulk: bulkIcons.Radar1Bulk,
    linear: linearIcons.Radar1Linear,
    outline: outlineIcons.Radar1Outline,
    twotone: twotoneIcons.Radar1TwoTone
  },
  Radar2: {
    bold: boldIcons.Radar2Bold,
    broken: brokenIcons.Radar2Broken,
    bulk: bulkIcons.Radar2Bulk,
    linear: linearIcons.Radar2Linear,
    outline: outlineIcons.Radar2Outline,
    twotone: twotoneIcons.Radar2TwoTone
  },
  Radio: {
    bold: boldIcons.RadioBold,
    broken: brokenIcons.RadioBroken,
    bulk: bulkIcons.RadioBulk,
    linear: linearIcons.RadioLinear,
    outline: outlineIcons.RadioOutline,
    twotone: twotoneIcons.RadioTwoTone
  },
  Ram: {
    bold: boldIcons.RamBold,
    broken: brokenIcons.RamBroken,
    bulk: bulkIcons.RamBulk,
    linear: linearIcons.RamLinear,
    outline: outlineIcons.RamOutline,
    twotone: twotoneIcons.RamTwoTone
  },
  Ram2: {
    bold: boldIcons.Ram2Bold,
    broken: brokenIcons.Ram2Broken,
    bulk: bulkIcons.Ram2Bulk,
    linear: linearIcons.Ram2Linear,
    outline: outlineIcons.Ram2Outline,
    twotone: twotoneIcons.Ram2TwoTone
  },
  Ranking: {
    bold: boldIcons.RankingBold,
    broken: brokenIcons.RankingBroken,
    bulk: bulkIcons.RankingBulk,
    linear: linearIcons.RankingLinear,
    outline: outlineIcons.RankingOutline,
    twotone: twotoneIcons.RankingTwoTone
  },
  Ranking1: {
    bold: boldIcons.Ranking1Bold,
    broken: brokenIcons.Ranking1Broken,
    bulk: bulkIcons.Ranking1Bulk,
    linear: linearIcons.Ranking1Linear,
    outline: outlineIcons.Ranking1Outline,
    twotone: twotoneIcons.Ranking1TwoTone
  },
  Receipt: {
    bold: boldIcons.ReceiptBold,
    broken: brokenIcons.ReceiptBroken,
    bulk: bulkIcons.ReceiptBulk,
    linear: linearIcons.ReceiptLinear,
    outline: outlineIcons.ReceiptOutline,
    twotone: twotoneIcons.ReceiptTwoTone
  },
  Receipt1: {
    bold: boldIcons.Receipt1Bold,
    broken: brokenIcons.Receipt1Broken,
    bulk: bulkIcons.Receipt1Bulk,
    linear: linearIcons.Receipt1Linear,
    outline: outlineIcons.Receipt1Outline,
    twotone: twotoneIcons.Receipt1TwoTone
  },
  Receipt2: {
    bold: boldIcons.Receipt2Bold,
    broken: brokenIcons.Receipt2Broken,
    bulk: bulkIcons.Receipt2Bulk,
    linear: linearIcons.Receipt2Linear,
    outline: outlineIcons.Receipt2Outline,
    twotone: twotoneIcons.Receipt2TwoTone
  },
  Receipt21: {
    bold: boldIcons.Receipt21Bold,
    broken: brokenIcons.Receipt21Broken,
    bulk: bulkIcons.Receipt21Bulk,
    linear: linearIcons.Receipt21Linear,
    outline: outlineIcons.Receipt21Outline,
    twotone: twotoneIcons.Receipt21TwoTone
  },
  ReceiptAdd: {
    bold: boldIcons.ReceiptAddBold,
    broken: brokenIcons.ReceiptAddBroken,
    bulk: bulkIcons.ReceiptAddBulk,
    linear: linearIcons.ReceiptAddLinear,
    outline: outlineIcons.ReceiptAddOutline,
    twotone: twotoneIcons.ReceiptAddTwoTone
  },
  ReceiptDiscount: {
    bold: boldIcons.ReceiptDiscountBold,
    broken: brokenIcons.ReceiptDiscountBroken,
    bulk: bulkIcons.ReceiptDiscountBulk,
    linear: linearIcons.ReceiptDiscountLinear,
    outline: outlineIcons.ReceiptDiscountOutline,
    twotone: twotoneIcons.ReceiptDiscountTwoTone
  },
  ReceiptDisscount: {
    bold: boldIcons.ReceiptDisscountBold,
    broken: brokenIcons.ReceiptDisscountBroken,
    bulk: bulkIcons.ReceiptDisscountBulk,
    linear: linearIcons.ReceiptDisscountLinear,
    outline: outlineIcons.ReceiptDisscountOutline,
    twotone: twotoneIcons.ReceiptDisscountTwoTone
  },
  ReceiptEdit: {
    bold: boldIcons.ReceiptEditBold,
    broken: brokenIcons.ReceiptEditBroken,
    bulk: bulkIcons.ReceiptEditBulk,
    linear: linearIcons.ReceiptEditLinear,
    outline: outlineIcons.ReceiptEditOutline,
    twotone: twotoneIcons.ReceiptEditTwoTone
  },
  ReceiptItem: {
    bold: boldIcons.ReceiptItemBold,
    broken: brokenIcons.ReceiptItemBroken,
    bulk: bulkIcons.ReceiptItemBulk,
    linear: linearIcons.ReceiptItemLinear,
    outline: outlineIcons.ReceiptItemOutline,
    twotone: twotoneIcons.ReceiptItemTwoTone
  },
  ReceiptMinus: {
    bold: boldIcons.ReceiptMinusBold,
    broken: brokenIcons.ReceiptMinusBroken,
    bulk: bulkIcons.ReceiptMinusBulk,
    linear: linearIcons.ReceiptMinusLinear,
    outline: outlineIcons.ReceiptMinusOutline,
    twotone: twotoneIcons.ReceiptMinusTwoTone
  },
  ReceiptSearch: {
    bold: boldIcons.ReceiptSearchBold,
    broken: brokenIcons.ReceiptSearchBroken,
    bulk: bulkIcons.ReceiptSearchBulk,
    linear: linearIcons.ReceiptSearchLinear,
    outline: outlineIcons.ReceiptSearchOutline,
    twotone: twotoneIcons.ReceiptSearchTwoTone
  },
  ReceiptSquare: {
    bold: boldIcons.ReceiptSquareBold,
    broken: brokenIcons.ReceiptSquareBroken,
    bulk: bulkIcons.ReceiptSquareBulk,
    linear: linearIcons.ReceiptSquareLinear,
    outline: outlineIcons.ReceiptSquareOutline,
    twotone: twotoneIcons.ReceiptSquareTwoTone
  },
  ReceiptText: {
    bold: boldIcons.ReceiptTextBold,
    broken: brokenIcons.ReceiptTextBroken,
    bulk: bulkIcons.ReceiptTextBulk,
    linear: linearIcons.ReceiptTextLinear,
    outline: outlineIcons.ReceiptTextOutline,
    twotone: twotoneIcons.ReceiptTextTwoTone
  },
  Received: {
    bold: boldIcons.ReceivedBold,
    broken: brokenIcons.ReceivedBroken,
    bulk: bulkIcons.ReceivedBulk,
    linear: linearIcons.ReceivedLinear,
    outline: outlineIcons.ReceivedOutline,
    twotone: twotoneIcons.ReceivedTwoTone
  },
  ReceiveSquare: {
    bold: boldIcons.ReceiveSquareBold,
    broken: brokenIcons.ReceiveSquareBroken,
    bulk: bulkIcons.ReceiveSquareBulk,
    linear: linearIcons.ReceiveSquareLinear,
    outline: outlineIcons.ReceiveSquareOutline,
    twotone: twotoneIcons.ReceiveSquareTwoTone
  },
  ReceiveSquare2: {
    bold: boldIcons.ReceiveSquare2Bold,
    broken: brokenIcons.ReceiveSquare2Broken,
    bulk: bulkIcons.ReceiveSquare2Bulk,
    linear: linearIcons.ReceiveSquare2Linear,
    outline: outlineIcons.ReceiveSquare2Outline,
    twotone: twotoneIcons.ReceiveSquare2TwoTone
  },
  Record: {
    bold: boldIcons.RecordBold,
    broken: brokenIcons.RecordBroken,
    bulk: bulkIcons.RecordBulk,
    linear: linearIcons.RecordLinear,
    outline: outlineIcons.RecordOutline,
    twotone: twotoneIcons.RecordTwoTone
  },
  RecordCircle: {
    bold: boldIcons.RecordCircleBold,
    broken: brokenIcons.RecordCircleBroken,
    bulk: bulkIcons.RecordCircleBulk,
    linear: linearIcons.RecordCircleLinear,
    outline: outlineIcons.RecordCircleOutline,
    twotone: twotoneIcons.RecordCircleTwoTone
  },
  RecoveryConvert: {
    bold: boldIcons.RecoveryConvertBold,
    broken: brokenIcons.RecoveryConvertBroken,
    bulk: bulkIcons.RecoveryConvertBulk,
    linear: linearIcons.RecoveryConvertLinear,
    outline: outlineIcons.RecoveryConvertOutline,
    twotone: twotoneIcons.RecoveryConvertTwoTone
  },
  Redo: {
    bold: boldIcons.RedoBold,
    broken: brokenIcons.RedoBroken,
    bulk: bulkIcons.RedoBulk,
    linear: linearIcons.RedoLinear,
    outline: outlineIcons.RedoOutline,
    twotone: twotoneIcons.RedoTwoTone
  },
  Refresh: {
    bold: boldIcons.RefreshBold,
    broken: brokenIcons.RefreshBroken,
    bulk: bulkIcons.RefreshBulk,
    linear: linearIcons.RefreshLinear,
    outline: outlineIcons.RefreshOutline,
    twotone: twotoneIcons.RefreshTwoTone
  },
  Refresh2: {
    bold: boldIcons.Refresh2Bold,
    broken: brokenIcons.Refresh2Broken,
    bulk: bulkIcons.Refresh2Bulk,
    linear: linearIcons.Refresh2Linear,
    outline: outlineIcons.Refresh2Outline,
    twotone: twotoneIcons.Refresh2TwoTone
  },
  RefreshCircle: {
    bold: boldIcons.RefreshCircleBold,
    broken: brokenIcons.RefreshCircleBroken,
    bulk: bulkIcons.RefreshCircleBulk,
    linear: linearIcons.RefreshCircleLinear,
    outline: outlineIcons.RefreshCircleOutline,
    twotone: twotoneIcons.RefreshCircleTwoTone
  },
  RefreshLeftSquare: {
    bold: boldIcons.RefreshLeftSquareBold,
    broken: brokenIcons.RefreshLeftSquareBroken,
    bulk: bulkIcons.RefreshLeftSquareBulk,
    linear: linearIcons.RefreshLeftSquareLinear,
    outline: outlineIcons.RefreshLeftSquareOutline,
    twotone: twotoneIcons.RefreshLeftSquareTwoTone
  },
  RefreshRightSquare: {
    bold: boldIcons.RefreshRightSquareBold,
    broken: brokenIcons.RefreshRightSquareBroken,
    bulk: bulkIcons.RefreshRightSquareBulk,
    linear: linearIcons.RefreshRightSquareLinear,
    outline: outlineIcons.RefreshRightSquareOutline,
    twotone: twotoneIcons.RefreshRightSquareTwoTone
  },
  RefreshSquare2: {
    bold: boldIcons.RefreshSquare2Bold,
    broken: brokenIcons.RefreshSquare2Broken,
    bulk: bulkIcons.RefreshSquare2Bulk,
    linear: linearIcons.RefreshSquare2Linear,
    outline: outlineIcons.RefreshSquare2Outline,
    twotone: twotoneIcons.RefreshSquare2TwoTone
  },
  Repeat: {
    bold: boldIcons.RepeatBold,
    broken: brokenIcons.RepeatBroken,
    bulk: bulkIcons.RepeatBulk,
    linear: linearIcons.RepeatLinear,
    outline: outlineIcons.RepeatOutline,
    twotone: twotoneIcons.RepeatTwoTone
  },
  RepeatCircle: {
    bold: boldIcons.RepeatCircleBold,
    broken: brokenIcons.RepeatCircleBroken,
    bulk: bulkIcons.RepeatCircleBulk,
    linear: linearIcons.RepeatCircleLinear,
    outline: outlineIcons.RepeatCircleOutline,
    twotone: twotoneIcons.RepeatCircleTwoTone
  },
  RepeateMusic: {
    bold: boldIcons.RepeateMusicBold,
    broken: brokenIcons.RepeateMusicBroken,
    bulk: bulkIcons.RepeateMusicBulk,
    linear: linearIcons.RepeateMusicLinear,
    outline: outlineIcons.RepeateMusicOutline,
    twotone: twotoneIcons.RepeateMusicTwoTone
  },
  RepeateOne: {
    bold: boldIcons.RepeateOneBold,
    broken: brokenIcons.RepeateOneBroken,
    bulk: bulkIcons.RepeateOneBulk,
    linear: linearIcons.RepeateOneLinear,
    outline: outlineIcons.RepeateOneOutline,
    twotone: twotoneIcons.RepeateOneTwoTone
  },
  Reserve: {
    bold: boldIcons.ReserveBold,
    broken: brokenIcons.ReserveBroken,
    bulk: bulkIcons.ReserveBulk,
    linear: linearIcons.ReserveLinear,
    outline: outlineIcons.ReserveOutline,
    twotone: twotoneIcons.ReserveTwoTone
  },
  RotateLeft: {
    bold: boldIcons.RotateLeftBold,
    broken: brokenIcons.RotateLeftBroken,
    bulk: bulkIcons.RotateLeftBulk,
    linear: linearIcons.RotateLeftLinear,
    outline: outlineIcons.RotateLeftOutline,
    twotone: twotoneIcons.RotateLeftTwoTone
  },
  RotateLeftCopy: {
    bold: boldIcons.RotateLeftCopyBold,
    broken: brokenIcons.RotateLeftCopyBroken,
    bulk: bulkIcons.RotateLeftCopyBulk,
    linear: linearIcons.RotateLeftCopyLinear,
    outline: outlineIcons.RotateLeftCopyOutline,
    twotone: twotoneIcons.RotateLeftCopyTwoTone
  },
  RotateRight: {
    bold: boldIcons.RotateRightBold,
    broken: brokenIcons.RotateRightBroken,
    bulk: bulkIcons.RotateRightBulk,
    linear: linearIcons.RotateRightLinear,
    outline: outlineIcons.RotateRightOutline,
    twotone: twotoneIcons.RotateRightTwoTone
  },
  RotateRightCopy: {
    bold: boldIcons.RotateRightCopyBold,
    broken: brokenIcons.RotateRightCopyBroken,
    bulk: bulkIcons.RotateRightCopyBulk,
    linear: linearIcons.RotateRightCopyLinear,
    outline: outlineIcons.RotateRightCopyOutline,
    twotone: twotoneIcons.RotateRightCopyTwoTone
  },
  RouteSquare: {
    bold: boldIcons.RouteSquareBold,
    broken: brokenIcons.RouteSquareBroken,
    bulk: bulkIcons.RouteSquareBulk,
    linear: linearIcons.RouteSquareLinear,
    outline: outlineIcons.RouteSquareOutline,
    twotone: twotoneIcons.RouteSquareTwoTone
  },
  Routing: {
    bold: boldIcons.RoutingBold,
    broken: brokenIcons.RoutingBroken,
    bulk: bulkIcons.RoutingBulk,
    linear: linearIcons.RoutingLinear,
    outline: outlineIcons.RoutingOutline,
    twotone: twotoneIcons.RoutingTwoTone
  },
  Routing2: {
    bold: boldIcons.Routing2Bold,
    broken: brokenIcons.Routing2Broken,
    bulk: bulkIcons.Routing2Bulk,
    linear: linearIcons.Routing2Linear,
    outline: outlineIcons.Routing2Outline,
    twotone: twotoneIcons.Routing2TwoTone
  },
  RowHorizontal: {
    bold: boldIcons.RowHorizontalBold,
    broken: brokenIcons.RowHorizontalBroken,
    bulk: bulkIcons.RowHorizontalBulk,
    linear: linearIcons.RowHorizontalLinear,
    outline: outlineIcons.RowHorizontalOutline,
    twotone: twotoneIcons.RowHorizontalTwoTone
  },
  RowVertical: {
    bold: boldIcons.RowVerticalBold,
    broken: brokenIcons.RowVerticalBroken,
    bulk: bulkIcons.RowVerticalBulk,
    linear: linearIcons.RowVerticalLinear,
    outline: outlineIcons.RowVerticalOutline,
    twotone: twotoneIcons.RowVerticalTwoTone
  },
  Ruler: {
    bold: boldIcons.RulerBold,
    broken: brokenIcons.RulerBroken,
    bulk: bulkIcons.RulerBulk,
    linear: linearIcons.RulerLinear,
    outline: outlineIcons.RulerOutline,
    twotone: twotoneIcons.RulerTwoTone
  },
  RulerPen: {
    bold: boldIcons.RulerPenBold,
    broken: brokenIcons.RulerPenBroken,
    bulk: bulkIcons.RulerPenBulk,
    linear: linearIcons.RulerPenLinear,
    outline: outlineIcons.RulerPenOutline,
    twotone: twotoneIcons.RulerPenTwoTone
  },
  SafeHome: {
    bold: boldIcons.SafeHomeBold,
    broken: brokenIcons.SafeHomeBroken,
    bulk: bulkIcons.SafeHomeBulk,
    linear: linearIcons.SafeHomeLinear,
    outline: outlineIcons.SafeHomeOutline,
    twotone: twotoneIcons.SafeHomeTwoTone
  },
  Sagittarius: {
    bold: boldIcons.SagittariusBold,
    broken: brokenIcons.SagittariusBroken,
    bulk: bulkIcons.SagittariusBulk,
    linear: linearIcons.SagittariusLinear,
    outline: outlineIcons.SagittariusOutline,
    twotone: twotoneIcons.SagittariusTwoTone
  },
  Save2: {
    bold: boldIcons.Save2Bold,
    broken: brokenIcons.Save2Broken,
    bulk: bulkIcons.Save2Bulk,
    linear: linearIcons.Save2Linear,
    outline: outlineIcons.Save2Outline,
    twotone: twotoneIcons.Save2TwoTone
  },
  SaveAdd: {
    bold: boldIcons.SaveAddBold,
    broken: brokenIcons.SaveAddBroken,
    bulk: bulkIcons.SaveAddBulk,
    linear: linearIcons.SaveAddLinear,
    outline: outlineIcons.SaveAddOutline,
    twotone: twotoneIcons.SaveAddTwoTone
  },
  SaveMinus: {
    bold: boldIcons.SaveMinusBold,
    broken: brokenIcons.SaveMinusBroken,
    bulk: bulkIcons.SaveMinusBulk,
    linear: linearIcons.SaveMinusLinear,
    outline: outlineIcons.SaveMinusOutline,
    twotone: twotoneIcons.SaveMinusTwoTone
  },
  SaveRemove: {
    bold: boldIcons.SaveRemoveBold,
    broken: brokenIcons.SaveRemoveBroken,
    bulk: bulkIcons.SaveRemoveBulk,
    linear: linearIcons.SaveRemoveLinear,
    outline: outlineIcons.SaveRemoveOutline,
    twotone: twotoneIcons.SaveRemoveTwoTone
  },
  Scan: {
    bold: boldIcons.ScanBold,
    broken: brokenIcons.ScanBroken,
    bulk: bulkIcons.ScanBulk,
    linear: linearIcons.ScanLinear,
    outline: outlineIcons.ScanOutline,
    twotone: twotoneIcons.ScanTwoTone
  },
  ScanBarcode: {
    bold: boldIcons.ScanBarcodeBold,
    broken: brokenIcons.ScanBarcodeBroken,
    bulk: bulkIcons.ScanBarcodeBulk,
    linear: linearIcons.ScanBarcodeLinear,
    outline: outlineIcons.ScanBarcodeOutline,
    twotone: twotoneIcons.ScanBarcodeTwoTone
  },
  Scanner: {
    bold: boldIcons.ScannerBold,
    broken: brokenIcons.ScannerBroken,
    bulk: bulkIcons.ScannerBulk,
    linear: linearIcons.ScannerLinear,
    outline: outlineIcons.ScannerOutline,
    twotone: twotoneIcons.ScannerTwoTone
  },
  Scanning: {
    bold: boldIcons.ScanningBold,
    broken: brokenIcons.ScanningBroken,
    bulk: bulkIcons.ScanningBulk,
    linear: linearIcons.ScanningLinear,
    outline: outlineIcons.ScanningOutline,
    twotone: twotoneIcons.ScanningTwoTone
  },
  Scissor: {
    bold: boldIcons.ScissorBold,
    broken: brokenIcons.ScissorBroken,
    bulk: bulkIcons.ScissorBulk,
    linear: linearIcons.ScissorLinear,
    outline: outlineIcons.ScissorOutline,
    twotone: twotoneIcons.ScissorTwoTone
  },
  Scissor1: {
    linear: linearIcons.Scissor1Linear
  },
  ScissorCopy: {
    bold: boldIcons.ScissorCopyBold,
    broken: brokenIcons.ScissorCopyBroken,
    bulk: bulkIcons.ScissorCopyBulk,
    linear: linearIcons.ScissorCopyLinear,
    outline: outlineIcons.ScissorCopyOutline,
    twotone: twotoneIcons.ScissorCopyTwoTone
  },
  Screenmirroring: {
    bold: boldIcons.ScreenmirroringBold,
    broken: brokenIcons.ScreenmirroringBroken,
    bulk: bulkIcons.ScreenmirroringBulk,
    linear: linearIcons.ScreenmirroringLinear,
    outline: outlineIcons.ScreenmirroringOutline,
    twotone: twotoneIcons.ScreenmirroringTwoTone
  },
  Scroll: {
    bold: boldIcons.ScrollBold,
    broken: brokenIcons.ScrollBroken,
    bulk: bulkIcons.ScrollBulk,
    linear: linearIcons.ScrollLinear,
    outline: outlineIcons.ScrollOutline,
    twotone: twotoneIcons.ScrollTwoTone
  },
  SearchFavorite: {
    bold: boldIcons.SearchFavoriteBold,
    broken: brokenIcons.SearchFavoriteBroken,
    bulk: bulkIcons.SearchFavoriteBulk,
    linear: linearIcons.SearchFavoriteLinear,
    outline: outlineIcons.SearchFavoriteOutline,
    twotone: twotoneIcons.SearchFavoriteTwoTone
  },
  SearchFavorite1: {
    bold: boldIcons.SearchFavorite1Bold,
    broken: brokenIcons.SearchFavorite1Broken,
    bulk: bulkIcons.SearchFavorite1Bulk,
    linear: linearIcons.SearchFavorite1Linear,
    outline: outlineIcons.SearchFavorite1Outline,
    twotone: twotoneIcons.SearchFavorite1TwoTone
  },
  SearchNormal: {
    bold: boldIcons.SearchNormalBold,
    broken: brokenIcons.SearchNormalBroken,
    bulk: bulkIcons.SearchNormalBulk,
    linear: linearIcons.SearchNormalLinear,
    outline: outlineIcons.SearchNormalOutline,
    twotone: twotoneIcons.SearchNormalTwoTone
  },
  SearchNormal1: {
    bold: boldIcons.SearchNormal1Bold,
    broken: brokenIcons.SearchNormal1Broken,
    bulk: bulkIcons.SearchNormal1Bulk,
    linear: linearIcons.SearchNormal1Linear,
    outline: outlineIcons.SearchNormal1Outline,
    twotone: twotoneIcons.SearchNormal1TwoTone
  },
  SearchStatus: {
    bold: boldIcons.SearchStatusBold,
    broken: brokenIcons.SearchStatusBroken,
    bulk: bulkIcons.SearchStatusBulk,
    linear: linearIcons.SearchStatusLinear,
    outline: outlineIcons.SearchStatusOutline,
    twotone: twotoneIcons.SearchStatusTwoTone
  },
  SearchStatus1: {
    bold: boldIcons.SearchStatus1Bold,
    broken: brokenIcons.SearchStatus1Broken,
    bulk: bulkIcons.SearchStatus1Bulk,
    linear: linearIcons.SearchStatus1Linear,
    outline: outlineIcons.SearchStatus1Outline,
    twotone: twotoneIcons.SearchStatus1TwoTone
  },
  SearchZoomIn: {
    bold: boldIcons.SearchZoomInBold,
    broken: brokenIcons.SearchZoomInBroken,
    bulk: bulkIcons.SearchZoomInBulk,
    linear: linearIcons.SearchZoomInLinear,
    outline: outlineIcons.SearchZoomInOutline,
    twotone: twotoneIcons.SearchZoomInTwoTone
  },
  SearchZoomIn1: {
    bold: boldIcons.SearchZoomIn1Bold,
    broken: brokenIcons.SearchZoomIn1Broken,
    bulk: bulkIcons.SearchZoomIn1Bulk,
    linear: linearIcons.SearchZoomIn1Linear,
    outline: outlineIcons.SearchZoomIn1Outline,
    twotone: twotoneIcons.SearchZoomIn1TwoTone
  },
  SearchZoomOut: {
    bold: boldIcons.SearchZoomOutBold,
    broken: brokenIcons.SearchZoomOutBroken,
    bulk: bulkIcons.SearchZoomOutBulk,
    linear: linearIcons.SearchZoomOutLinear,
    outline: outlineIcons.SearchZoomOutOutline,
    twotone: twotoneIcons.SearchZoomOutTwoTone
  },
  SearchZoomOut1: {
    bold: boldIcons.SearchZoomOut1Bold,
    broken: brokenIcons.SearchZoomOut1Broken,
    bulk: bulkIcons.SearchZoomOut1Bulk,
    linear: linearIcons.SearchZoomOut1Linear,
    outline: outlineIcons.SearchZoomOut1Outline,
    twotone: twotoneIcons.SearchZoomOut1TwoTone
  },
  Security: {
    bold: boldIcons.SecurityBold,
    broken: brokenIcons.SecurityBroken,
    bulk: bulkIcons.SecurityBulk,
    linear: linearIcons.SecurityLinear,
    outline: outlineIcons.SecurityOutline,
    twotone: twotoneIcons.SecurityTwoTone
  },
  SecurityCard: {
    bold: boldIcons.SecurityCardBold,
    broken: brokenIcons.SecurityCardBroken,
    bulk: bulkIcons.SecurityCardBulk,
    linear: linearIcons.SecurityCardLinear,
    outline: outlineIcons.SecurityCardOutline,
    twotone: twotoneIcons.SecurityCardTwoTone
  },
  SecuritySafe: {
    bold: boldIcons.SecuritySafeBold,
    broken: brokenIcons.SecuritySafeBroken,
    bulk: bulkIcons.SecuritySafeBulk,
    linear: linearIcons.SecuritySafeLinear,
    outline: outlineIcons.SecuritySafeOutline,
    twotone: twotoneIcons.SecuritySafeTwoTone
  },
  SecurityTime: {
    bold: boldIcons.SecurityTimeBold,
    broken: brokenIcons.SecurityTimeBroken,
    bulk: bulkIcons.SecurityTimeBulk,
    linear: linearIcons.SecurityTimeLinear,
    outline: outlineIcons.SecurityTimeOutline,
    twotone: twotoneIcons.SecurityTimeTwoTone
  },
  SecurityUser: {
    bold: boldIcons.SecurityUserBold,
    broken: brokenIcons.SecurityUserBroken,
    bulk: bulkIcons.SecurityUserBulk,
    linear: linearIcons.SecurityUserLinear,
    outline: outlineIcons.SecurityUserOutline,
    twotone: twotoneIcons.SecurityUserTwoTone
  },
  Send: {
    bold: boldIcons.SendBold,
    broken: brokenIcons.SendBroken,
    bulk: bulkIcons.SendBulk,
    linear: linearIcons.SendLinear,
    outline: outlineIcons.SendOutline,
    twotone: twotoneIcons.SendTwoTone
  },
  Send2: {
    bold: boldIcons.Send2Bold,
    broken: brokenIcons.Send2Broken,
    bulk: bulkIcons.Send2Bulk,
    linear: linearIcons.Send2Linear,
    outline: outlineIcons.Send2Outline,
    twotone: twotoneIcons.Send2TwoTone
  },
  SendCopy: {
    bold: boldIcons.SendCopyBold,
    broken: brokenIcons.SendCopyBroken,
    bulk: bulkIcons.SendCopyBulk,
    linear: linearIcons.SendCopyLinear,
    outline: outlineIcons.SendCopyOutline,
    twotone: twotoneIcons.SendCopyTwoTone
  },
  SendSqaure2: {
    bold: boldIcons.SendSqaure2Bold,
    broken: brokenIcons.SendSqaure2Broken,
    bulk: bulkIcons.SendSqaure2Bulk,
    linear: linearIcons.SendSqaure2Linear,
    outline: outlineIcons.SendSqaure2Outline,
    twotone: twotoneIcons.SendSqaure2TwoTone
  },
  SendSquare: {
    bold: boldIcons.SendSquareBold,
    broken: brokenIcons.SendSquareBroken,
    bulk: bulkIcons.SendSquareBulk,
    linear: linearIcons.SendSquareLinear,
    outline: outlineIcons.SendSquareOutline,
    twotone: twotoneIcons.SendSquareTwoTone
  },
  Setting: {
    bold: boldIcons.SettingBold,
    broken: brokenIcons.SettingBroken,
    bulk: bulkIcons.SettingBulk,
    linear: linearIcons.SettingLinear,
    outline: outlineIcons.SettingOutline,
    twotone: twotoneIcons.SettingTwoTone
  },
  Setting2: {
    bold: boldIcons.Setting2Bold,
    broken: brokenIcons.Setting2Broken,
    bulk: bulkIcons.Setting2Bulk,
    linear: linearIcons.Setting2Linear,
    outline: outlineIcons.Setting2Outline,
    twotone: twotoneIcons.Setting2TwoTone
  },
  Setting3: {
    bold: boldIcons.Setting3Bold,
    broken: brokenIcons.Setting3Broken,
    bulk: bulkIcons.Setting3Bulk,
    linear: linearIcons.Setting3Linear,
    outline: outlineIcons.Setting3Outline,
    twotone: twotoneIcons.Setting3TwoTone
  },
  Setting4: {
    bold: boldIcons.Setting4Bold,
    broken: brokenIcons.Setting4Broken,
    bulk: bulkIcons.Setting4Bulk,
    linear: linearIcons.Setting4Linear,
    outline: outlineIcons.Setting4Outline,
    twotone: twotoneIcons.Setting4TwoTone
  },
  Setting5: {
    bold: boldIcons.Setting5Bold,
    broken: brokenIcons.Setting5Broken,
    bulk: bulkIcons.Setting5Bulk,
    linear: linearIcons.Setting5Linear,
    outline: outlineIcons.Setting5Outline,
    twotone: twotoneIcons.Setting5TwoTone
  },
  Settings: {
    bold: boldIcons.SettingsBold,
    broken: brokenIcons.SettingsBroken,
    bulk: bulkIcons.SettingsBulk,
    linear: linearIcons.SettingsLinear,
    outline: outlineIcons.SettingsOutline,
    twotone: twotoneIcons.SettingsTwoTone
  },
  Shapes: {
    bold: boldIcons.ShapesBold,
    broken: brokenIcons.ShapesBroken,
    bulk: bulkIcons.ShapesBulk,
    linear: linearIcons.ShapesLinear,
    outline: outlineIcons.ShapesOutline,
    twotone: twotoneIcons.ShapesTwoTone
  },
  Shapes1: {
    bold: boldIcons.Shapes1Bold,
    broken: brokenIcons.Shapes1Broken,
    bulk: bulkIcons.Shapes1Bulk,
    linear: linearIcons.Shapes1Linear,
    outline: outlineIcons.Shapes1Outline,
    twotone: twotoneIcons.Shapes1TwoTone
  },
  Shapes2: {
    linear: linearIcons.Shapes2Linear
  },
  Share: {
    bold: boldIcons.ShareBold,
    broken: brokenIcons.ShareBroken,
    bulk: bulkIcons.ShareBulk,
    linear: linearIcons.ShareLinear,
    outline: outlineIcons.ShareOutline,
    twotone: twotoneIcons.ShareTwoTone
  },
  Shield: {
    bulk: bulkIcons.ShieldBulk,
    linear: linearIcons.ShieldLinear,
    outline: outlineIcons.ShieldOutline,
    twotone: twotoneIcons.ShieldTwoTone
  },
  ShieldCross: {
    bold: boldIcons.ShieldCrossBold,
    broken: brokenIcons.ShieldCrossBroken,
    bulk: bulkIcons.ShieldCrossBulk,
    linear: linearIcons.ShieldCrossLinear,
    outline: outlineIcons.ShieldCrossOutline,
    twotone: twotoneIcons.ShieldCrossTwoTone
  },
  ShieldSearch: {
    bold: boldIcons.ShieldSearchBold,
    broken: brokenIcons.ShieldSearchBroken,
    bulk: bulkIcons.ShieldSearchBulk,
    linear: linearIcons.ShieldSearchLinear,
    outline: outlineIcons.ShieldSearchOutline,
    twotone: twotoneIcons.ShieldSearchTwoTone
  },
  ShieldSecurity: {
    bold: boldIcons.ShieldSecurityBold,
    bulk: bulkIcons.ShieldSecurityBulk,
    linear: linearIcons.ShieldSecurityLinear,
    twotone: twotoneIcons.ShieldSecurityTwoTone
  },
  ShieldSlash: {
    bold: boldIcons.ShieldSlashBold,
    broken: brokenIcons.ShieldSlashBroken,
    bulk: bulkIcons.ShieldSlashBulk,
    linear: linearIcons.ShieldSlashLinear,
    outline: outlineIcons.ShieldSlashOutline,
    twotone: twotoneIcons.ShieldSlashTwoTone
  },
  ShieldTick: {
    bold: boldIcons.ShieldTickBold,
    broken: brokenIcons.ShieldTickBroken,
    bulk: bulkIcons.ShieldTickBulk,
    linear: linearIcons.ShieldTickLinear,
    outline: outlineIcons.ShieldTickOutline,
    twotone: twotoneIcons.ShieldTickTwoTone
  },
  Ship: {
    bold: boldIcons.ShipBold,
    broken: brokenIcons.ShipBroken,
    bulk: bulkIcons.ShipBulk,
    linear: linearIcons.ShipLinear,
    outline: outlineIcons.ShipOutline,
    twotone: twotoneIcons.ShipTwoTone
  },
  Shop: {
    twotone: twotoneIcons.ShopTwoTone
  },
  Shop2: {
    bold: boldIcons.ShopBold,
    broken: brokenIcons.ShopBroken,
    bulk: bulkIcons.ShopBulk,
    linear: linearIcons.ShopLinear,
    outline: outlineIcons.ShopOutline
  },
  ShopAdd: {
    bold: boldIcons.ShopAddBold,
    broken: brokenIcons.ShopAddBroken,
    bulk: bulkIcons.ShopAddBulk,
    linear: linearIcons.ShopAddLinear,
    outline: outlineIcons.ShopAddOutline,
    twotone: twotoneIcons.ShopAddTwoTone
  },
  ShopCopy: {
    twotone: twotoneIcons.ShopCopyTwoTone
  },
  ShoppingBag: {
    bold: boldIcons.ShoppingBagBold,
    broken: brokenIcons.ShoppingBagBroken,
    bulk: bulkIcons.ShoppingBagBulk,
    linear: linearIcons.ShoppingBagLinear,
    outline: outlineIcons.ShoppingBagOutline,
    twotone: twotoneIcons.ShoppingBagTwoTone
  },
  ShoppingCart: {
    bold: boldIcons.ShoppingCartBold,
    broken: brokenIcons.ShoppingCartBroken,
    bulk: bulkIcons.ShoppingCartBulk,
    linear: linearIcons.ShoppingCartLinear,
    outline: outlineIcons.ShoppingCartOutline,
    twotone: twotoneIcons.ShoppingCartTwoTone
  },
  ShopRemove: {
    bold: boldIcons.ShopRemoveBold,
    broken: brokenIcons.ShopRemoveBroken,
    bulk: bulkIcons.ShopRemoveBulk,
    linear: linearIcons.ShopRemoveLinear,
    outline: outlineIcons.ShopRemoveOutline,
    twotone: twotoneIcons.ShopRemoveTwoTone
  },
  Shuffle: {
    bold: boldIcons.ShuffleBold,
    broken: brokenIcons.ShuffleBroken,
    bulk: bulkIcons.ShuffleBulk,
    outline: outlineIcons.ShuffleOutline,
    twotone: twotoneIcons.ShuffleTwoTone
  },
  SiacoinSc: {
    bold: boldIcons.SiacoinScBold,
    broken: brokenIcons.SiacoinScBroken,
    bulk: bulkIcons.SiacoinScBulk,
    linear: linearIcons.SiacoinScLinear,
    outline: outlineIcons.SiacoinScOutline,
    twotone: twotoneIcons.SiacoinScTwoTone
  },
  SidebarBottom: {
    bold: boldIcons.SidebarBottomBold,
    broken: brokenIcons.SidebarBottomBroken,
    bulk: bulkIcons.SidebarBottomBulk,
    linear: linearIcons.SidebarBottomLinear,
    outline: outlineIcons.SidebarBottomOutline,
    twotone: twotoneIcons.SidebarBottomTwoTone
  },
  SidebarLeft: {
    bold: boldIcons.SidebarLeftBold,
    broken: brokenIcons.SidebarLeftBroken,
    bulk: bulkIcons.SidebarLeftBulk,
    linear: linearIcons.SidebarLeftLinear,
    outline: outlineIcons.SidebarLeftOutline,
    twotone: twotoneIcons.SidebarLeftTwoTone
  },
  SidebarRight: {
    bold: boldIcons.SidebarRightBold,
    broken: brokenIcons.SidebarRightBroken,
    bulk: bulkIcons.SidebarRightBulk,
    linear: linearIcons.SidebarRightLinear,
    outline: outlineIcons.SidebarRightOutline,
    twotone: twotoneIcons.SidebarRightTwoTone
  },
  SidebarTop: {
    bold: boldIcons.SidebarTopBold,
    broken: brokenIcons.SidebarTopBroken,
    bulk: bulkIcons.SidebarTopBulk,
    linear: linearIcons.SidebarTopLinear,
    outline: outlineIcons.SidebarTopOutline,
    twotone: twotoneIcons.SidebarTopTwoTone
  },
  Signpost: {
    bold: boldIcons.SignpostBold,
    broken: brokenIcons.SignpostBroken,
    bulk: bulkIcons.SignpostBulk,
    linear: linearIcons.SignpostLinear,
    outline: outlineIcons.SignpostOutline,
    twotone: twotoneIcons.SignpostTwoTone
  },
  Simcard: {
    bold: boldIcons.SimcardBold,
    broken: brokenIcons.SimcardBroken,
    bulk: bulkIcons.SimcardBulk,
    linear: linearIcons.SimcardLinear,
    outline: outlineIcons.SimcardOutline,
    twotone: twotoneIcons.SimcardTwoTone
  },
  Simcard1: {
    bold: boldIcons.Simcard1Bold,
    broken: brokenIcons.Simcard1Broken,
    bulk: bulkIcons.Simcard1Bulk,
    linear: linearIcons.Simcard1Linear,
    outline: outlineIcons.Simcard1Outline,
    twotone: twotoneIcons.Simcard1TwoTone
  },
  Simcard2: {
    bold: boldIcons.Simcard2Bold,
    broken: brokenIcons.Simcard2Broken,
    bulk: bulkIcons.Simcard2Bulk,
    linear: linearIcons.Simcard2Linear,
    outline: outlineIcons.Simcard2Outline,
    twotone: twotoneIcons.Simcard2TwoTone
  },
  Size: {
    bold: boldIcons.SizeBold,
    broken: brokenIcons.SizeBroken,
    bulk: bulkIcons.SizeBulk,
    linear: linearIcons.SizeLinear,
    outline: outlineIcons.SizeOutline,
    twotone: twotoneIcons.SizeTwoTone
  },
  Slack: {
    bold: boldIcons.SlackBold,
    broken: brokenIcons.SlackBroken,
    bulk: bulkIcons.SlackBulk,
    linear: linearIcons.SlackLinear,
    outline: outlineIcons.SlackOutline,
    twotone: twotoneIcons.SlackTwoTone
  },
  Slash: {
    bold: boldIcons.SlashBold,
    broken: brokenIcons.SlashBroken,
    bulk: bulkIcons.SlashBulk,
    linear: linearIcons.SlashLinear,
    outline: outlineIcons.SlashOutline,
    twotone: twotoneIcons.SlashTwoTone
  },
  Slider: {
    bold: boldIcons.SliderBold,
    broken: brokenIcons.SliderBroken,
    bulk: bulkIcons.SliderBulk,
    linear: linearIcons.SliderLinear,
    outline: outlineIcons.SliderOutline,
    twotone: twotoneIcons.SliderTwoTone
  },
  SliderHorizontal: {
    bold: boldIcons.SliderHorizontalBold,
    broken: brokenIcons.SliderHorizontalBroken,
    bulk: bulkIcons.SliderHorizontalBulk,
    linear: linearIcons.SliderHorizontalLinear,
    outline: outlineIcons.SliderHorizontalOutline,
    twotone: twotoneIcons.SliderHorizontalTwoTone
  },
  SliderHorizontal1: {
    bold: boldIcons.SliderHorizontal1Bold,
    broken: brokenIcons.SliderHorizontal1Broken,
    bulk: bulkIcons.SliderHorizontal1Bulk,
    linear: linearIcons.SliderHorizontal1Linear,
    outline: outlineIcons.SliderHorizontal1Outline,
    twotone: twotoneIcons.SliderHorizontal1TwoTone
  },
  SliderVertical: {
    bold: boldIcons.SliderVerticalBold,
    broken: brokenIcons.SliderVerticalBroken,
    bulk: bulkIcons.SliderVerticalBulk,
    linear: linearIcons.SliderVerticalLinear,
    outline: outlineIcons.SliderVerticalOutline,
    twotone: twotoneIcons.SliderVerticalTwoTone
  },
  SliderVertical1: {
    bold: boldIcons.SliderVertical1Bold,
    broken: brokenIcons.SliderVertical1Broken,
    bulk: bulkIcons.SliderVertical1Bulk,
    linear: linearIcons.SliderVertical1Linear,
    outline: outlineIcons.SliderVertical1Outline,
    twotone: twotoneIcons.SliderVertical1TwoTone
  },
  Smallcaps: {
    bold: boldIcons.SmallcapsBold,
    broken: brokenIcons.SmallcapsBroken,
    bulk: bulkIcons.SmallcapsBulk,
    linear: linearIcons.SmallcapsLinear,
    outline: outlineIcons.SmallcapsOutline,
    twotone: twotoneIcons.SmallcapsTwoTone
  },
  SmartCar: {
    bold: boldIcons.SmartCarBold,
    broken: brokenIcons.SmartCarBroken,
    bulk: bulkIcons.SmartCarBulk,
    linear: linearIcons.SmartCarLinear,
    outline: outlineIcons.SmartCarOutline,
    twotone: twotoneIcons.SmartCarTwoTone
  },
  SmartHome: {
    bold: boldIcons.SmartHomeBold,
    broken: brokenIcons.SmartHomeBroken,
    bulk: bulkIcons.SmartHomeBulk,
    linear: linearIcons.SmartHomeLinear,
    outline: outlineIcons.SmartHomeOutline,
    twotone: twotoneIcons.SmartHomeTwoTone
  },
  Smileys: {
    bold: boldIcons.SmileysBold,
    broken: brokenIcons.SmileysBroken,
    bulk: bulkIcons.SmileysBulk,
    linear: linearIcons.SmileysLinear,
    outline: outlineIcons.SmileysOutline,
    twotone: twotoneIcons.SmileysTwoTone
  },
  Sms: {
    bold: boldIcons.SmsBold,
    broken: brokenIcons.SmsBroken,
    bulk: bulkIcons.SmsBulk,
    linear: linearIcons.SmsLinear,
    outline: outlineIcons.SmsOutline,
    twotone: twotoneIcons.SmsTwoTone
  },
  SmsEdit: {
    bold: boldIcons.SmsEditBold,
    broken: brokenIcons.SmsEditBroken,
    bulk: bulkIcons.SmsEditBulk,
    linear: linearIcons.SmsEditLinear,
    outline: outlineIcons.SmsEditOutline,
    twotone: twotoneIcons.SmsEditTwoTone
  },
  SmsNotification: {
    bold: boldIcons.SmsNotificationBold,
    broken: brokenIcons.SmsNotificationBroken,
    bulk: bulkIcons.SmsNotificationBulk,
    linear: linearIcons.SmsNotificationLinear,
    outline: outlineIcons.SmsNotificationOutline,
    twotone: twotoneIcons.SmsNotificationTwoTone
  },
  SmsSearch: {
    bold: boldIcons.SmsSearchBold,
    broken: brokenIcons.SmsSearchBroken,
    bulk: bulkIcons.SmsSearchBulk,
    linear: linearIcons.SmsSearchLinear,
    outline: outlineIcons.SmsSearchOutline,
    twotone: twotoneIcons.SmsSearchTwoTone
  },
  SmsStar: {
    bold: boldIcons.SmsStarBold,
    broken: brokenIcons.SmsStarBroken,
    bulk: bulkIcons.SmsStarBulk,
    linear: linearIcons.SmsStarLinear,
    outline: outlineIcons.SmsStarOutline,
    twotone: twotoneIcons.SmsStarTwoTone
  },
  SmsTracking: {
    bold: boldIcons.SmsTrackingBold,
    broken: brokenIcons.SmsTrackingBroken,
    bulk: bulkIcons.SmsTrackingBulk,
    linear: linearIcons.SmsTrackingLinear,
    outline: outlineIcons.SmsTrackingOutline,
    twotone: twotoneIcons.SmsTrackingTwoTone
  },
  Snapchat: {
    bold: boldIcons.SnapchatBold,
    broken: brokenIcons.SnapchatBroken,
    bulk: bulkIcons.SnapchatBulk,
    linear: linearIcons.SnapchatLinear,
    outline: outlineIcons.SnapchatOutline,
    twotone: twotoneIcons.SnapchatTwoTone
  },
  SolanaSol: {
    bold: boldIcons.SolanaSolBold,
    broken: brokenIcons.SolanaSolBroken,
    bulk: bulkIcons.SolanaSolBulk,
    linear: linearIcons.SolanaSolLinear,
    outline: outlineIcons.SolanaSolOutline,
    twotone: twotoneIcons.SolanaSolTwoTone
  },
  Sort: {
    bold: boldIcons.SortBold,
    broken: brokenIcons.SortBroken,
    bulk: bulkIcons.SortBulk,
    linear: linearIcons.SortLinear,
    outline: outlineIcons.SortOutline,
    twotone: twotoneIcons.SortTwoTone
  },
  Sound: {
    bold: boldIcons.SoundBold,
    broken: brokenIcons.SoundBroken,
    bulk: bulkIcons.SoundBulk,
    linear: linearIcons.SoundLinear,
    outline: outlineIcons.SoundOutline,
    twotone: twotoneIcons.SoundTwoTone
  },
  Speaker: {
    bold: boldIcons.SpeakerBold,
    broken: brokenIcons.SpeakerBroken,
    bulk: bulkIcons.SpeakerBulk,
    linear: linearIcons.SpeakerLinear,
    outline: outlineIcons.SpeakerOutline,
    twotone: twotoneIcons.SpeakerTwoTone
  },
  Speedometer: {
    bold: boldIcons.SpeedometerBold,
    broken: brokenIcons.SpeedometerBroken,
    bulk: bulkIcons.SpeedometerBulk,
    linear: linearIcons.SpeedometerLinear,
    outline: outlineIcons.SpeedometerOutline,
    twotone: twotoneIcons.SpeedometerTwoTone
  },
  Spotify: {
    bold: boldIcons.SpotifyBold,
    broken: brokenIcons.SpotifyBroken,
    bulk: bulkIcons.SpotifyBulk,
    linear: linearIcons.SpotifyLinear,
    outline: outlineIcons.SpotifyOutline,
    twotone: twotoneIcons.SpotifyTwoTone
  },
  StacksStx: {
    bold: boldIcons.StacksStxBold,
    broken: brokenIcons.StacksStxBroken,
    bulk: bulkIcons.StacksStxBulk,
    linear: linearIcons.StacksStxLinear,
    outline: outlineIcons.StacksStxOutline,
    twotone: twotoneIcons.StacksStxTwoTone
  },
  Star: {
    bold: boldIcons.StarBold,
    broken: brokenIcons.StarBroken,
    bulk: bulkIcons.StarBulk,
    linear: linearIcons.StarLinear,
    outline: outlineIcons.StarOutline,
    twotone: twotoneIcons.StarTwoTone
  },
  Star1: {
    bold: boldIcons.Star1Bold,
    broken: brokenIcons.Star1Broken,
    bulk: bulkIcons.Star1Bulk,
    linear: linearIcons.Star1Linear,
    outline: outlineIcons.Star1Outline,
    twotone: twotoneIcons.Star1TwoTone
  },
  StarSlash: {
    bold: boldIcons.StarSlashBold,
    broken: brokenIcons.StarSlashBroken,
    bulk: bulkIcons.StarSlashBulk,
    linear: linearIcons.StarSlashLinear,
    outline: outlineIcons.StarSlashOutline,
    twotone: twotoneIcons.StarSlashTwoTone
  },
  Status: {
    bold: boldIcons.StatusBold,
    broken: brokenIcons.StatusBroken,
    bulk: bulkIcons.StatusBulk,
    linear: linearIcons.StatusLinear,
    outline: outlineIcons.StatusOutline,
    twotone: twotoneIcons.StatusTwoTone
  },
  StatusUp: {
    bold: boldIcons.StatusUpBold,
    broken: brokenIcons.StatusUpBroken,
    bulk: bulkIcons.StatusUpBulk,
    linear: linearIcons.StatusUpLinear,
    outline: outlineIcons.StatusUpOutline,
    twotone: twotoneIcons.StatusUpTwoTone
  },
  StellarXlm: {
    bold: boldIcons.StellarXlmBold,
    broken: brokenIcons.StellarXlmBroken,
    linear: linearIcons.StellarXlmLinear,
    outline: outlineIcons.StellarXlmOutline,
    twotone: twotoneIcons.StellarXlmTwoTone
  },
  Sticker: {
    bold: boldIcons.StickerBold,
    broken: brokenIcons.StickerBroken,
    bulk: bulkIcons.StickerBulk,
    linear: linearIcons.StickerLinear,
    outline: outlineIcons.StickerOutline,
    twotone: twotoneIcons.StickerTwoTone
  },
  Stickynote: {
    bold: boldIcons.StickynoteBold,
    broken: brokenIcons.StickynoteBroken,
    bulk: bulkIcons.StickynoteBulk,
    linear: linearIcons.StickynoteLinear,
    outline: outlineIcons.StickynoteOutline,
    twotone: twotoneIcons.StickynoteTwoTone
  },
  Stop: {
    bold: boldIcons.StopBold,
    broken: brokenIcons.StopBroken,
    bulk: bulkIcons.StopBulk,
    linear: linearIcons.StopLinear,
    outline: outlineIcons.StopOutline,
    twotone: twotoneIcons.StopTwoTone
  },
  StopCircle: {
    bold: boldIcons.StopCircleBold,
    broken: brokenIcons.StopCircleBroken,
    bulk: bulkIcons.StopCircleBulk,
    linear: linearIcons.StopCircleLinear,
    outline: outlineIcons.StopCircleOutline,
    twotone: twotoneIcons.StopCircleTwoTone
  },
  Story: {
    bold: boldIcons.StoryBold,
    broken: brokenIcons.StoryBroken,
    bulk: bulkIcons.StoryBulk,
    linear: linearIcons.StoryLinear,
    outline: outlineIcons.StoryOutline,
    twotone: twotoneIcons.StoryTwoTone
  },
  Strongbox: {
    bold: boldIcons.StrongboxBold,
    broken: brokenIcons.StrongboxBroken,
    bulk: bulkIcons.StrongboxBulk,
    linear: linearIcons.StrongboxLinear,
    outline: outlineIcons.StrongboxOutline,
    twotone: twotoneIcons.StrongboxTwoTone
  },
  Strongbox2: {
    bold: boldIcons.Strongbox2Bold,
    broken: brokenIcons.Strongbox2Broken,
    bulk: bulkIcons.Strongbox2Bulk,
    linear: linearIcons.Strongbox2Linear,
    outline: outlineIcons.Strongbox2Outline,
    twotone: twotoneIcons.Strongbox2TwoTone
  },
  Subtitle: {
    bold: boldIcons.SubtitleBold,
    broken: brokenIcons.SubtitleBroken,
    bulk: bulkIcons.SubtitleBulk,
    linear: linearIcons.SubtitleLinear,
    outline: outlineIcons.SubtitleOutline,
    twotone: twotoneIcons.SubtitleTwoTone
  },
  Sun: {
    bold: boldIcons.SunBold,
    broken: brokenIcons.SunBroken,
    bulk: bulkIcons.SunBulk,
    linear: linearIcons.SunLinear,
    outline: outlineIcons.SunOutline,
    twotone: twotoneIcons.SunTwoTone
  },
  Sun1: {
    bold: boldIcons.Sun1Bold,
    broken: brokenIcons.Sun1Broken,
    bulk: bulkIcons.Sun1Bulk,
    linear: linearIcons.Sun1Linear,
    outline: outlineIcons.Sun1Outline,
    twotone: twotoneIcons.Sun1TwoTone
  },
  SunFog: {
    bold: boldIcons.SunFogBold,
    broken: brokenIcons.SunFogBroken,
    bulk: bulkIcons.SunFogBulk,
    linear: linearIcons.SunFogLinear,
    outline: outlineIcons.SunFogOutline,
    twotone: twotoneIcons.SunFogTwoTone
  },
  Tag: {
    bold: boldIcons.TagBold,
    broken: brokenIcons.TagBroken,
    bulk: bulkIcons.TagBulk,
    linear: linearIcons.TagLinear,
    outline: outlineIcons.TagOutline,
    twotone: twotoneIcons.TagTwoTone
  },
  Tag2: {
    bold: boldIcons.Tag2Bold,
    broken: brokenIcons.Tag2Broken,
    bulk: bulkIcons.Tag2Bulk,
    linear: linearIcons.Tag2Linear,
    outline: outlineIcons.Tag2Outline,
    twotone: twotoneIcons.Tag2TwoTone
  },
  TagCross: {
    bold: boldIcons.TagCrossBold,
    broken: brokenIcons.TagCrossBroken,
    bulk: bulkIcons.TagCrossBulk,
    linear: linearIcons.TagCrossLinear,
    outline: outlineIcons.TagCrossOutline,
    twotone: twotoneIcons.TagCrossTwoTone
  },
  TagRight: {
    bold: boldIcons.TagRightBold,
    broken: brokenIcons.TagRightBroken,
    bulk: bulkIcons.TagRightBulk,
    linear: linearIcons.TagRightLinear,
    outline: outlineIcons.TagRightOutline,
    twotone: twotoneIcons.TagRightTwoTone
  },
  TagUser: {
    bold: boldIcons.TagUserBold,
    broken: brokenIcons.TagUserBroken,
    bulk: bulkIcons.TagUserBulk,
    linear: linearIcons.TagUserLinear,
    outline: outlineIcons.TagUserOutline,
    twotone: twotoneIcons.TagUserTwoTone
  },
  Task: {
    bold: boldIcons.TaskBold,
    broken: brokenIcons.TaskBroken,
    bulk: bulkIcons.TaskBulk,
    linear: linearIcons.TaskLinear,
    outline: outlineIcons.TaskOutline,
    twotone: twotoneIcons.TaskTwoTone
  },
  TaskSquare: {
    bold: boldIcons.TaskSquareBold,
    broken: brokenIcons.TaskSquareBroken,
    bulk: bulkIcons.TaskSquareBulk,
    linear: linearIcons.TaskSquareLinear,
    outline: outlineIcons.TaskSquareOutline,
    twotone: twotoneIcons.TaskSquareTwoTone
  },
  Teacher: {
    bold: boldIcons.TeacherBold,
    broken: brokenIcons.TeacherBroken,
    linear: linearIcons.TeacherLinear,
    outline: outlineIcons.TeacherOutline,
    twotone: twotoneIcons.TeacherTwoTone
  },
  TenxPay: {
    bold: boldIcons.TenxPayBold,
    broken: brokenIcons.TenxPayBroken,
    bulk: bulkIcons.TenxPayBulk,
    linear: linearIcons.TenxPayLinear,
    outline: outlineIcons.TenxPayOutline,
    twotone: twotoneIcons.TenxPayTwoTone
  },
  TetherUsdt: {
    bold: boldIcons.TetherUsdtBold,
    broken: brokenIcons.TetherUsdtBroken,
    bulk: bulkIcons.TetherUsdtBulk,
    linear: linearIcons.TetherUsdtLinear,
    outline: outlineIcons.TetherUsdtOutline,
    twotone: twotoneIcons.TetherUsdtTwoTone
  },
  Text: {
    bold: boldIcons.Text2Bold,
    broken: brokenIcons.TextBroken,
    bulk: bulkIcons.TextBulk,
    linear: linearIcons.TextLinear,
    outline: outlineIcons.TextOutline,
    twotone: twotoneIcons.TextTwoTone
  },
  TextalignCenter: {
    bold: boldIcons.TextalignCenterBold,
    broken: brokenIcons.TextalignCenterBroken,
    bulk: bulkIcons.TextalignCenterBulk,
    linear: linearIcons.TextalignCenterLinear,
    outline: outlineIcons.TextalignCenterOutline,
    twotone: twotoneIcons.TextalignCenterTwoTone
  },
  TextalignJustifycenter: {
    bold: boldIcons.TextalignJustifycenterBold,
    broken: brokenIcons.TextalignJustifycenterBroken,
    bulk: bulkIcons.TextalignJustifycenterBulk,
    linear: linearIcons.TextalignJustifycenterLinear,
    outline: outlineIcons.TextalignJustifycenterOutline,
    twotone: twotoneIcons.TextalignJustifycenterTwoTone
  },
  TextalignJustifyleft: {
    bold: boldIcons.TextalignJustifyleftBold,
    broken: brokenIcons.TextalignJustifyleftBroken,
    bulk: bulkIcons.TextalignJustifyleftBulk,
    linear: linearIcons.TextalignJustifyleftLinear,
    outline: outlineIcons.TextalignJustifyleftOutline,
    twotone: twotoneIcons.TextalignJustifyleftTwoTone
  },
  TextalignJustifyright: {
    bold: boldIcons.TextalignJustifyrightBold,
    broken: brokenIcons.TextalignJustifyrightBroken,
    bulk: bulkIcons.TextalignJustifyrightBulk,
    linear: linearIcons.TextalignJustifyrightLinear,
    outline: outlineIcons.TextalignJustifyrightOutline,
    twotone: twotoneIcons.TextalignJustifyrightTwoTone
  },
  TextalignLeft: {
    bold: boldIcons.TextalignLeftBold,
    broken: brokenIcons.TextalignLeftBroken,
    bulk: bulkIcons.TextalignLeftBulk,
    linear: linearIcons.TextalignLeftLinear,
    outline: outlineIcons.TextalignLeftOutline,
    twotone: twotoneIcons.TextalignLeftTwoTone
  },
  TextalignRight: {
    bold: boldIcons.TextalignRightBold,
    broken: brokenIcons.TextalignRightBroken,
    bulk: bulkIcons.TextalignRightBulk,
    linear: linearIcons.TextalignRightLinear,
    outline: outlineIcons.TextalignRightOutline,
    twotone: twotoneIcons.TextalignRightTwoTone
  },
  TextBlock: {
    bold: boldIcons.TextBlockBold,
    broken: brokenIcons.TextBlockBroken,
    bulk: bulkIcons.TextBlockBulk,
    linear: linearIcons.TextBlockLinear,
    outline: outlineIcons.TextBlockOutline,
    twotone: twotoneIcons.TextBlockTwoTone
  },
  TextBold: {
    bold: boldIcons.TextBoldBold,
    broken: brokenIcons.TextBoldBroken,
    bulk: bulkIcons.TextBoldBulk,
    linear: linearIcons.TextBoldLinear,
    outline: outlineIcons.TextBoldOutline,
    twotone: twotoneIcons.TextBoldTwoTone
  },
  TextItalic: {
    bold: boldIcons.TextItalicBold,
    broken: brokenIcons.TextItalicBroken,
    bulk: bulkIcons.TextItalicBulk,
    linear: linearIcons.TextItalicLinear,
    outline: outlineIcons.TextItalicOutline,
    twotone: twotoneIcons.TextItalicTwoTone
  },
  TextUnderline: {
    bold: boldIcons.TextUnderlineBold,
    broken: brokenIcons.TextUnderlineBroken,
    bulk: bulkIcons.TextUnderlineBulk,
    linear: linearIcons.TextUnderlineLinear,
    outline: outlineIcons.TextUnderlineOutline,
    twotone: twotoneIcons.TextUnderlineTwoTone
  },
  TheGraphGrt: {
    bold: boldIcons.TheGraphGrtBold,
    broken: brokenIcons.TheGraphGrtBroken,
    bulk: bulkIcons.TheGraphGrtBulk,
    linear: linearIcons.TheGraphGrtLinear,
    outline: outlineIcons.TheGraphGrtOutline,
    twotone: twotoneIcons.TheGraphGrtTwoTone
  },
  ThetaTheta: {
    bold: boldIcons.ThetaThetaBold,
    broken: brokenIcons.ThetaThetaBroken,
    bulk: bulkIcons.ThetaThetaBulk,
    linear: linearIcons.ThetaThetaLinear,
    outline: outlineIcons.ThetaThetaOutline,
    twotone: twotoneIcons.ThetaThetaTwoTone
  },
  ThorchainRune: {
    bold: boldIcons.ThorchainRuneBold,
    broken: brokenIcons.ThorchainRuneBroken,
    bulk: bulkIcons.ThorchainRuneBulk,
    linear: linearIcons.ThorchainRuneLinear,
    outline: outlineIcons.ThorchainRuneOutline,
    twotone: twotoneIcons.ThorchainRuneTwoTone
  },
  TickCircle: {
    bold: boldIcons.TickCircleBold,
    broken: brokenIcons.TickCircleBroken,
    bulk: bulkIcons.TickCircleBulk,
    linear: linearIcons.TickCircleLinear,
    outline: outlineIcons.TickCircleOutline,
    twotone: twotoneIcons.TickCircleTwoTone
  },
  Ticket: {
    bold: boldIcons.TicketBold,
    broken: brokenIcons.TicketBroken,
    bulk: bulkIcons.TicketBulk,
    linear: linearIcons.TicketLinear,
    outline: outlineIcons.TicketOutline,
    twotone: twotoneIcons.TicketTwoTone
  },
  Ticket2: {
    bold: boldIcons.Ticket2Bold,
    broken: brokenIcons.Ticket2Broken,
    bulk: bulkIcons.Ticket2Bulk,
    linear: linearIcons.Ticket2Linear,
    outline: outlineIcons.Ticket2Outline,
    twotone: twotoneIcons.Ticket2TwoTone
  },
  TicketDiscount: {
    bold: boldIcons.TicketDiscountBold,
    broken: brokenIcons.TicketDiscountBroken,
    bulk: bulkIcons.TicketDiscountBulk,
    linear: linearIcons.TicketDiscountLinear,
    outline: outlineIcons.TicketDiscountOutline,
    twotone: twotoneIcons.TicketDiscountTwoTone
  },
  TicketExpired: {
    bold: boldIcons.TicketExpiredBold,
    broken: brokenIcons.TicketExpiredBroken,
    bulk: bulkIcons.TicketExpiredBulk,
    linear: linearIcons.TicketExpiredLinear,
    outline: outlineIcons.TicketExpiredOutline,
    twotone: twotoneIcons.TicketExpiredTwoTone
  },
  TicketStar: {
    bold: boldIcons.TicketStarBold,
    broken: brokenIcons.TicketStarBroken,
    bulk: bulkIcons.TicketStarBulk,
    linear: linearIcons.TicketStarLinear,
    outline: outlineIcons.TicketStarOutline,
    twotone: twotoneIcons.TicketStarTwoTone
  },
  TickSquare: {
    bold: boldIcons.TickSquareBold,
    broken: brokenIcons.TickSquareBroken,
    bulk: bulkIcons.TickSquareBulk,
    linear: linearIcons.TickSquareLinear,
    outline: outlineIcons.TickSquareOutline,
    twotone: twotoneIcons.TickSquareTwoTone
  },
  Timer: {
    bold: boldIcons.TimerBold,
    broken: brokenIcons.TimerBroken,
    bulk: bulkIcons.TimerBulk,
    linear: linearIcons.TimerLinear,
    outline: outlineIcons.TimerOutline,
    twotone: twotoneIcons.TimerTwoTone
  },
  Timer1: {
    bold: boldIcons.Timer1Bold,
    broken: brokenIcons.Timer1Broken,
    bulk: bulkIcons.Timer1Bulk,
    linear: linearIcons.Timer1Linear,
    outline: outlineIcons.Timer1Outline,
    twotone: twotoneIcons.Timer1TwoTone
  },
  TimerPause: {
    bold: boldIcons.TimerPauseBold,
    broken: brokenIcons.TimerPauseBroken,
    bulk: bulkIcons.TimerPauseBulk,
    linear: linearIcons.TimerPauseLinear,
    outline: outlineIcons.TimerPauseOutline,
    twotone: twotoneIcons.TimerPauseTwoTone
  },
  TimerStart: {
    bold: boldIcons.TimerStartBold,
    broken: brokenIcons.TimerStartBroken,
    bulk: bulkIcons.TimerStartBulk,
    linear: linearIcons.TimerStartLinear,
    outline: outlineIcons.TimerStartOutline,
    twotone: twotoneIcons.TimerStartTwoTone
  },
  ToggleOff: {
    bold: boldIcons.ToggleOffBold,
    broken: brokenIcons.ToggleOffBroken,
    bulk: bulkIcons.ToggleOffBulk,
    linear: linearIcons.ToggleOffLinear,
    outline: outlineIcons.ToggleOffOutline,
    twotone: twotoneIcons.ToggleOffTwoTone
  },
  ToggleOffCircle: {
    bold: boldIcons.ToggleOffCircleBold,
    broken: brokenIcons.ToggleOffCircleBroken,
    bulk: bulkIcons.ToggleOffCircleBulk,
    linear: linearIcons.ToggleOffCircleLinear,
    outline: outlineIcons.ToggleOffCircleOutline,
    twotone: twotoneIcons.ToggleOffCircleTwoTone
  },
  ToggleOn: {
    bold: boldIcons.ToggleOnBold,
    broken: brokenIcons.ToggleOnBroken,
    bulk: bulkIcons.ToggleOnBulk,
    linear: linearIcons.ToggleOnLinear,
    outline: outlineIcons.ToggleOnOutline,
    twotone: twotoneIcons.ToggleOnTwoTone
  },
  ToggleOnCircle: {
    bold: boldIcons.ToggleOnCircleBold,
    broken: brokenIcons.ToggleOnCircleBroken,
    bulk: bulkIcons.ToggleOnCircleBulk,
    linear: linearIcons.ToggleOnCircleLinear,
    outline: outlineIcons.ToggleOnCircleOutline,
    twotone: twotoneIcons.ToggleOnCircleTwoTone
  },
  Trade: {
    bold: boldIcons.TradeBold,
    broken: brokenIcons.TradeBroken,
    bulk: bulkIcons.TradeBulk,
    linear: linearIcons.TradeLinear,
    outline: outlineIcons.TradeOutline,
    twotone: twotoneIcons.TradeTwoTone
  },
  TransactionMinus: {
    bold: boldIcons.TransactionMinusBold,
    broken: brokenIcons.TransactionMinusBroken,
    bulk: bulkIcons.TransactionMinusBulk,
    linear: linearIcons.TransactionMinusLinear,
    outline: outlineIcons.TransactionMinusOutline,
    twotone: twotoneIcons.TransactionMinusTwoTone
  },
  Translate: {
    bold: boldIcons.TranslateBold,
    broken: brokenIcons.TranslateBroken,
    bulk: bulkIcons.TranslateBulk,
    linear: linearIcons.TranslateLinear,
    outline: outlineIcons.TranslateOutline,
    twotone: twotoneIcons.TranslateTwoTone
  },
  Trash: {
    bold: boldIcons.TrashBold,
    broken: brokenIcons.TrashBroken,
    bulk: bulkIcons.TrashBulk,
    linear: linearIcons.TrashLinear,
    outline: outlineIcons.TrashOutline,
    twotone: twotoneIcons.TrashTwoTone
  },
  Tree: {
    bold: boldIcons.TreeBold,
    broken: brokenIcons.TreeBroken,
    bulk: bulkIcons.TreeBulk,
    linear: linearIcons.TreeLinear,
    outline: outlineIcons.TreeOutline,
    twotone: twotoneIcons.TreeTwoTone
  },
  Trello: {
    bold: boldIcons.TrelloBold,
    broken: brokenIcons.TrelloBroken,
    bulk: bulkIcons.TrelloBulk,
    linear: linearIcons.TrelloLinear,
    outline: outlineIcons.TrelloOutline,
    twotone: twotoneIcons.TrelloTwoTone
  },
  TrendDown: {
    bold: boldIcons.TrendDownBold,
    broken: brokenIcons.TrendDownBroken,
    bulk: bulkIcons.TrendDownBulk,
    linear: linearIcons.TrendDownLinear,
    outline: outlineIcons.TrendDownOutline,
    twotone: twotoneIcons.TrendDownTwoTone
  },
  TrendUp: {
    bold: boldIcons.TrendUpBold,
    broken: brokenIcons.TrendUpBroken,
    bulk: bulkIcons.TrendUpBulk,
    linear: linearIcons.TrendUpLinear,
    outline: outlineIcons.TrendUpOutline,
    twotone: twotoneIcons.TrendUpTwoTone
  },
  Triangle: {
    bold: boldIcons.TriangleBold,
    broken: brokenIcons.TriangleBroken,
    bulk: bulkIcons.TriangleBulk,
    linear: linearIcons.TriangleLinear,
    outline: outlineIcons.TriangleOutline,
    twotone: twotoneIcons.TriangleTwoTone
  },
  TriangleCopy: {
    bold: boldIcons.TriangleCopyBold,
    broken: brokenIcons.TriangleCopyBroken,
    bulk: bulkIcons.TriangleCopyBulk,
    linear: linearIcons.TriangleCopyLinear,
    outline: outlineIcons.TriangleCopyOutline,
    twotone: twotoneIcons.TriangleCopyTwoTone
  },
  TrontronTrx: {
    bold: boldIcons.TrontronTrxBold,
    broken: brokenIcons.TrontronTrxBroken,
    bulk: bulkIcons.TrontronTrxBulk,
    linear: linearIcons.TrontronTrxLinear,
    outline: outlineIcons.TrontronTrxOutline,
    twotone: twotoneIcons.TrontronTrxTwoTone
  },
  Truck: {
    bold: boldIcons.TruckBold,
    broken: brokenIcons.TruckBroken,
    outline: outlineIcons.TruckOutline,
    twotone: twotoneIcons.TruckTwoTone
  },
  TruckFast: {
    bold: boldIcons.TruckFastBold,
    broken: brokenIcons.TruckFastBroken,
    outline: outlineIcons.TruckFastOutline,
    twotone: twotoneIcons.TruckFastTwoTone
  },
  TruckRemove: {
    bold: boldIcons.TruckRemoveBold,
    bulk: bulkIcons.TruckRemoveBulk,
    linear: linearIcons.TruckRemoveLinear,
    outline: outlineIcons.TruckRemoveOutline
  },
  TruckTick: {
    bold: boldIcons.TruckTickBold,
    broken: brokenIcons.TruckTickBroken,
    bulk: bulkIcons.TruckTickBulk,
    linear: linearIcons.TruckTickLinear,
    outline: outlineIcons.TruckTickOutline,
    twotone: twotoneIcons.TruckTickTwoTone
  },
  TruckTime: {
    bold: boldIcons.TruckTimeBold,
    bulk: bulkIcons.TruckTimeBulk,
    linear: linearIcons.TruckTimeLinear,
    outline: outlineIcons.TruckTimeOutline
  },
  TrushSquare: {
    bold: boldIcons.TrushSquareBold,
    broken: brokenIcons.TrushSquareBroken,
    bulk: bulkIcons.TrushSquareBulk,
    linear: linearIcons.TrushSquareLinear,
    outline: outlineIcons.TrushSquareOutline,
    twotone: twotoneIcons.TrushSquareTwoTone
  },
  Twitch: {
    bold: boldIcons.TwitchBold,
    broken: brokenIcons.TwitchBroken,
    bulk: bulkIcons.TwitchBulk,
    linear: linearIcons.TwitchLinear,
    outline: outlineIcons.TwitchOutline,
    twotone: twotoneIcons.TwitchTwoTone
  },
  Ui8: {
    bold: boldIcons.Ui8Bold,
    broken: brokenIcons.Ui8Broken,
    bulk: bulkIcons.Ui8Bulk,
    linear: linearIcons.Ui8Linear,
    outline: outlineIcons.Ui8Outline,
    twotone: twotoneIcons.Ui8TwoTone
  },
  Undo: {
    bold: boldIcons.UndoBold,
    broken: brokenIcons.UndoBroken,
    bulk: bulkIcons.UndoBulk,
    linear: linearIcons.UndoLinear,
    outline: outlineIcons.UndoOutline,
    twotone: twotoneIcons.UndoTwoTone
  },
  Unlimited: {
    bold: boldIcons.UnlimitedBold,
    broken: brokenIcons.UnlimitedBroken,
    bulk: bulkIcons.UnlimitedBulk,
    linear: linearIcons.UnlimitedLinear,
    outline: outlineIcons.UnlimitedOutline,
    twotone: twotoneIcons.UnlimitedTwoTone
  },
  Unlock: {
    bold: boldIcons.UnlockBold,
    broken: brokenIcons.UnlockBroken,
    bulk: bulkIcons.UnlockBulk,
    linear: linearIcons.UnlockLinear,
    outline: outlineIcons.UnlockOutline,
    twotone: twotoneIcons.UnlockTwoTone
  },
  UsdCoinUsdc: {
    bold: boldIcons.UsdCoinUsdcBold,
    broken: brokenIcons.UsdCoinUsdcBroken,
    bulk: bulkIcons.UsdCoinUsdcBulk,
    linear: linearIcons.UsdCoinUsdcLinear,
    outline: outlineIcons.UsdCoinUsdcOutline,
    twotone: twotoneIcons.UsdCoinUsdcTwoTone
  },
  User: {
    bold: boldIcons.UserBold,
    broken: brokenIcons.UserBroken,
    bulk: bulkIcons.UserBulk,
    linear: linearIcons.UserLinear,
    outline: outlineIcons.UserOutline,
    twotone: twotoneIcons.UserTwoTone
  },
  UserAdd: {
    bold: boldIcons.UserAddBold,
    broken: brokenIcons.UserAddBroken,
    bulk: bulkIcons.UserAddBulk,
    linear: linearIcons.UserAddLinear,
    outline: outlineIcons.UserAddOutline,
    twotone: twotoneIcons.UserAddTwoTone
  },
  UserCirlceAdd: {
    bold: boldIcons.UserCirlceAddBold,
    broken: brokenIcons.UserCirlceAddBroken,
    bulk: bulkIcons.UserCirlceAddBulk,
    linear: linearIcons.UserCirlceAddLinear,
    outline: outlineIcons.UserCirlceAddOutline,
    twotone: twotoneIcons.UserCirlceAddTwoTone
  },
  UserEdit: {
    bold: boldIcons.UserEditBold,
    broken: brokenIcons.UserEditBroken,
    bulk: bulkIcons.UserEditBulk,
    linear: linearIcons.UserEditLinear,
    outline: outlineIcons.UserEditOutline,
    twotone: twotoneIcons.UserEditTwoTone
  },
  UserMinus: {
    bold: boldIcons.UserMinusBold,
    broken: brokenIcons.UserMinusBroken,
    bulk: bulkIcons.UserMinusBulk,
    linear: linearIcons.UserMinusLinear,
    outline: outlineIcons.UserMinusOutline,
    twotone: twotoneIcons.UserMinusTwoTone
  },
  UserOctagon: {
    bold: boldIcons.UserOctagonBold,
    broken: brokenIcons.UserOctagonBroken,
    bulk: bulkIcons.UserOctagonBulk,
    linear: linearIcons.UserOctagonLinear,
    outline: outlineIcons.UserOctagonOutline,
    twotone: twotoneIcons.UserOctagonTwoTone
  },
  UserRemove: {
    bold: boldIcons.UserRemoveBold,
    broken: brokenIcons.UserRemoveBroken,
    bulk: bulkIcons.UserRemoveBulk,
    linear: linearIcons.UserRemoveLinear,
    outline: outlineIcons.UserRemoveOutline,
    twotone: twotoneIcons.UserRemoveTwoTone
  },
  UserSearch: {
    bold: boldIcons.UserSearchBold,
    broken: brokenIcons.UserSearchBroken,
    bulk: bulkIcons.UserSearchBulk,
    linear: linearIcons.UserSearchLinear,
    outline: outlineIcons.UserSearchOutline,
    twotone: twotoneIcons.UserSearchTwoTone
  },
  UserSquare: {
    bold: boldIcons.UserSquareBold,
    broken: brokenIcons.UserSquareBroken,
    bulk: bulkIcons.UserSquareBulk,
    linear: linearIcons.UserSquareLinear,
    outline: outlineIcons.UserSquareOutline,
    twotone: twotoneIcons.UserSquareTwoTone
  },
  UserTag: {
    bold: boldIcons.UserTagBold,
    broken: brokenIcons.UserTagBroken,
    bulk: bulkIcons.UserTagBulk,
    linear: linearIcons.UserTagLinear,
    outline: outlineIcons.UserTagOutline,
    twotone: twotoneIcons.UserTagTwoTone
  },
  UserTick: {
    bold: boldIcons.UserTickBold,
    broken: brokenIcons.UserTickBroken,
    bulk: bulkIcons.UserTickBulk,
    linear: linearIcons.UserTickLinear,
    outline: outlineIcons.UserTickOutline,
    twotone: twotoneIcons.UserTickTwoTone
  },
  VelasVlx: {
    bold: boldIcons.VelasVlxBold,
    broken: brokenIcons.VelasVlxBroken,
    bulk: bulkIcons.VelasVlxBulk,
    linear: linearIcons.VelasVlxLinear,
    outline: outlineIcons.VelasVlxOutline,
    twotone: twotoneIcons.VelasVlxTwoTone
  },
  Verify: {
    bold: boldIcons.VerifyBold,
    broken: brokenIcons.VerifyBroken,
    bulk: bulkIcons.VerifyBulk,
    linear: linearIcons.VerifyLinear,
    outline: outlineIcons.VerifyOutline,
    twotone: twotoneIcons.VerifyTwoTone
  },
  VibeVibe: {
    bold: boldIcons.VibeVibeBold,
    broken: brokenIcons.VibeVibeBroken,
    bulk: bulkIcons.VibeVibeBulk,
    linear: linearIcons.VibeVibeLinear,
    outline: outlineIcons.VibeVibeOutline,
    twotone: twotoneIcons.VibeVibeTwoTone
  },
  Video: {
    bold: boldIcons.VideoBold,
    broken: brokenIcons.VideoBroken,
    bulk: bulkIcons.VideoBulk,
    linear: linearIcons.VideoLinear,
    outline: outlineIcons.VideoOutline,
    twotone: twotoneIcons.VideoTwoTone
  },
  VideoAdd: {
    bold: boldIcons.VideoAddBold,
    broken: brokenIcons.VideoAddBroken,
    bulk: bulkIcons.VideoAddBulk,
    linear: linearIcons.VideoAddLinear,
    outline: outlineIcons.VideoAddOutline,
    twotone: twotoneIcons.VideoAddTwoTone
  },
  VideoCircle: {
    bold: boldIcons.VideoCircleBold,
    broken: brokenIcons.VideoCircleBroken,
    bulk: bulkIcons.VideoCircleBulk,
    linear: linearIcons.VideoCircleLinear,
    outline: outlineIcons.VideoCircleOutline,
    twotone: twotoneIcons.VideoCircleTwoTone
  },
  VideoHorizontal: {
    bold: boldIcons.VideoHorizontalBold,
    broken: brokenIcons.VideoHorizontalBroken,
    bulk: bulkIcons.VideoHorizontalBulk,
    linear: linearIcons.VideoHorizontalLinear,
    outline: outlineIcons.VideoHorizontalOutline,
    twotone: twotoneIcons.VideoHorizontalTwoTone
  },
  VideoOctagon: {
    bold: boldIcons.VideoOctagonBold,
    broken: brokenIcons.VideoOctagonBroken,
    bulk: bulkIcons.VideoOctagonBulk,
    linear: linearIcons.VideoOctagonLinear,
    outline: outlineIcons.VideoOctagonOutline,
    twotone: twotoneIcons.VideoOctagonTwoTone
  },
  VideoPlay: {
    bold: boldIcons.VideoPlayBold,
    broken: brokenIcons.VideoPlayBroken,
    bulk: bulkIcons.VideoPlayBulk,
    linear: linearIcons.VideoPlayLinear,
    outline: outlineIcons.VideoPlayOutline,
    twotone: twotoneIcons.VideoPlayTwoTone
  },
  VideoRemove: {
    bold: boldIcons.VideoRemoveBold,
    broken: brokenIcons.VideoRemoveBroken,
    bulk: bulkIcons.VideoRemoveBulk,
    linear: linearIcons.VideoRemoveLinear,
    outline: outlineIcons.VideoRemoveOutline,
    twotone: twotoneIcons.VideoRemoveTwoTone
  },
  VideoSlash: {
    bold: boldIcons.VideoSlashBold,
    broken: brokenIcons.VideoSlashBroken,
    bulk: bulkIcons.VideoSlashBulk,
    linear: linearIcons.VideoSlashLinear,
    outline: outlineIcons.VideoSlashOutline,
    twotone: twotoneIcons.VideoSlashTwoTone
  },
  VideoSquare: {
    bold: boldIcons.VideoSquareBold,
    broken: brokenIcons.VideoSquareBroken,
    bulk: bulkIcons.VideoSquareBulk,
    linear: linearIcons.VideoSquareLinear,
    outline: outlineIcons.VideoSquareOutline,
    twotone: twotoneIcons.VideoSquareTwoTone
  },
  VideoTick: {
    bold: boldIcons.VideoTickBold,
    broken: brokenIcons.VideoTickBroken,
    bulk: bulkIcons.VideoTickBulk,
    linear: linearIcons.VideoTickLinear,
    outline: outlineIcons.VideoTickOutline,
    twotone: twotoneIcons.VideoTickTwoTone
  },
  VideoTime: {
    bold: boldIcons.VideoTimeBold,
    broken: brokenIcons.VideoTimeBroken,
    bulk: bulkIcons.VideoTimeBulk,
    linear: linearIcons.VideoTimeLinear,
    outline: outlineIcons.VideoTimeOutline,
    twotone: twotoneIcons.VideoTimeTwoTone
  },
  VideoVertical: {
    bold: boldIcons.VideoVerticalBold,
    broken: brokenIcons.VideoVerticalBroken,
    bulk: bulkIcons.VideoVerticalBulk,
    linear: linearIcons.VideoVerticalLinear,
    outline: outlineIcons.VideoVerticalOutline,
    twotone: twotoneIcons.VideoVerticalTwoTone
  },
  VoiceCricle: {
    bold: boldIcons.VoiceCricleBold,
    broken: brokenIcons.VoiceCricleBroken,
    bulk: bulkIcons.VoiceCricleBulk,
    linear: linearIcons.VoiceCricleLinear,
    outline: outlineIcons.VoiceCricleOutline,
    twotone: twotoneIcons.VoiceCricleTwoTone
  },
  VoiceSquare: {
    bold: boldIcons.VoiceSquareBold,
    broken: brokenIcons.VoiceSquareBroken,
    bulk: bulkIcons.VoiceSquareBulk,
    linear: linearIcons.VoiceSquareLinear,
    outline: outlineIcons.VoiceSquareOutline,
    twotone: twotoneIcons.VoiceSquareTwoTone
  },
  Volume: {
    twotone: twotoneIcons.VolumeTwoTone
  },
  VolumeCross: {
    bold: boldIcons.VolumeCrossBold,
    broken: brokenIcons.VolumeCrossBroken,
    bulk: bulkIcons.VolumeCrossBulk,
    linear: linearIcons.VolumeCrossLinear,
    outline: outlineIcons.VolumeCrossOutline,
    twotone: twotoneIcons.VolumeCrossTwoTone
  },
  VolumeHigh: {
    bold: boldIcons.VolumeHighBold,
    broken: brokenIcons.VolumeHighBroken,
    bulk: bulkIcons.VolumeHighBulk,
    linear: linearIcons.VolumeHighLinear,
    outline: outlineIcons.VolumeHighOutline,
    twotone: twotoneIcons.VolumeHighTwoTone
  },
  VolumeLow: {
    bold: boldIcons.VolumeLowBold,
    broken: brokenIcons.VolumeLowBroken,
    bulk: bulkIcons.VolumeLowBulk,
    linear: linearIcons.VolumeLowLinear,
    outline: outlineIcons.VolumeLowOutline,
    twotone: twotoneIcons.VolumeLowTwoTone
  },
  VolumeLow1: {
    bold: boldIcons.VolumeLow1Bold,
    broken: brokenIcons.VolumeLow1Broken,
    bulk: bulkIcons.VolumeLow1Bulk,
    linear: linearIcons.VolumeLow1Linear,
    outline: outlineIcons.VolumeLow1Outline,
    twotone: twotoneIcons.VolumeLow1TwoTone
  },
  VolumeMute: {
    bold: boldIcons.VolumeMuteBold,
    broken: brokenIcons.VolumeMuteBroken,
    bulk: bulkIcons.VolumeMuteBulk,
    linear: linearIcons.VolumeMuteLinear,
    outline: outlineIcons.VolumeMuteOutline,
    twotone: twotoneIcons.VolumeMuteTwoTone
  },
  VolumeSlash: {
    bold: boldIcons.VolumeSlashBold,
    broken: brokenIcons.VolumeSlashBroken,
    bulk: bulkIcons.VolumeSlashBulk,
    linear: linearIcons.VolumeSlashLinear,
    outline: outlineIcons.VolumeSlashOutline,
    twotone: twotoneIcons.VolumeSlashTwoTone
  },
  VolumeUp: {
    bold: boldIcons.VolumeUpBold,
    broken: brokenIcons.VolumeUpBroken,
    bulk: bulkIcons.VolumeUpBulk,
    linear: linearIcons.VolumeUpLinear,
    outline: outlineIcons.VolumeUpOutline,
    twotone: twotoneIcons.VolumeUpTwoTone
  },
  Vuesax: {
    bold: boldIcons.VuesaxBold,
    broken: brokenIcons.VuesaxBroken,
    bulk: bulkIcons.VuesaxBulk,
    linear: linearIcons.VuesaxLinear,
    twotone: twotoneIcons.VuesaxTwoTone
  },
  Wallet: {
    bold: boldIcons.WalletBold,
    broken: brokenIcons.WalletBroken,
    bulk: bulkIcons.WalletBulk,
    linear: linearIcons.WalletLinear,
    outline: outlineIcons.WalletOutline,
    twotone: twotoneIcons.WalletTwoTone
  },
  Wallet1: {
    bold: boldIcons.Wallet1Bold,
    broken: brokenIcons.Wallet1Broken,
    bulk: bulkIcons.Wallet1Bulk,
    linear: linearIcons.Wallet1Linear,
    outline: outlineIcons.Wallet1Outline,
    twotone: twotoneIcons.Wallet1TwoTone
  },
  Wallet2: {
    bold: boldIcons.Wallet2Bold,
    broken: brokenIcons.Wallet2Broken,
    bulk: bulkIcons.Wallet2Bulk,
    linear: linearIcons.Wallet2Linear,
    outline: outlineIcons.Wallet2Outline,
    twotone: twotoneIcons.Wallet2TwoTone
  },
  Wallet3: {
    bold: boldIcons.Wallet3Bold,
    broken: brokenIcons.Wallet3Broken,
    bulk: bulkIcons.Wallet3Bulk,
    linear: linearIcons.Wallet3Linear,
    outline: outlineIcons.Wallet3Outline,
    twotone: twotoneIcons.Wallet3TwoTone
  },
  WalletAdd: {
    bold: boldIcons.WalletAddBold,
    broken: brokenIcons.WalletAddBroken,
    bulk: bulkIcons.WalletAddBulk,
    linear: linearIcons.WalletAddLinear,
    outline: outlineIcons.WalletAddOutline,
    twotone: twotoneIcons.WalletAddTwoTone
  },
  WalletAdd1: {
    bold: boldIcons.WalletAdd1Bold,
    broken: brokenIcons.WalletAdd1Broken,
    bulk: bulkIcons.WalletAdd1Bulk,
    linear: linearIcons.WalletAdd1Linear,
    outline: outlineIcons.WalletAdd1Outline,
    twotone: twotoneIcons.WalletAdd1TwoTone
  },
  WalletCheck: {
    bold: boldIcons.WalletCheckBold,
    broken: brokenIcons.WalletCheckBroken,
    bulk: bulkIcons.WalletCheckBulk,
    linear: linearIcons.WalletCheckLinear,
    outline: outlineIcons.WalletCheckOutline,
    twotone: twotoneIcons.WalletCheckTwoTone
  },
  WalletMinus: {
    bold: boldIcons.WalletMinusBold,
    broken: brokenIcons.WalletMinusBroken,
    bulk: bulkIcons.WalletMinusBulk,
    linear: linearIcons.WalletMinusLinear,
    outline: outlineIcons.WalletMinusOutline,
    twotone: twotoneIcons.WalletMinusTwoTone
  },
  WalletMoney: {
    bold: boldIcons.WalletMoneyBold,
    broken: brokenIcons.WalletMoneyBroken,
    bulk: bulkIcons.WalletMoneyBulk,
    linear: linearIcons.WalletMoneyLinear,
    outline: outlineIcons.WalletMoneyOutline,
    twotone: twotoneIcons.WalletMoneyTwoTone
  },
  WalletRemove: {
    bold: boldIcons.WalletRemoveBold,
    broken: brokenIcons.WalletRemoveBroken,
    bulk: bulkIcons.WalletRemoveBulk,
    linear: linearIcons.WalletRemoveLinear,
    outline: outlineIcons.WalletRemoveOutline,
    twotone: twotoneIcons.WalletRemoveTwoTone
  },
  WalletSearch: {
    bold: boldIcons.WalletSearchBold,
    broken: brokenIcons.WalletSearchBroken,
    bulk: bulkIcons.WalletSearchBulk,
    linear: linearIcons.WalletSearchLinear,
    outline: outlineIcons.WalletSearchOutline,
    twotone: twotoneIcons.WalletSearchTwoTone
  },
  WanchainWan: {
    bold: boldIcons.WanchainWanBold,
    broken: brokenIcons.WanchainWanBroken,
    bulk: bulkIcons.WanchainWanBulk,
    linear: linearIcons.WanchainWanLinear,
    outline: outlineIcons.WanchainWanOutline,
    twotone: twotoneIcons.WanchainWanTwoTone
  },
  WanchainWan1: {
    bold: boldIcons.WanchainWan1Bold,
    broken: brokenIcons.WanchainWan1Broken,
    bulk: bulkIcons.WanchainWan1Bulk,
    linear: linearIcons.WanchainWan1Linear,
    outline: outlineIcons.WanchainWan1Outline,
    twotone: twotoneIcons.WanchainWan1TwoTone
  },
  Warning2: {
    bold: boldIcons.Warning2Bold,
    broken: brokenIcons.Warning2Broken,
    bulk: bulkIcons.Warning2Bulk,
    linear: linearIcons.Warning2Linear,
    outline: outlineIcons.Warning2Outline,
    twotone: twotoneIcons.Warning2TwoTone
  },
  Watch: {
    bold: boldIcons.WatchBold,
    broken: brokenIcons.WatchBroken,
    bulk: bulkIcons.WatchBulk,
    linear: linearIcons.WatchLinear,
    outline: outlineIcons.WatchOutline,
    twotone: twotoneIcons.WatchTwoTone
  },
  WatchStatus: {
    bold: boldIcons.WatchStatusBold,
    broken: brokenIcons.WatchStatusBroken,
    bulk: bulkIcons.WatchStatusBulk,
    linear: linearIcons.WatchStatusLinear,
    outline: outlineIcons.WatchStatusOutline,
    twotone: twotoneIcons.WatchStatusTwoTone
  },
  Weight: {
    bold: boldIcons.WeightBold,
    broken: brokenIcons.WeightBroken,
    bulk: bulkIcons.WeightBulk,
    linear: linearIcons.WeightLinear,
    outline: outlineIcons.WeightOutline,
    twotone: twotoneIcons.WeightTwoTone
  },
  Weight1: {
    bold: boldIcons.Weight1Bold
  },
  WeightCopy: {
    broken: brokenIcons.WeightCopyBroken,
    bulk: bulkIcons.WeightCopyBulk,
    linear: linearIcons.WeightCopyLinear,
    outline: outlineIcons.WeightCopyOutline,
    twotone: twotoneIcons.WeightCopyTwoTone
  },
  Whatsapp: {
    bold: boldIcons.WhatsappBold,
    broken: brokenIcons.WhatsappBroken,
    bulk: bulkIcons.WhatsappBulk,
    linear: linearIcons.WhatsappLinear,
    outline: outlineIcons.WhatsappOutline,
    twotone: twotoneIcons.WhatsappTwoTone
  },
  Wifi: {
    bold: boldIcons.WifiBold,
    broken: brokenIcons.WifiBroken,
    bulk: bulkIcons.WifiBulk,
    linear: linearIcons.WifiLinear,
    outline: outlineIcons.WifiOutline,
    twotone: twotoneIcons.WifiTwoTone
  },
  WifiSquare: {
    bold: boldIcons.WifiSquareBold,
    broken: brokenIcons.WifiSquareBroken,
    bulk: bulkIcons.WifiSquareBulk,
    linear: linearIcons.WifiSquareLinear,
    outline: outlineIcons.WifiSquareOutline,
    twotone: twotoneIcons.WifiSquareTwoTone
  },
  Wind: {
    bold: boldIcons.WindBold,
    broken: brokenIcons.WindBroken,
    bulk: bulkIcons.WindBulk,
    linear: linearIcons.WindLinear,
    outline: outlineIcons.WindOutline,
    twotone: twotoneIcons.WindTwoTone
  },
  Wind2: {
    bold: boldIcons.Wind2Bold,
    broken: brokenIcons.Wind2Broken,
    bulk: bulkIcons.Wind2Bulk,
    linear: linearIcons.Wind2Linear,
    outline: outlineIcons.Wind2Outline,
    twotone: twotoneIcons.Wind2TwoTone
  },
  Windows: {
    bold: boldIcons.WindowsBold,
    broken: brokenIcons.WindowsBroken,
    bulk: bulkIcons.WindowsBulk,
    linear: linearIcons.WindowsLinear,
    outline: outlineIcons.WindowsOutline,
    twotone: twotoneIcons.WindowsTwoTone
  },
  WingWing: {
    bold: boldIcons.WingWingBold,
    broken: brokenIcons.WingWingBroken,
    bulk: bulkIcons.WingWingBulk,
    linear: linearIcons.WingWingLinear,
    outline: outlineIcons.WingWingOutline,
    twotone: twotoneIcons.WingWingTwoTone
  },
  Woman: {
    bold: boldIcons.WomanBold,
    broken: brokenIcons.WomanBroken,
    bulk: bulkIcons.WomanBulk,
    linear: linearIcons.WomanLinear,
    outline: outlineIcons.WomanOutline,
    twotone: twotoneIcons.WomanTwoTone
  },
  Xd: {
    bold: boldIcons.XdBold,
    broken: brokenIcons.XdBroken,
    bulk: bulkIcons.XdBulk,
    linear: linearIcons.XdLinear,
    outline: outlineIcons.XdOutline,
    twotone: twotoneIcons.XdTwoTone
  },
  Xiaomi: {
    bold: boldIcons.XiaomiBold,
    broken: brokenIcons.XiaomiBroken,
    bulk: bulkIcons.XiaomiBulk,
    linear: linearIcons.XiaomiLinear,
    outline: outlineIcons.XiaomiOutline,
    twotone: twotoneIcons.XiaomiTwoTone
  },
  XrpXrp: {
    bold: boldIcons.XrpXrpBold,
    broken: brokenIcons.XrpXrpBroken,
    bulk: bulkIcons.XrpXrpBulk,
    linear: linearIcons.XrpXrpLinear,
    outline: outlineIcons.XrpXrpOutline,
    twotone: twotoneIcons.XrpXrpTwoTone
  },
  Youtube: {
    bold: boldIcons.YoutubeBold,
    broken: brokenIcons.YoutubeBroken,
    bulk: bulkIcons.YoutubeBulk,
    linear: linearIcons.YoutubeLinear,
    outline: outlineIcons.YoutubeOutline,
    twotone: twotoneIcons.YoutubeTwoTone
  },
  ZelZel: {
    bold: boldIcons.ZelZelBold,
    broken: brokenIcons.ZelZelBroken,
    bulk: bulkIcons.ZelZelBulk,
    linear: linearIcons.ZelZelLinear,
    outline: outlineIcons.ZelZelOutline,
    twotone: twotoneIcons.ZelZelTwoTone
  },
  Zoom: {
    bold: boldIcons.ZoomBold,
    broken: brokenIcons.ZoomBroken,
    bulk: bulkIcons.ZoomBulk,
    linear: linearIcons.ZoomLinear,
    outline: outlineIcons.ZoomOutline,
    twotone: twotoneIcons.ZoomTwoTone
  }
}

export { iconNames, iconRegistry }

export type { IconName }

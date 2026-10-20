const COPY = {
  ar: {
    nav: "بريد مؤقت",
    title: "بريد إلكتروني مؤقت مجاني",
    description: "أنشئ عنوان بريد مؤقتاً ينتهي بـ @mail.hmdevelop.me، واستقبل الرسائل الواردة في صندوق خاص لمدة تصل إلى ساعة. لا تستخدمه للبيانات الحساسة.",
    intro: "أنشئ عنواناً عشوائياً لاستقبال رسالة لمرة واحدة، من دون تسجيل حساب. هذا صندوق بريد على خادم مؤقت، وليس أداة معالجة محلية؛ لا تستخدمه للخدمات المصرفية أو كلمات المرور أو الحسابات المهمة.",
    create: "إنشاء عنوان مؤقت",
    addressLabel: "عنوانك المؤقت",
    addressPlaceholder: "سيظهر عنوانك هنا بعد الإنشاء",
    copy: "نسخ العنوان",
    copied: "نُسخ العنوان",
    refresh: "تحديث الرسائل",
    delete: "حذف العنوان والرسائل",
    newAddress: "إنشاء عنوان جديد",
    statusIdle: "أنشئ عنواناً لبدء استقبال البريد.",
    statusCreating: "جارٍ إنشاء العنوان…",
    statusLoading: "جارٍ تحميل صندوق البريد…",
    statusRefreshing: "جارٍ التحقق من الرسائل…",
    statusReady: "الصندوق جاهز. يُحدّث تلقائياً كل 15 ثانية.",
    statusDeleted: "حُذف العنوان ورسائله من صندوق DouNest.",
    statusExpired: "انتهت صلاحية هذا العنوان. أنشئ عنواناً جديداً للمتابعة.",
    statusLimit: "بلغت حد الإنشاء: 8 عناوين خلال ساعة واحدة من عنوان الشبكة نفسه. حاول لاحقاً.",
    statusUnavailable: "الخدمة غير جاهزة مؤقتاً. حاول مرة أخرى لاحقاً.",
    statusNetwork: "تعذر الاتصال بالخدمة. تحقق من اتصالك ثم أعد المحاولة.",
    statusError: "تعذر إكمال الطلب. أعد المحاولة.",
    statusDeleteError: "تعذر حذف الصندوق الآن. حاول الحذف مجدداً.",
    expiresIn: "تنتهي صلاحية العنوان خلال {time}.",
    expired: "انتهت الصلاحية",
    inboxTitle: "الرسائل الواردة",
    noMessages: "لا توجد رسائل بعد. أبقِ هذه الصفحة مفتوحة أو اضغط تحديث.",
    sender: "من",
    received: "وقت الاستلام",
    attachments: "مرفقات (لا تُنزّلها الخدمة)",
    noPlainText: "لا يتضمن البريد نصاً عادياً قابلاً للعرض. لا نعرض HTML حفاظاً على السلامة.",
    warningTitle: "مهم للخصوصية والأمان",
    warning: "تُمرّر الرسائل الواردة عبر Resend وتُخزَّن نسخة مؤقتة في قاعدة بيانات DouNest الأوروبية لمدة تصل إلى ساعة، ثم تنظفها الخدمة دورياً. قد يحتفظ مزود البريد ببيانات وفق سياسته المنفصلة. لا تستخدم هذه الخدمة للرسائل الحساسة أو استعادة الحسابات أو البيانات المالية. لا تُرسل رسائل صادرة، ولا تعرض المرفقات للتنزيل.",
    sessionNote: "يُحفظ رمز الوصول في مساحة الجلسة لهذا التبويب ليبقى الصندوق متاحاً بعد إعادة التحميل. حذف الصندوق يزيل نسخة DouNest مبكراً؛ إغلاق التبويب يزيل الرمز المحلي فقط، وتظل النسخة الخادمية حتى الحذف أو انتهاء صلاحيتها بعد نحو ساعة.",
    guideTitle: "كيفية استخدام البريد المؤقت",
    steps: ["أنشئ عنواناً عشوائياً ينتهي بـ @mail.hmdevelop.me.", "أدخل العنوان في الخدمة التي تريد استقبال رسالة منها؛ البريد الوارد فقط مدعوم.", "تظهر الرسائل تلقائياً أو بعد الضغط على تحديث. نعرض النص العادي فقط ولا نشغّل محتوى HTML.", "تنتهي صلاحية العنوان والرسائل بعد ساعة تقريباً، ويمكنك حذفها مبكراً."],
    faqTitle: "أسئلة شائعة عن البريد المؤقت",
    faqs: [
      ["كم يبقى العنوان وصندوق البريد؟", "تنتهي صلاحية الصندوق والرسائل بعد 60 دقيقة تقريباً. تُحذف السجلات المنتهية عبر مهمة تنظيف دورية، ويمكنك حذف الصندوق مبكراً من الواجهة."],
      ["هل هذا البريد خاص وآمن للحسابات المهمة؟", "لا. لا تستخدمه للحسابات المصرفية أو الطبية أو استعادة كلمات المرور أو أي معلومات حساسة. العنوان مخصص للاستقبال المؤقت، وقد تعالج Resend وCloudflare البيانات وفق سياساتهما المنفصلة."],
      ["هل يمكنني إرسال بريد أو تنزيل المرفقات؟", "لا؛ الخدمة للاستقبال فقط. تعرض عدد المرفقات إن توفر، لكنها لا تنزّل محتواها، كما تعرض نص الرسالة العادي دون تشغيل HTML."],
      ["هل الخدمة مجانية؟ وهل يوجد حد للإنشاء؟", "واجهة DouNest مجانية حالياً، مع حد تقني يصل إلى 8 عناوين جديدة لكل عنوان شبكة خلال ساعة. قد تتغير الإتاحة بحسب حدود مزودي البنية التحتية."],
      ["لماذا لم تصل رسالتي؟", "قد يتأخر التسليم أو يرفضه المرسل أو مزود البريد، وقد تُصفّى الرسائل غير المتوافقة أو تنتهي صلاحية العنوان. الخدمة لا تضمن التسليم؛ جرّب تحديث الصندوق وتحقق من العنوان." ]
    ]
  },
  en: {
    nav: "Temporary Email",
    title: "Free Temporary Email",
    description: "Create a temporary @mail.hmdevelop.me address and receive incoming messages in a private inbox for up to one hour. Do not use it for sensitive data.",
    intro: "Create a random address for a one-off message without signing up. This is a server-hosted temporary mailbox, not a local-processing tool; do not use it for banking, passwords, or important accounts.",
    create: "Create temporary address",
    addressLabel: "Your temporary address",
    addressPlaceholder: "Your address will appear here",
    copy: "Copy address",
    copied: "Address copied",
    refresh: "Refresh inbox",
    delete: "Delete address and messages",
    newAddress: "Create another address",
    statusIdle: "Create an address to start receiving email.",
    statusCreating: "Creating your address…",
    statusLoading: "Loading your inbox…",
    statusRefreshing: "Checking for messages…",
    statusReady: "Inbox ready. It refreshes automatically every 15 seconds.",
    statusDeleted: "The address and its messages were deleted from DouNest's inbox store.",
    statusExpired: "This address has expired. Create a new one to continue.",
    statusLimit: "Creation limit reached: 8 addresses per hour from the same network address. Try again later.",
    statusUnavailable: "The service is temporarily unavailable. Please try again later.",
    statusNetwork: "Could not connect to the service. Check your connection and try again.",
    statusError: "The request could not be completed. Please try again.",
    statusDeleteError: "The inbox could not be deleted right now. Please retry.",
    expiresIn: "Address expires in {time}.",
    expired: "Expired",
    inboxTitle: "Incoming messages",
    noMessages: "No messages yet. Keep this page open or refresh the inbox.",
    sender: "From",
    received: "Received",
    attachments: "attachments (not downloaded)",
    noPlainText: "This email has no plain-text body to show. HTML is not rendered for safety.",
    warningTitle: "Privacy and safety notice",
    warning: "Incoming messages pass through Resend and a temporary copy is stored in DouNest's EU database for up to one hour, then removed by periodic cleanup. The email provider may retain data under its separate policy. Do not use this service for sensitive messages, account recovery, or financial information. Outbound email is disabled, and attachments are not available for download.",
    sessionNote: "The access token is stored in this tab's session storage so the inbox survives reloads. Deleting the inbox removes DouNest's copy early; closing the tab removes only the local token, while the server copy remains until deletion or expiry after about one hour.",
    guideTitle: "How to use a temporary email address",
    steps: ["Create a random address ending in @mail.hmdevelop.me.", "Enter it at the service where you expect a one-off message; incoming email only is supported.", "Messages appear automatically or after you choose Refresh. Only plain text is shown; HTML is not executed or rendered.", "The address and messages expire after about one hour. You can delete them earlier."],
    faqTitle: "Temporary email FAQs",
    faqs: [
      ["How long does the address and inbox last?", "The inbox and its messages expire after about 60 minutes. A periodic cleanup job removes expired records, and you can delete the inbox earlier from the interface."],
      ["Is this mailbox private and safe for important accounts?", "No. Do not use it for banking, medical accounts, password recovery, or sensitive information. It is for temporary receiving only; Resend and Cloudflare may process data under their separate policies."],
      ["Can I send email or download attachments?", "No. The service only receives messages. It may show the number of attachments, but does not download their contents; message HTML is not rendered."],
      ["Is it free, and is there a creation limit?", "The DouNest interface is currently free, with a technical limit of up to 8 new addresses per network address per hour. Availability may also depend on infrastructure-provider limits."],
      ["Why has my message not arrived?", "Delivery may be delayed or rejected by a sender or email provider; messages may also be filtered or the address may have expired. Delivery is not guaranteed. Refresh the inbox and check the address." ]
    ]
  },
  fr: {
    nav: "E-mail temporaire", title: "E-mail temporaire gratuit",
    description: "Créez une adresse temporaire @mail.hmdevelop.me et recevez des messages pendant une heure maximum. N’y envoyez aucune donnée sensible.",
    intro: "Créez une adresse aléatoire pour recevoir un message ponctuel, sans compte. Cette boîte temporaire est hébergée sur un serveur, pas traitée localement : ne l’utilisez pas pour les banques, mots de passe ou comptes importants.",
    create: "Créer une adresse temporaire", addressLabel: "Votre adresse temporaire", addressPlaceholder: "Votre adresse apparaîtra ici", copy: "Copier l’adresse", copied: "Adresse copiée", refresh: "Actualiser la boîte", delete: "Supprimer l’adresse et les messages", newAddress: "Créer une autre adresse",
    statusIdle: "Créez une adresse pour recevoir des e-mails.", statusCreating: "Création de l’adresse…", statusLoading: "Chargement de la boîte…", statusRefreshing: "Recherche de messages…", statusReady: "Boîte prête. Actualisation automatique toutes les 15 secondes.", statusDeleted: "L’adresse et ses messages ont été supprimés du stockage DouNest.", statusExpired: "Cette adresse a expiré. Créez-en une nouvelle.", statusLimit: "Limite atteinte : 8 adresses par heure depuis la même adresse réseau.", statusUnavailable: "Service temporairement indisponible. Réessayez plus tard.", statusNetwork: "Connexion impossible. Vérifiez votre réseau puis réessayez.", statusError: "La demande a échoué. Réessayez.", statusDeleteError: "Impossible de supprimer la boîte pour le moment.", expiresIn: "Expiration dans {time}.", expired: "Expirée", inboxTitle: "Messages reçus", noMessages: "Aucun message. Laissez cette page ouverte ou actualisez.", sender: "De", received: "Reçu", attachments: "pièces jointes (non téléchargées)", noPlainText: "Aucun texte brut à afficher. Le HTML n’est pas rendu pour des raisons de sécurité.",
    warningTitle: "Confidentialité et sécurité", warning: "Les messages passent par Resend et une copie temporaire est stockée dans la base de données européenne de DouNest pendant une heure maximum, puis supprimée par nettoyage périodique. Le fournisseur peut appliquer sa propre politique de conservation. N’utilisez pas ce service pour des données sensibles, la récupération de compte ou des informations financières. L’envoi est désactivé et les pièces jointes ne sont pas téléchargeables.", sessionNote: "Le jeton d’accès est conservé dans le stockage de session de cet onglet pour recharger la boîte. Supprimer la boîte retire plus tôt la copie DouNest ; fermer l’onglet supprime seulement le jeton local, tandis que la copie serveur reste jusqu’à sa suppression ou son expiration après environ une heure.",
    guideTitle: "Utiliser une adresse e-mail temporaire", steps: ["Créez une adresse aléatoire en @mail.hmdevelop.me.", "Saisissez-la dans le service concerné ; la réception uniquement est prise en charge.", "Les messages apparaissent automatiquement ou après actualisation. Seul le texte brut est affiché.", "L’adresse et les messages expirent après environ une heure ; vous pouvez les supprimer avant."], faqTitle: "Questions fréquentes", faqs: [["Combien de temps la boîte reste-t-elle active ?", "Environ 60 minutes. Un nettoyage périodique supprime les données expirées ; vous pouvez supprimer la boîte plus tôt."], ["Est-elle sûre pour les comptes importants ?", "Non. Évitez les banques, la récupération de mots de passe et toute information sensible. Resend et Cloudflare peuvent traiter les données selon leurs politiques."], ["Puis-je envoyer des e-mails ou télécharger les pièces jointes ?", "Non, la boîte reçoit uniquement les messages ; elle n’affiche que le texte brut et ne télécharge pas les pièces jointes."], ["Pourquoi un message n’arrive-t-il pas ?", "La livraison peut être retardée, refusée, filtrée ou l’adresse peut avoir expiré. Elle n’est pas garantie ; vérifiez l’adresse et actualisez la boîte."]]
  },
  es: {
    nav: "Correo temporal", title: "Correo temporal gratis",
    description: "Crea una dirección temporal @mail.hmdevelop.me y recibe mensajes entrantes durante un máximo de una hora. No la uses para datos sensibles.",
    intro: "Crea una dirección aleatoria para recibir un mensaje puntual, sin registrarte. Este buzón temporal funciona en un servidor, no localmente; no lo uses para bancos, contraseñas ni cuentas importantes.",
    create: "Crear dirección temporal", addressLabel: "Tu dirección temporal", addressPlaceholder: "Tu dirección aparecerá aquí", copy: "Copiar dirección", copied: "Dirección copiada", refresh: "Actualizar bandeja", delete: "Eliminar dirección y mensajes", newAddress: "Crear otra dirección",
    statusIdle: "Crea una dirección para empezar a recibir correo.", statusCreating: "Creando dirección…", statusLoading: "Cargando bandeja…", statusRefreshing: "Buscando mensajes…", statusReady: "Bandeja lista. Se actualiza cada 15 segundos.", statusDeleted: "La dirección y sus mensajes se eliminaron del almacenamiento de DouNest.", statusExpired: "La dirección ha caducado. Crea otra para continuar.", statusLimit: "Límite alcanzado: 8 direcciones por hora desde la misma dirección de red.", statusUnavailable: "El servicio no está disponible temporalmente. Inténtalo más tarde.", statusNetwork: "No se pudo conectar. Comprueba tu conexión e inténtalo de nuevo.", statusError: "No se pudo completar la solicitud.", statusDeleteError: "No se pudo eliminar el buzón ahora. Inténtalo otra vez.", expiresIn: "Caduca en {time}.", expired: "Caducada", inboxTitle: "Mensajes recibidos", noMessages: "Aún no hay mensajes. Mantén esta página abierta o actualiza.", sender: "De", received: "Recibido", attachments: "adjuntos (no descargados)", noPlainText: "No hay texto sin formato para mostrar. El HTML no se muestra por seguridad.",
    warningTitle: "Aviso de privacidad y seguridad", warning: "Los mensajes pasan por Resend y se guarda una copia temporal en la base de datos europea de DouNest durante un máximo de una hora, antes de la limpieza periódica. El proveedor puede aplicar su propia política de retención. No uses este servicio para mensajes sensibles, recuperación de cuentas ni información financiera. No se puede enviar correo y los adjuntos no están disponibles para descarga.", sessionNote: "El token de acceso se guarda en la sesión de esta pestaña para recargar el buzón. Eliminarlo borra antes la copia de DouNest; cerrar la pestaña solo elimina el token local, mientras la copia del servidor permanece hasta que se borre o caduque en aproximadamente una hora.",
    guideTitle: "Cómo usar un correo temporal", steps: ["Crea una dirección aleatoria que termine en @mail.hmdevelop.me.", "Úsala donde esperas recibir un mensaje puntual; solo se admite correo entrante.", "Los mensajes aparecen automáticamente o al actualizar. Solo se muestra texto sin formato.", "La dirección y los mensajes caducan en aproximadamente una hora; puedes eliminarlos antes."], faqTitle: "Preguntas frecuentes", faqs: [["¿Cuánto dura el buzón?", "Aproximadamente 60 minutos. Una tarea periódica elimina los registros caducados y puedes borrar el buzón antes."], ["¿Es seguro para cuentas importantes?", "No. No lo uses para bancos, recuperación de contraseñas ni datos sensibles. Resend y Cloudflare pueden tratar los datos según sus propias políticas."], ["¿Puedo enviar correo o descargar adjuntos?", "No. El servicio solo recibe mensajes, muestra texto sin formato y no descarga adjuntos."], ["¿Por qué no llega un mensaje?", "El envío puede retrasarse, rechazarse o filtrarse, o la dirección puede haber caducado. No se garantiza la entrega; revisa la dirección y actualiza la bandeja."]]
  },
  de: {
    nav: "Temporäre E-Mail", title: "Kostenlose temporäre E-Mail",
    description: "Erstelle eine temporäre @mail.hmdevelop.me-Adresse und empfange Nachrichten bis zu einer Stunde lang. Nicht für sensible Daten verwenden.",
    intro: "Erstelle ohne Konto eine zufällige Adresse für eine einmalige Nachricht. Dieses temporäre Postfach läuft auf einem Server und verarbeitet nichts lokal; nicht für Banken, Passwörter oder wichtige Konten verwenden.",
    create: "Temporäre Adresse erstellen", addressLabel: "Deine temporäre Adresse", addressPlaceholder: "Deine Adresse erscheint hier", copy: "Adresse kopieren", copied: "Adresse kopiert", refresh: "Postfach aktualisieren", delete: "Adresse und Nachrichten löschen", newAddress: "Weitere Adresse erstellen",
    statusIdle: "Erstelle eine Adresse, um E-Mails zu empfangen.", statusCreating: "Adresse wird erstellt…", statusLoading: "Postfach wird geladen…", statusRefreshing: "Suche nach Nachrichten…", statusReady: "Postfach bereit. Automatische Aktualisierung alle 15 Sekunden.", statusDeleted: "Adresse und Nachrichten wurden aus dem DouNest-Speicher gelöscht.", statusExpired: "Diese Adresse ist abgelaufen. Erstelle eine neue.", statusLimit: "Limit erreicht: 8 Adressen pro Stunde von derselben Netzwerkadresse.", statusUnavailable: "Dienst vorübergehend nicht verfügbar. Bitte später erneut versuchen.", statusNetwork: "Verbindung fehlgeschlagen. Prüfe deine Verbindung.", statusError: "Anfrage konnte nicht abgeschlossen werden.", statusDeleteError: "Postfach konnte gerade nicht gelöscht werden.", expiresIn: "Läuft ab in {time}.", expired: "Abgelaufen", inboxTitle: "Eingegangene Nachrichten", noMessages: "Noch keine Nachrichten. Lass die Seite geöffnet oder aktualisiere.", sender: "Von", received: "Empfangen", attachments: "Anhänge (nicht heruntergeladen)", noPlainText: "Keine Klartextnachricht verfügbar. HTML wird aus Sicherheitsgründen nicht angezeigt.",
    warningTitle: "Datenschutz- und Sicherheitshinweis", warning: "Eingehende Nachrichten laufen über Resend; eine temporäre Kopie wird bis zu einer Stunde in der EU-Datenbank von DouNest gespeichert und anschließend regelmäßig bereinigt. Der Anbieter kann eigene Aufbewahrungsregeln haben. Nicht für sensible Nachrichten, Kontowiederherstellung oder Finanzdaten verwenden. Versand ist deaktiviert, Anhänge können nicht heruntergeladen werden.", sessionNote: "Das Zugriffstoken wird im Sitzungsspeicher dieses Tabs gehalten, damit das Postfach nach dem Neuladen verfügbar bleibt. Das Löschen entfernt die DouNest-Kopie vorzeitig; das Schließen des Tabs entfernt nur das lokale Token, während die Serverkopie bis zur Löschung oder zum Ablauf nach etwa einer Stunde bestehen bleibt.",
    guideTitle: "Temporäre E-Mail verwenden", steps: ["Erstelle eine zufällige Adresse mit @mail.hmdevelop.me.", "Gib sie beim gewünschten Dienst ein; unterstützt wird nur der Empfang.", "Nachrichten erscheinen automatisch oder nach dem Aktualisieren. Angezeigt wird nur Klartext.", "Adresse und Nachrichten laufen nach etwa einer Stunde ab; du kannst sie früher löschen."], faqTitle: "Häufige Fragen", faqs: [["Wie lange bleibt das Postfach aktiv?", "Etwa 60 Minuten. Ein regelmäßiger Bereinigungslauf entfernt abgelaufene Datensätze; du kannst früher löschen."], ["Ist das sicher für wichtige Konten?", "Nein. Nicht für Banken, Passwortwiederherstellung oder sensible Daten verwenden. Resend und Cloudflare können Daten nach eigenen Richtlinien verarbeiten."], ["Kann ich E-Mails senden oder Anhänge laden?", "Nein. Der Dienst empfängt nur Nachrichten, zeigt Klartext und lädt keine Anhänge herunter."], ["Warum kommt eine Nachricht nicht an?", "Die Zustellung kann verzögert, abgelehnt oder gefiltert werden, oder die Adresse ist abgelaufen. Eine Zustellung wird nicht garantiert."]]
  },
  tr: {
    nav: "Geçici E-posta", title: "Ücretsiz Geçici E-posta",
    description: "Geçici bir @mail.hmdevelop.me adresi oluşturun ve gelen iletileri bir saate kadar alın. Hassas veriler için kullanmayın.",
    intro: "Hesap açmadan tek seferlik ileti almak için rastgele bir adres oluşturun. Bu, sunucuda çalışan geçici bir posta kutusudur; yerel işleme aracı değildir. Banka, parola veya önemli hesaplar için kullanmayın.",
    create: "Geçici adres oluştur", addressLabel: "Geçici adresiniz", addressPlaceholder: "Adresiniz burada görünecek", copy: "Adresi kopyala", copied: "Adres kopyalandı", refresh: "Gelen kutusunu yenile", delete: "Adresi ve iletileri sil", newAddress: "Yeni adres oluştur",
    statusIdle: "E-posta almaya başlamak için bir adres oluşturun.", statusCreating: "Adres oluşturuluyor…", statusLoading: "Gelen kutusu yükleniyor…", statusRefreshing: "İletiler kontrol ediliyor…", statusReady: "Gelen kutusu hazır. Her 15 saniyede yenilenir.", statusDeleted: "Adres ve iletiler DouNest depolamasından silindi.", statusExpired: "Bu adresin süresi doldu. Devam etmek için yenisini oluşturun.", statusLimit: "Sınır aşıldı: aynı ağ adresinden saatte 8 adres.", statusUnavailable: "Hizmet geçici olarak kullanılamıyor. Daha sonra tekrar deneyin.", statusNetwork: "Bağlantı kurulamadı. Bağlantınızı kontrol edin.", statusError: "İstek tamamlanamadı.", statusDeleteError: "Gelen kutusu şu anda silinemedi.", expiresIn: "Sona ermesine kalan: {time}.", expired: "Süresi doldu", inboxTitle: "Gelen iletiler", noMessages: "Henüz ileti yok. Bu sayfayı açık tutun veya yenileyin.", sender: "Gönderen", received: "Alınma", attachments: "ek (indirilmez)", noPlainText: "Görüntülenecek düz metin yok. Güvenlik için HTML gösterilmez.",
    warningTitle: "Gizlilik ve güvenlik uyarısı", warning: "Gelen iletiler Resend üzerinden geçer ve DouNest'in AB veritabanında bir saate kadar geçici olarak saklanıp periyodik temizlikle kaldırılır. E-posta sağlayıcısı kendi politikasına göre verileri tutabilir. Hassas iletiler, hesap kurtarma veya finansal bilgiler için kullanmayın. Gönderim kapalıdır ve ekler indirilemez.", sessionNote: "Erişim belirteci, gelen kutusunun yeniden yüklemeden sonra kullanılabilmesi için bu sekmenin oturum depolamasında tutulur. Kutuyu silmek DouNest kopyasını erkenden kaldırır; sekmeyi kapatmak yalnızca yerel belirteci siler, sunucu kopyası silinene veya yaklaşık bir saat sonra süresi dolana kadar kalır.",
    guideTitle: "Geçici e-posta nasıl kullanılır?", steps: ["@mail.hmdevelop.me ile biten rastgele bir adres oluşturun.", "Tek seferlik ileti beklediğiniz hizmette bu adresi kullanın; yalnızca gelen posta desteklenir.", "İletiler otomatik olarak veya yenileme sonrası görünür. Yalnızca düz metin gösterilir.", "Adres ve iletiler yaklaşık bir saat sonra sona erer; daha erken silebilirsiniz."], faqTitle: "Sık sorulan sorular", faqs: [["Posta kutusu ne kadar açık kalır?", "Yaklaşık 60 dakika. Süresi dolan kayıtlar düzenli temizlikle kaldırılır; daha önce silebilirsiniz."], ["Önemli hesaplar için güvenli mi?", "Hayır. Banka, parola kurtarma veya hassas bilgi için kullanmayın. Resend ve Cloudflare verileri kendi politikalarına göre işleyebilir."], ["E-posta gönderebilir veya ek indirebilir miyim?", "Hayır. Hizmet yalnızca ileti alır, düz metin gösterir ve ekleri indirmez."], ["İletim neden ulaşmadı?", "Teslimat gecikebilir, reddedilebilir veya filtrelenebilir; adresin süresi dolmuş da olabilir. Teslimat garanti edilmez."]]
  },
  ru: {
    nav: "Временная почта", title: "Бесплатная временная почта",
    description: "Создайте временный адрес @mail.hmdevelop.me и получайте письма до одного часа. Не используйте для конфиденциальных данных.",
    intro: "Создайте случайный адрес для разового письма без регистрации. Это временный почтовый ящик на сервере, а не локальный инструмент; не используйте его для банков, паролей или важных аккаунтов.",
    create: "Создать временный адрес", addressLabel: "Ваш временный адрес", addressPlaceholder: "Адрес появится здесь", copy: "Копировать адрес", copied: "Адрес скопирован", refresh: "Обновить входящие", delete: "Удалить адрес и письма", newAddress: "Создать новый адрес",
    statusIdle: "Создайте адрес, чтобы получать письма.", statusCreating: "Создаём адрес…", statusLoading: "Загружаем почту…", statusRefreshing: "Проверяем письма…", statusReady: "Ящик готов. Автообновление каждые 15 секунд.", statusDeleted: "Адрес и письма удалены из хранилища DouNest.", statusExpired: "Срок действия адреса истёк. Создайте новый.", statusLimit: "Достигнут лимит: 8 адресов в час с одного сетевого адреса.", statusUnavailable: "Сервис временно недоступен. Попробуйте позже.", statusNetwork: "Не удалось подключиться. Проверьте соединение.", statusError: "Не удалось выполнить запрос.", statusDeleteError: "Сейчас не удалось удалить ящик.", expiresIn: "Истекает через {time}.", expired: "Срок истёк", inboxTitle: "Входящие сообщения", noMessages: "Пока нет писем. Оставьте страницу открытой или обновите.", sender: "От", received: "Получено", attachments: "вложений (не загружены)", noPlainText: "Нет текста для показа. HTML не отображается из соображений безопасности.",
    warningTitle: "Важно: конфиденциальность и безопасность", warning: "Входящие сообщения проходят через Resend и временно хранятся в базе данных DouNest в ЕС до одного часа, после чего удаляются периодической очисткой. У провайдера может быть отдельная политика хранения. Не используйте сервис для секретных сообщений, восстановления аккаунтов или финансовых данных. Отправка отключена, вложения недоступны.", sessionNote: "Токен доступа хранится в session storage этой вкладки, чтобы ящик пережил перезагрузку страницы. Удаление ящика раньше удаляет копию DouNest; закрытие вкладки удаляет только локальный токен, а серверная копия остаётся до удаления или истечения срока примерно через час.",
    guideTitle: "Как пользоваться временной почтой", steps: ["Создайте случайный адрес с доменом @mail.hmdevelop.me.", "Укажите его в сервисе, от которого ждёте одноразовое письмо; поддерживается только получение.", "Письма появляются автоматически или после обновления. Показывается только обычный текст.", "Адрес и письма истекают примерно через час; их можно удалить раньше."], faqTitle: "Частые вопросы", faqs: [["Как долго работает ящик?", "Около 60 минут. Периодическая очистка удаляет просроченные записи; вы можете удалить ящик раньше."], ["Безопасно ли использовать для важных аккаунтов?", "Нет. Не используйте для банков, восстановления паролей и конфиденциальных данных. Resend и Cloudflare могут обрабатывать данные по своим политикам."], ["Можно ли отправлять письма или скачивать вложения?", "Нет. Сервис только принимает письма, показывает обычный текст и не загружает вложения."], ["Почему письмо не пришло?", "Доставка может задержаться, быть отклонена или отфильтрована; адрес мог истечь. Доставка не гарантируется."]]
  },
  zh: {
    nav: "临时邮箱", title: "免费临时邮箱",
    description: "创建 @mail.hmdevelop.me 临时地址，最多接收邮件一小时。请勿用于敏感数据。",
    intro: "无需注册即可创建随机地址，用于接收一次性邮件。这是服务器端临时邮箱，不是本地处理工具；请勿用于银行、密码或重要账户。",
    create: "创建临时地址", addressLabel: "你的临时地址", addressPlaceholder: "创建后地址会显示在这里", copy: "复制地址", copied: "已复制地址", refresh: "刷新收件箱", delete: "删除地址和邮件", newAddress: "创建新地址",
    statusIdle: "创建地址以开始接收邮件。", statusCreating: "正在创建地址…", statusLoading: "正在加载收件箱…", statusRefreshing: "正在检查邮件…", statusReady: "收件箱已就绪，每 15 秒自动刷新。", statusDeleted: "地址及邮件已从 DouNest 存储中删除。", statusExpired: "地址已过期，请创建新地址。", statusLimit: "已达上限：同一网络地址每小时最多创建 8 个地址。", statusUnavailable: "服务暂时不可用，请稍后再试。", statusNetwork: "无法连接服务，请检查网络后重试。", statusError: "请求未能完成，请重试。", statusDeleteError: "暂时无法删除收件箱，请重试。", expiresIn: "将在 {time} 后过期。", expired: "已过期", inboxTitle: "收到的邮件", noMessages: "暂无邮件。请保持页面打开或手动刷新。", sender: "发件人", received: "接收时间", attachments: "个附件（不下载）", noPlainText: "没有可显示的纯文本。为安全起见，不渲染 HTML。",
    warningTitle: "隐私与安全提示", warning: "收到的邮件会经过 Resend，并在 DouNest 的欧盟数据库中临时保存最多一小时，之后由定期清理任务移除。邮件服务商可能依据其单独政策保留数据。请勿用于敏感信息、账户恢复或财务数据。此服务不支持发送邮件，也不提供附件下载。", sessionNote: "访问令牌保存在此标签页的会话存储中，以便刷新后继续访问。删除邮箱会提前移除 DouNest 中的副本；关闭标签页只会删除本地令牌，服务器副本仍会保留，直到手动删除或约一小时后过期。",
    guideTitle: "如何使用临时邮箱", steps: ["创建一个以 @mail.hmdevelop.me 结尾的随机地址。", "在需要接收一次性邮件的服务中填写该地址；仅支持收件。", "邮件会自动出现，也可手动刷新。页面只显示纯文本，不执行 HTML。", "地址和邮件约一小时后过期，也可以提前删除。"], faqTitle: "常见问题", faqs: [["邮箱可以使用多久？", "约 60 分钟。定期清理会删除过期记录，你也可以提前删除。"], ["可以用于重要账户吗？", "不可以。请勿用于银行、密码找回或敏感信息。Resend 和 Cloudflare 可能按各自政策处理数据。"], ["可以发送邮件或下载附件吗？", "不可以。此服务仅接收邮件，只显示纯文本，不下载附件。"], ["为什么没有收到邮件？", "投递可能延迟、被拒收或过滤，地址也可能已过期。服务不保证送达，请检查地址并刷新收件箱。"]]
  },
  hi: {
    nav: "अस्थायी ईमेल", title: "मुफ़्त अस्थायी ईमेल",
    description: "@mail.hmdevelop.me अस्थायी पता बनाएँ और एक घंटे तक आने वाले संदेश पाएँ। संवेदनशील डेटा के लिए उपयोग न करें।",
    intro: "बिना खाता बनाए एक बार का संदेश पाने के लिए यादृच्छिक पता बनाएँ। यह सर्वर पर चलने वाला अस्थायी मेलबॉक्स है, स्थानीय टूल नहीं; बैंकिंग, पासवर्ड या महत्वपूर्ण खातों के लिए उपयोग न करें।",
    create: "अस्थायी पता बनाएँ", addressLabel: "आपका अस्थायी पता", addressPlaceholder: "बनने के बाद पता यहाँ दिखेगा", copy: "पता कॉपी करें", copied: "पता कॉपी हुआ", refresh: "इनबॉक्स रीफ़्रेश करें", delete: "पता और संदेश हटाएँ", newAddress: "नया पता बनाएँ",
    statusIdle: "ईमेल पाने के लिए पता बनाएँ।", statusCreating: "पता बनाया जा रहा है…", statusLoading: "इनबॉक्स लोड हो रहा है…", statusRefreshing: "संदेश जाँचे जा रहे हैं…", statusReady: "इनबॉक्स तैयार है; हर 15 सेकंड में अपने-आप रीफ़्रेश होगा।", statusDeleted: "पता और संदेश DouNest स्टोरेज से हटा दिए गए।", statusExpired: "इस पते की अवधि समाप्त हो गई। नया पता बनाएँ।", statusLimit: "सीमा पूरी: एक ही नेटवर्क पते से प्रति घंटे 8 पते।", statusUnavailable: "सेवा अस्थायी रूप से उपलब्ध नहीं है। बाद में प्रयास करें।", statusNetwork: "कनेक्ट नहीं हो सका। कनेक्शन जाँचकर फिर प्रयास करें।", statusError: "अनुरोध पूरा नहीं हो सका।", statusDeleteError: "अभी इनबॉक्स हटाया नहीं जा सका।", expiresIn: "समाप्ति में {time} शेष।", expired: "समाप्त", inboxTitle: "आने वाले संदेश", noMessages: "अभी संदेश नहीं हैं। पृष्ठ खुला रखें या रीफ़्रेश करें।", sender: "से", received: "प्राप्त", attachments: "अटैचमेंट (डाउनलोड नहीं होंगे)", noPlainText: "दिखाने के लिए सादा टेक्स्ट नहीं है। सुरक्षा हेतु HTML नहीं दिखाया जाएगा।",
    warningTitle: "गोपनीयता और सुरक्षा सूचना", warning: "आने वाले संदेश Resend से होकर गुजरते हैं और DouNest के EU डेटाबेस में अधिकतम एक घंटे तक अस्थायी रूप से रखे जाते हैं, फिर नियमित सफ़ाई में हटते हैं। ईमेल प्रदाता अपनी अलग नीति के अनुसार डेटा रख सकता है। संवेदनशील संदेश, खाता रिकवरी या वित्तीय जानकारी के लिए इसका उपयोग न करें। भेजना बंद है और अटैचमेंट डाउनलोड नहीं किए जा सकते।", sessionNote: "पृष्ठ रीफ़्रेश होने पर इनबॉक्स उपलब्ध रखने के लिए एक्सेस टोकन इस टैब के सेशन स्टोरेज में रहता है। इनबॉक्स हटाने से DouNest की कॉपी पहले हट जाती है; टैब बंद करने से केवल स्थानीय टोकन हटता है, सर्वर कॉपी हटाए जाने या लगभग एक घंटे में समाप्त होने तक रहती है।",
    guideTitle: "अस्थायी ईमेल कैसे उपयोग करें", steps: ["@mail.hmdevelop.me पर समाप्त होने वाला यादृच्छिक पता बनाएँ।", "जहाँ एक बार का संदेश चाहिए वहाँ पता दें; केवल आने वाला मेल समर्थित है।", "संदेश अपने-आप या रीफ़्रेश करने पर दिखेंगे। केवल सादा टेक्स्ट दिखाया जाएगा।", "पता और संदेश लगभग एक घंटे में समाप्त होते हैं; पहले भी हटा सकते हैं।"], faqTitle: "अक्सर पूछे जाने वाले प्रश्न", faqs: [["मेलबॉक्स कितनी देर रहता है?", "लगभग 60 मिनट। नियमित सफ़ाई समाप्त रिकॉर्ड हटाती है; आप पहले भी हटा सकते हैं।"], ["क्या यह महत्वपूर्ण खातों के लिए सुरक्षित है?", "नहीं। बैंकिंग, पासवर्ड रिकवरी या संवेदनशील डेटा के लिए उपयोग न करें। Resend और Cloudflare अपनी नीतियों के तहत डेटा संसाधित कर सकते हैं।"], ["क्या ईमेल भेज या अटैचमेंट डाउनलोड कर सकते हैं?", "नहीं। सेवा केवल संदेश प्राप्त करती है, सादा टेक्स्ट दिखाती है और अटैचमेंट डाउनलोड नहीं करती।"], ["संदेश क्यों नहीं आया?", "डिलीवरी में देरी हो सकती है, संदेश अस्वीकार या फ़िल्टर हो सकता है, या पता समाप्त हो सकता है। डिलीवरी की गारंटी नहीं है।"]]
  },
  pt: {
    nav: "E-mail temporário", title: "E-mail temporário grátis",
    description: "Crie um endereço temporário @mail.hmdevelop.me e receba mensagens por até uma hora. Não use para dados sensíveis.",
    intro: "Crie um endereço aleatório para receber uma mensagem pontual, sem cadastro. Esta caixa temporária funciona em um servidor, não localmente; não a use para bancos, senhas ou contas importantes.",
    create: "Criar endereço temporário", addressLabel: "Seu endereço temporário", addressPlaceholder: "Seu endereço aparecerá aqui", copy: "Copiar endereço", copied: "Endereço copiado", refresh: "Atualizar caixa de entrada", delete: "Excluir endereço e mensagens", newAddress: "Criar outro endereço",
    statusIdle: "Crie um endereço para começar a receber e-mails.", statusCreating: "Criando endereço…", statusLoading: "Carregando caixa de entrada…", statusRefreshing: "Verificando mensagens…", statusReady: "Caixa pronta. Atualização automática a cada 15 segundos.", statusDeleted: "O endereço e as mensagens foram excluídos do armazenamento DouNest.", statusExpired: "Este endereço expirou. Crie outro para continuar.", statusLimit: "Limite atingido: 8 endereços por hora do mesmo endereço de rede.", statusUnavailable: "Serviço temporariamente indisponível. Tente novamente mais tarde.", statusNetwork: "Não foi possível conectar. Verifique sua conexão e tente novamente.", statusError: "Não foi possível concluir a solicitação.", statusDeleteError: "Não foi possível excluir a caixa agora.", expiresIn: "Expira em {time}.", expired: "Expirado", inboxTitle: "Mensagens recebidas", noMessages: "Nenhuma mensagem ainda. Mantenha a página aberta ou atualize.", sender: "De", received: "Recebido", attachments: "anexos (não baixados)", noPlainText: "Não há texto simples para exibir. O HTML não é renderizado por segurança.",
    warningTitle: "Aviso de privacidade e segurança", warning: "As mensagens passam pela Resend e uma cópia temporária fica no banco de dados europeu do DouNest por até uma hora, sendo removida por uma limpeza periódica. O provedor pode manter dados conforme sua política separada. Não use para mensagens sensíveis, recuperação de contas ou informações financeiras. O envio está desativado e anexos não ficam disponíveis para download.", sessionNote: "O token de acesso fica no armazenamento de sessão desta aba para permitir recarregar a caixa de entrada. Excluir a caixa remove antes a cópia da DouNest; fechar a aba remove apenas o token local, enquanto a cópia no servidor permanece até ser excluída ou expirar após cerca de uma hora.",
    guideTitle: "Como usar um e-mail temporário", steps: ["Crie um endereço aleatório terminado em @mail.hmdevelop.me.", "Informe-o no serviço em que espera uma mensagem pontual; somente recebimento é suportado.", "As mensagens aparecem automaticamente ou após atualizar. Só exibimos texto simples.", "O endereço e as mensagens expiram em cerca de uma hora; você pode excluí-los antes."], faqTitle: "Perguntas frequentes", faqs: [["Por quanto tempo a caixa fica ativa?", "Cerca de 60 minutos. Uma limpeza periódica remove registros expirados e você pode excluir a caixa antes."], ["É seguro para contas importantes?", "Não. Não use para bancos, recuperação de senhas ou dados sensíveis. Resend e Cloudflare podem processar dados conforme suas políticas."], ["Posso enviar e-mails ou baixar anexos?", "Não. O serviço apenas recebe mensagens, mostra texto simples e não baixa anexos."], ["Por que minha mensagem não chegou?", "A entrega pode atrasar, ser recusada ou filtrada, ou o endereço pode ter expirado. A entrega não é garantida."]]
  }
};

export function getMailCopy(lang = "en") {
  return COPY[lang] || COPY.en;
}

export function mailStructuredData(lang = "en", siteUrl = "https://dounest.hmdevelop.me/") {
  const c = getMailCopy(lang);
  const url = `${siteUrl.replace(/\/$/, "")}/mail/`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": c.title,
      "description": c.description,
      "url": url,
      "applicationCategory": "CommunicationApplication",
      "operatingSystem": "Any",
      "inLanguage": lang,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": c.faqs.map(([question, answer]) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": { "@type": "Answer", "text": answer }
      }))
    }
  ];
}

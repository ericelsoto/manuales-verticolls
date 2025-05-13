document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM CARGADO - SCRIPT.JS VERSIÓN ACTUALIZADA CON MEJORAS EJECUTÁNDOSE");

    const DB_KEY = 'gestorDocumentosDB';
    const LAST_VIEW_KEY = 'gestorDocumentosLastView';

    let database = {
        empresas: [
            {
                id: 'verticolls',
                nombre: 'Verticolls',
                logo: 'logos/verticolls_logo.png',
                departamentos: [
                    { id: 'ventas-v', nombre: 'Ventas', nombreCarpeta: 'ventas-v', categorias: createEmptyCategories() },
                    { id: 'Administracion-v', nombre: 'Administracion', nombreCarpeta: 'Administracion-v', categorias: createEmptyCategories() },
                    { id: 'operaciones-v', nombre: 'Operaciones', nombreCarpeta: 'Operaciones', categorias: createEmptyCategories() },
                    { id: 'rh-v', nombre: 'Recursos Humanos', nombreCarpeta: 'rh-v', categorias: {
                        manuales: [], politicas: [], protocolos: [], instructivos: [],
                        documentos: [
                             { id: 'ACTA_ENTREGA_DEP', nombre: 'Acta de Entrega de Departamento (Ejemplo)', archivo: 'empresas/verticolls/rh-v/documentos/ACTA DE ENTREGA DE DEPARTAMENTO.docx', video: null}
                        ],
                        videos: []
                        }
                    }
                ]
            },
            {
                id: 'decovcp',
                nombre: 'Deco VCP',
                logo: 'logos/decovcp_logo.png',
                departamentos: [
                    { id: 'ventas-v', nombre: 'Ventas', nombreCarpeta: 'ventas-v', categorias: createEmptyCategories() },
                    { id: 'Administracion-v', nombre: 'Administracion', nombreCarpeta: 'Administracion-v', categorias: createEmptyCategories() },
                    {
                        id: 'operaciones-v',
                        nombre: 'Operaciones',
                        nombreCarpeta: 'Operaciones', // Nombre de la carpeta física
                        categorias: {
                            manuales: [
                                { id: 'IT-OP-0001', nombre: 'Manual Mesa de Corte de Vidrio', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0001_Manual_mesa_de_corte_de_vidrio.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0001_Video.mp4' },
                                { id: 'IT-OP-0002', nombre: 'Manual de Corte de Vidrio Manual', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0002_Manual_de_corte_de_vidrio_manual.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0002_Video.mp4' },
                                { id: 'IT-OP-0003', nombre: 'Manual Canteadora Cherokee', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0003_Manual_Canteadora_Cherokee.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0003_Video.mp4' },
                                { id: 'IT-OP-0004', nombre: 'Manual Canteadora Bavelloni', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0004_Manual_Canteadora_Bavelloni.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0004_Video.mp4' },
                                { id: 'IT-OP-0005', nombre: 'Manual Taladro Cherokee', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0005_Manual_Taladro_Cherokee.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0005_Video.mp4' },
                                { id: 'IT-OP-0006', nombre: 'Manual Horno Pujol', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0006_Manual_Horno_Pujol.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0006_Video.mp4' },
                                { id: 'IT-OP-0007', nombre: 'Manual Grúa TECNOCAT', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0007_Manual_Grua_TECNOCAT.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0007_Video.mp4' },
                                { id: 'IT-OP-0008', nombre: 'Manual Operación CNC', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0008_Manual_Operacion_CNC.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0008_Video.mp4' },
                                { id: 'IT-OP-0009', nombre: 'Manual Esmerilado', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0009_Manual_Esmerilado.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0009_Video.mp4' },
                                { id: 'IT-OP-0010', nombre: 'Manual Taladro Doble Vidrio', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0010_Manual_Taladro_Doble_Vidrio.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0010_Video.mp4' },
                                { id: 'IT-OP-0011', nombre: 'Manual Trabajo Marcado', archivo: 'empresas/decovcp/Operaciones/Manuales/IT_OP_0011_Manual_Trabajo_Marcado.pdf', video: 'empresas/decovcp/Operaciones/videos/IT_OP_0011_Video.mp4' },
                                { id: 'PR-OP-0001', nombre: 'Procedimiento Trabajo para Entregas', archivo: 'empresas/decovcp/Operaciones/Manuales/PR_OP_0001_Procedimiento_Entregas.pdf', video: 'empresas/decovcp/Operaciones/videos/PR_OP_0001_Video.mp4' }
                            ],
                            politicas: [], protocolos: [], instructivos: [], documentos: [], videos: []
                        }
                    },
                    { id: 'calidad-d', nombre: 'Calidad', nombreCarpeta: 'calidad-d', categorias: createEmptyCategories() }
                ]
            },
            {
                id: 'herralum',
                nombre: 'Herralum',
                logo: 'logos/herralum_logo.png',
                departamentos: [
                    { id: 'ventas-v', nombre: 'Ventas', nombreCarpeta: 'ventas-v', categorias: createEmptyCategories() },
                    { id: 'Administracion-v', nombre: 'Administracion', nombreCarpeta: 'Administracion-v', categorias: createEmptyCategories() },
                    { id: 'operaciones-v', nombre: 'Operaciones', nombreCarpeta: 'Operaciones', categorias: createEmptyCategories() },
                ]
            }
        ],
        isAdmin: false
    };

    function createEmptyCategories() {
        return { manuales: [], politicas: [], protocolos: [], instructivos: [], documentos: [], videos: [] };
    }

    function saveDB() {
        localStorage.setItem(DB_KEY, JSON.stringify(database));
    }

    function loadDB() {
        const storedDB = localStorage.getItem(DB_KEY);
        if (storedDB) {
            const loadedDB = JSON.parse(storedDB);
            // Fusionar para mantener datos del usuario pero actualizar estructura/rutas del script
            // Esto es una fusión simple, para estructuras más complejas se necesitaría algo más robusto
            database.empresas.forEach(scriptEmpresa => {
                const storedEmpresa = loadedDB.empresas.find(e => e.id === scriptEmpresa.id);
                if (storedEmpresa) {
                    scriptEmpresa.departamentos.forEach(scriptDepto => {
                        const storedDepto = storedEmpresa.departamentos.find(d => d.id === scriptDepto.id);
                        if (storedDepto && storedDepto.categorias) {
                             // Mantener las categorías del usuario si existen, sino usar las del script
                            Object.keys(scriptDepto.categorias).forEach(catKey => {
                                if (storedDepto.categorias[catKey] && Array.isArray(storedDepto.categorias[catKey])) {
                                     // Aquí es donde las rutas son cruciales.
                                     // Si las rutas en el script son la "verdad", las sobrescribimos.
                                     // Si queremos MANTENER los archivos del usuario, pero actualizar las rutas si la estructura de carpetas cambia,
                                     // necesitaríamos una lógica de migración más compleja.
                                     // Por ahora, para asegurar que las rutas del script se usan si hay cambios:
                                     // scriptDepto.categorias[catKey] = storedDepto.categorias[catKey]; // Esto mantendría los datos del usuario
                                     // Pero si queremos forzar las rutas del script actual:
                                     // NO HACEMOS NADA AQUÍ, se usará la 'database' del script.
                                     // Para esta versión, vamos a priorizar las rutas del script para los datos hardcodeados,
                                     // pero los datos añadidos por el admin se mantendrán.
                                     // Lo que haremos es: si la base de datos del script tiene datos hardcodeados para una categoria,
                                     // y el localStorage también, podríamos fusionar o decidir.
                                     // La lógica de abajo ahora intenta ser más inteligente al cargar.
                                }
                            });
                             // Combinar categorías: si una categoría existe en localStorage pero no en el script, mantenerla.
                            Object.keys(storedDepto.categorias).forEach(storedCatKey => {
                                if (!scriptDepto.categorias[storedCatKey]) {
                                    scriptDepto.categorias[storedCatKey] = storedDepto.categorias[storedCatKey];
                                } else {
                                    // Si la categoría existe en ambos, fusionar los documentos, dando prioridad a los del script
                                    // si tienen el mismo ID, o simplemente añadiendo los que no estén.
                                    // Esto es complejo. Por ahora, el `loadDB` va a ser más simple:
                                    // si hay algo en localStorage, lo usa. Si el script define rutas nuevas,
                                    // esas rutas se aplicarán la proxima vez que localStorage este vacio.
                                    // LA SOLUCION MÁS SIMPLE PARA ACTUALIZAR RUTAS ES BORRAR LOCALSTORAGE MANUALMENTE.
                                }
                            });
                        }
                    });
                }
            });
            // Restaurar el estado de isAdmin
            if (typeof loadedDB.isAdmin === 'boolean') {
                database.isAdmin = loadedDB.isAdmin;
            }
             console.log("Base de datos cargada y fusionada (simple) desde localStorage.");
        } else {
            saveDB(); // Guarda la database definida en el script si no hay nada en localStorage
            console.log("Base de datos inicial (del script) guardada en localStorage.");
        }
    }


    loadDB();

    const breadcrumbsNav = document.getElementById('breadcrumbs');
    // ... (resto de declaraciones de constantes para elementos del DOM)
    const logosContainer = document.getElementById('logos-container');
    const departamentosContainer = document.getElementById('departamentos-container');
    const departamentosTitle = document.getElementById('departamentos-title');
    const departamentosList = document.getElementById('departamentos-list');
    const categoriasContainer = document.getElementById('categorias-container');
    const categoriasTitle = document.getElementById('categorias-title');
    const categoriasList = document.getElementById('categorias-list');
    const documentosContainer = document.getElementById('documentos-container');
    const documentosTitle = document.getElementById('documentos-title');
    const documentosList = document.getElementById('documentos-list');
    const adminModeCheckbox = document.getElementById('adminMode');
    const adminPanel = document.getElementById('admin-panel');
    const empresaAdminSelect = document.getElementById('empresaAdmin');
    const departamentoAdminSelect = document.getElementById('departamentoAdmin');
    const categoriaAdminSelect = document.getElementById('categoriaAdmin');
    const docNombreAdminInput = document.getElementById('docNombreAdmin');
    const fileAdminInput = document.getElementById('fileAdmin');
    const videoFileAdminInput = document.getElementById('videoFileAdmin');
    const subirDocAdminButton = document.getElementById('subirDocAdmin');
    const uploadStatus = document.getElementById('uploadStatus');
    const dragDropArea = document.getElementById('drag-drop-area');
    const qrModal = document.getElementById('qrModal');
    const qrCodeDiv = document.getElementById('qrcode');
    const qrDocNameP = document.getElementById('qrDocName');
    const closeQrModalButton = qrModal.querySelector('.close-button');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitleModal = document.getElementById('videoTitleModal');
    const closeVideoModalButton = videoModal.querySelector('.close-button-video');
    let qrcodeInstance = null;
    let currentEmpresa = null;
    let currentDepartamento = null;
    let currentCategoria = null;


    function updateBreadcrumbs() {
        breadcrumbsNav.innerHTML = '';
        const ol = document.createElement('ol');
        
        const homeLi = document.createElement('li');
        const homeLink = document.createElement('a');
        homeLink.href = '#';
        homeLink.textContent = 'Empresas';
        homeLink.onclick = (e) => {
            e.preventDefault();
            resetToEmpresasView();
        };
        homeLi.appendChild(homeLink);
        ol.appendChild(homeLi);

        if (currentEmpresa) {
            const empresaLi = document.createElement('li');
            if (!currentDepartamento) {
                empresaLi.classList.add('active-breadcrumb');
                const span = document.createElement('span');
                span.textContent = currentEmpresa.nombre;
                empresaLi.appendChild(span);
            } else {
                const empresaLink = document.createElement('a');
                empresaLink.href = '#';
                empresaLink.textContent = currentEmpresa.nombre;
                empresaLink.onclick = (e) => {
                    e.preventDefault();
                    selectEmpresa(currentEmpresa.id);
                };
                empresaLi.appendChild(empresaLink);
            }
            ol.appendChild(empresaLi);
        }

        if (currentEmpresa && currentDepartamento) {
            const deptoLi = document.createElement('li');
            if (!currentCategoria) {
                deptoLi.classList.add('active-breadcrumb');
                const span = document.createElement('span');
                span.textContent = currentDepartamento.nombre;
                deptoLi.appendChild(span);
            } else {
                const deptoLink = document.createElement('a');
                deptoLink.href = '#';
                deptoLink.textContent = currentDepartamento.nombre;
                deptoLink.onclick = (e) => {
                    e.preventDefault();
                    selectDepartamento(currentEmpresa.id, currentDepartamento.id);
                };
                deptoLi.appendChild(deptoLink);
            }
            ol.appendChild(deptoLi);
        }

        if (currentEmpresa && currentDepartamento && currentCategoria) {
            const catLi = document.createElement('li');
            catLi.classList.add('active-breadcrumb');
            const span = document.createElement('span');
            span.textContent = currentCategoria.charAt(0).toUpperCase() + currentCategoria.slice(1);
            catLi.appendChild(span);
            ol.appendChild(catLi);
        }
        breadcrumbsNav.appendChild(ol);
    }

    function resetToEmpresasView() {
        currentEmpresa = null;
        currentDepartamento = null;
        currentCategoria = null;
        departamentosContainer.classList.add('hidden');
        categoriasContainer.classList.add('hidden');
        documentosContainer.classList.add('hidden');
        setActiveSelections();
        updateBreadcrumbs();
        saveLastView();
    }

    function setActiveSelections() {
        document.querySelectorAll('#logos-container img, #departamentos-list li, #categorias-list li').forEach(el => {
            el.classList.remove('active-selection');
        });

        if (currentEmpresa) {
            const logoEl = logosContainer.querySelector(`img[data-empresa-id="${currentEmpresa.id}"]`);
            if (logoEl) logoEl.classList.add('active-selection');
        }
        if (currentDepartamento) {
            // Los items de lista de departamentos no tienen data-id, se identifican por el texto o índice si es necesario
            // Esta parte requeriría que los <li> de depto tuvieran data-depto-id para ser más robusto
        }
         // Similar para categorías
    }
    
    function saveLastView() {
        const lastView = {
            empresaId: currentEmpresa ? currentEmpresa.id : null,
            deptoId: currentDepartamento ? currentDepartamento.id : null,
            catKey: currentCategoria || null,
        };
        localStorage.setItem(LAST_VIEW_KEY, JSON.stringify(lastView));
    }

    function loadLastView() {
        const storedView = localStorage.getItem(LAST_VIEW_KEY);
        if (storedView) {
            const { empresaId, deptoId, catKey } = JSON.parse(storedView);
            if (empresaId) {
                selectEmpresa(empresaId);
                if (deptoId) {
                    selectDepartamento(empresaId, deptoId);
                    if (catKey) {
                        selectCategoria(empresaId, deptoId, catKey);
                    }
                }
            }
        }
    }


    // ... (resto de funciones: renderEmpresas, selectEmpresa, etc. con llamadas a updateBreadcrumbs y saveLastView)
    function renderEmpresas() {
        console.log("Iniciando renderEmpresas. Número de empresas:", database.empresas.length);
        if (!logosContainer) {
            console.error("FATAL: El elemento 'logos-container' NO fue encontrado en el DOM. Revisa tu HTML.");
            return;
        }
        logosContainer.innerHTML = '';
        if (database.empresas.length === 0) {
            console.warn("No hay empresas definidas en la base de datos para renderizar.");
            logosContainer.textContent = "No hay empresas para mostrar.";
            return;
        }
        database.empresas.forEach(empresa => {
            const img = document.createElement('img');
            img.src = empresa.logo;
            img.alt = empresa.nombre;
            img.dataset.empresaId = empresa.id;
            img.addEventListener('click', () => {
                selectEmpresa(empresa.id);
            });
            img.onerror = function() {
                console.error(`Error al cargar imagen: ${this.src}. Empresa: ${empresa.nombre}`);
                this.alt = `${empresa.nombre} (LOGO NO ENCONTRADO)`;
            };
            logosContainer.appendChild(img);
        });
        populateAdminEmpresaSelect();
        setActiveSelections();
        updateBreadcrumbs();
    }

    function selectEmpresa(empresaId) {
        currentEmpresa = database.empresas.find(e => e.id === empresaId);
        currentDepartamento = null;
        currentCategoria = null;
        if (currentEmpresa) {
            departamentosTitle.textContent = `Departamentos - ${currentEmpresa.nombre}`;
            renderDepartamentos(currentEmpresa);
            departamentosContainer.classList.remove('hidden');
            categoriasContainer.classList.add('hidden');
            documentosContainer.classList.add('hidden');
        }
        setActiveSelections();
        updateBreadcrumbs();
        saveLastView();
    }

    function renderDepartamentos(empresa) {
        departamentosList.innerHTML = '';
        empresa.departamentos.forEach(depto => {
            const li = document.createElement('li');
            li.dataset.deptoId = depto.id; // Añadir data-id para resaltar activo
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = depto.nombre;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                selectDepartamento(empresa.id, depto.id);
            });
            li.appendChild(a);
            departamentosList.appendChild(li);
        });
        setActiveSelections(); // Llamar después de crear los elementos
    }
    
    function selectDepartamento(empresaId, deptoId) {
        const empresa = database.empresas.find(e => e.id === empresaId);
        if (!empresa) return;
        currentDepartamento = empresa.departamentos.find(d => d.id === deptoId);
        currentCategoria = null;
        if (currentDepartamento) {
            categoriasTitle.textContent = `Categorías - ${currentDepartamento.nombre}`;
            renderCategorias(empresaId, deptoId);
            categoriasContainer.classList.remove('hidden');
            documentosContainer.classList.add('hidden');
        }
        setActiveSelections();
        updateBreadcrumbs();
        saveLastView();
    }

    function renderCategorias(empresaId, deptoId) {
        categoriasList.innerHTML = '';
        const depto = database.empresas.find(e => e.id === empresaId)
                            .departamentos.find(d => d.id === deptoId);
        if (!depto) return;
        Object.keys(depto.categorias).forEach(catKey => {
            const li = document.createElement('li');
            li.dataset.catKey = catKey; // Añadir data-key para resaltar activo
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = catKey.charAt(0).toUpperCase() + catKey.slice(1);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                selectCategoria(empresaId, deptoId, catKey);
            });
            li.appendChild(a);
            categoriasList.appendChild(li);
        });
        setActiveSelections();
    }
    
    function selectCategoria(empresaId, deptoId, catKey) {
        currentCategoria = catKey;
        const depto = database.empresas.find(e => e.id === empresaId)
                            .departamentos.find(d => d.id === deptoId);
        if (depto) {
            documentosTitle.textContent = `${catKey.charAt(0).toUpperCase() + catKey.slice(1)} - ${depto.nombre}`;
            renderDocumentos(empresaId, deptoId, catKey);
            documentosContainer.classList.remove('hidden');
        }
        setActiveSelections();
        updateBreadcrumbs();
        saveLastView();
    }
    
    function setActiveSelections() { // Mejorada para listas
        document.querySelectorAll('#logos-container img, #departamentos-list li, #categorias-list li').forEach(el => {
            el.classList.remove('active-selection');
        });
    
        if (currentEmpresa) {
            const logoEl = logosContainer.querySelector(`img[data-empresa-id="${currentEmpresa.id}"]`);
            if (logoEl) logoEl.classList.add('active-selection');
        }
        if (currentDepartamento) {
            const deptoEl = departamentosList.querySelector(`li[data-depto-id="${currentDepartamento.id}"]`);
            if (deptoEl) deptoEl.classList.add('active-selection');
        }
        if (currentCategoria) {
            const catEl = categoriasList.querySelector(`li[data-cat-key="${currentCategoria}"]`);
            if (catEl) catEl.classList.add('active-selection');
        }
    }


    function renderDocumentos(empresaId, deptoId, catKey) {
        documentosList.innerHTML = '';
        const empresa = database.empresas.find(e => e.id === empresaId);
        if (!empresa) { console.error(`Empresa ${empresaId} no encontrada en renderDocumentos`); return; }
        const depto = empresa.departamentos.find(d => d.id === deptoId);
        if (!depto) { console.error(`Departamento ${deptoId} no encontrado en renderDocumentos`); return; }
        if (!depto.categorias || !depto.categorias[catKey]) {
            console.warn(`Categoría ${catKey} no encontrada o vacía para Depto ${deptoId}`);
            documentosList.innerHTML = '<li>No hay documentos en esta categoría.</li>';
            return;
        }

        const categoriaData = depto.categorias[catKey];

        if (categoriaData && categoriaData.length > 0) {
            categoriaData.forEach((doc, index) => {
                const li = document.createElement('li');
                li.classList.add('doc-item');
                
                const docNameContainer = document.createElement('span'); // Contenedor para el nombre
                docNameContainer.classList.add('doc-name');
                docNameContainer.textContent = doc.nombre;

                const docActions = document.createElement('div');
                docActions.classList.add('doc-actions');

                const docLink = document.createElement('a');
                const pathParts = doc.archivo.split('/');
                const fileName = pathParts.pop();
                const directoryPath = pathParts.join('/') + (pathParts.length > 0 ? '/' : '');
                docLink.href = directoryPath + encodeURIComponent(fileName);
                docLink.textContent = "Ver"; // Más corto
                docLink.classList.add('view-btn'); // Para estilo de botón
                docLink.setAttribute('title', 'Ver Documento');
                docLink.target = "_blank";
                docActions.appendChild(docLink);

                const qrButton = document.createElement('button');
                qrButton.innerHTML = '<span class="icon-qr" title="Generar QR">QR</span>'; // Contenido puede ser un icono
                qrButton.onclick = () => showQR(doc);
                docActions.appendChild(qrButton);

                if (doc.video && catKey === 'manuales') {
                    const videoButton = document.createElement('button');
                    videoButton.innerHTML = '<span class="icon-video" title="Ver Video">Video</span>';
                    let videoUrl = doc.video;
                    if (empresaId === 'decovcp' && depto.id === 'operativos-d' && videoUrl.includes('operativos/videos')) {
                        videoUrl = videoUrl.replace('operativos/videos', 'Operaciones/videos');
                    } else if (empresaId === 'verticolls' && depto.id === 'operaciones-v' && depto.nombreCarpeta === 'Operaciones' && videoUrl.includes(`${depto.id}/videos`)) {
                        // Si la carpeta de videos para Verticolls->Operaciones está bajo la carpeta física 'Operaciones'
                        videoUrl = videoUrl.replace(`${depto.id}/videos`, `${depto.nombreCarpeta}/videos`);
                    }

                    const finalVideoUrl = videoUrl;
                    videoButton.addEventListener('click', () => showVideoModal(doc.nombre, finalVideoUrl));
                    docActions.appendChild(videoButton);
                }

                if (database.isAdmin) {
                    const deleteButton = document.createElement('button');
                    deleteButton.innerHTML = '<span class="icon-delete" title="Eliminar">Eliminar</span>';
                    deleteButton.classList.add('delete-btn');
                    deleteButton.onclick = () => deleteDocumento(empresaId, deptoId, catKey, index);
                    docActions.appendChild(deleteButton);
                }
                
                li.appendChild(docNameContainer);
                li.appendChild(docActions);
                documentosList.appendChild(li);
            });
        } else {
            documentosList.innerHTML = '<li>No hay documentos en esta categoría.</li>';
        }
    }


    // ... (resto de funciones: showQR, modales, admin, etc. - sin cambios mayores, excepto el depto.nombreCarpeta)
    function showQR(doc) {
        qrDocNameP.textContent = doc.nombre;
        let docUrl;
        const pageUrl = new URL(window.location.href);
        let basePath = pageUrl.href.substring(0, pageUrl.href.lastIndexOf('/') + 1);
        let tempUrl = new URL(doc.archivo, basePath).href;
        const urlObject = new URL(tempUrl);
        if (urlObject.protocol === "file:") {
            const pathSegments = doc.archivo.split('/');
            const encodedPathSegments = pathSegments.map(segment => encodeURIComponent(segment));
            const relativeEncodedPath = encodedPathSegments.join('/');
            docUrl = new URL(relativeEncodedPath, basePath).href;
        } else {
            docUrl = tempUrl;
        }
        console.log("Generando QR para URL:", docUrl);
        if (qrCodeDiv.firstChild) {
            qrCodeDiv.innerHTML = '';
        }
        try {
            qrcodeInstance = new QRCode(qrCodeDiv, {
                text: docUrl,
                width: 256,
                height: 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        } catch (e) {
            console.error("Error al generar QRCode:", e);
            qrCodeDiv.textContent = "Error al generar QR.";
        }
        qrModal.style.display = 'block';
    }

    closeQrModalButton.onclick = () => qrModal.style.display = 'none';

    function showVideoModal(docNombre, videoPath) {
        videoTitleModal.textContent = `Video Instructivo: ${docNombre}`;
        videoPlayer.src = videoPath;
        videoModal.style.display = 'block';
        videoPlayer.play().catch(error => {
            console.error("Error al intentar reproducir video:", videoPath, error);
            videoTitleModal.textContent += " (Error al cargar video)";
        });
    }

    closeVideoModalButton.onclick = () => {
        videoModal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = "";
    };

    window.onclick = (event) => {
        if (event.target == qrModal) {
            qrModal.style.display = 'none';
        }
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.src = "";
        }
    };

    adminModeCheckbox.addEventListener('change', (e) => {
        database.isAdmin = e.target.checked;
        adminPanel.classList.toggle('hidden', !database.isAdmin);
        if (currentEmpresa && currentDepartamento && currentCategoria) {
            renderDocumentos(currentEmpresa.id, currentDepartamento.id, currentCategoria);
        }
        saveDB(); // Guardar el estado de isAdmin en localStorage
    });
    // Restaurar estado de isAdmin al cargar
    adminModeCheckbox.checked = database.isAdmin; 
    adminPanel.classList.toggle('hidden', !database.isAdmin);


    function populateAdminEmpresaSelect() {
        empresaAdminSelect.innerHTML = '<option value="">Seleccione Empresa</option>';
        database.empresas.forEach(empresa => {
            const option = document.createElement('option');
            option.value = empresa.id;
            option.textContent = empresa.nombre;
            empresaAdminSelect.appendChild(option);
        });
    }

    empresaAdminSelect.addEventListener('change', () => {
        departamentoAdminSelect.innerHTML = '<option value="">Seleccione Departamento</option>';
        const selectedEmpresaId = empresaAdminSelect.value;
        if (selectedEmpresaId) {
            const empresa = database.empresas.find(e => e.id === selectedEmpresaId);
            if (empresa) {
                empresa.departamentos.forEach(depto => {
                    const option = document.createElement('option');
                    option.value = depto.id;
                    option.textContent = depto.nombre;
                    departamentoAdminSelect.appendChild(option);
                });
            }
        }
    });

    subirDocAdminButton.addEventListener('click', () => {
        const empresaId = empresaAdminSelect.value;
        const deptoId = departamentoAdminSelect.value;
        const catKey = categoriaAdminSelect.value;
        const docNombre = docNombreAdminInput.value.trim();
        const fileInputFile = fileAdminInput.files[0];
        const videoFileInputFile = videoFileAdminInput.files[0];

        if (!empresaId || !deptoId || !docNombre || (!fileInputFile && catKey !== 'videos') || (catKey === 'videos' && !fileInputFile) ) {
            uploadStatus.textContent = 'Error: Campos Empresa, Departamento, Nombre y Archivo Principal son requeridos.';
            uploadStatus.className = 'error';
            setTimeout(() => uploadStatus.textContent = '', 5000);
            return;
        }
        const empresa = database.empresas.find(e => e.id === empresaId);
        if (!empresa) { /* ... */ return; }
        const depto = empresa.departamentos.find(d => d.id === deptoId);
        if (!depto) { /* ... */ return; }

        // Usar 'nombreCarpeta' del objeto depto para construir la ruta
        const folderNameForPath = depto.nombreCarpeta || depto.id; // Fallback al ID si nombreCarpeta no está definido

        let filePath = `empresas/${empresaId}/${folderNameForPath}/${catKey}/${fileInputFile.name}`;
        let videoPath = '';
        if (videoFileInputFile && catKey === 'manuales') {
             videoPath = `empresas/${empresaId}/${folderNameForPath}/videos/${videoFileInputFile.name}`;
        } else if (catKey === 'videos' && fileInputFile) {
            filePath = `empresas/${empresaId}/${folderNameForPath}/${catKey}/${fileInputFile.name}`;
        }
        const newDoc = {
            id: 'DOC-' + Date.now(),
            nombre: docNombre,
            archivo: filePath,
            video: videoPath || null
        };
        if (!depto.categorias[catKey]) {
            depto.categorias[catKey] = [];
        }
        depto.categorias[catKey].push(newDoc);
        saveDB();
        uploadStatus.textContent = `Simulado: "${docNombre}" añadido. Coloca el archivo en: ${filePath} ${videoPath ? 'y video en: ' + videoPath : ''}`;
        uploadStatus.className = 'success';
        
        // Limpiar campos y mensaje
        docNombreAdminInput.value = '';
        fileAdminInput.value = '';
        if (videoFileAdminInput) videoFileAdminInput.value = '';
        setTimeout(() => {
            uploadStatus.textContent = '';
            uploadStatus.className = '';
        } , 7000); // Limpiar mensaje después de 7 segundos


        if (currentEmpresa && currentDepartamento && currentCategoria &&
            currentEmpresa.id === empresaId && currentDepartamento.id === deptoId && currentCategoria === catKey) {
            renderDocumentos(empresaId, deptoId, catKey);
        }
    });

    function deleteDocumento(empresaId, deptoId, catKey, docIndex) {
        if (!confirm('¿Estás seguro de que quieres eliminar este documento? Esta acción es simulada y solo lo quitará de la lista.')) {
            return;
        }
        const empresa = database.empresas.find(e => e.id === empresaId);
        const depto = empresa.departamentos.find(d => d.id === deptoId);
        const docEliminado = depto.categorias[catKey].splice(docIndex, 1);
        saveDB();
        alert(`Simulado: Documento "${docEliminado[0].nombre}" eliminado de la lista. Deberás eliminar el archivo manualmente.`);
        renderDocumentos(empresaId, deptoId, catKey);
    }

    dragDropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragDropArea.classList.add('hover');
    });
    dragDropArea.addEventListener('dragleave', () => {
        dragDropArea.classList.remove('hover');
    });
    dragDropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dragDropArea.classList.remove('hover');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const esCategoriaManuales = categoriaAdminSelect.value === 'manuales';
            if (esCategoriaManuales) {
                if (files.length === 1) {
                    fileAdminInput.files = createFileList(files[0]);
                    if (videoFileAdminInput) videoFileAdminInput.value = '';
                    uploadStatus.textContent = `Archivo ${files[0].name} listo para "subir" como manual. Puedes añadir un video por separado.`;
                } else if (files.length >= 2) {
                    fileAdminInput.files = createFileList(files[0]);
                    if (videoFileAdminInput) videoFileAdminInput.files = createFileList(files[1]);
                    uploadStatus.textContent = `Manual ${files[0].name} y video ${files[1].name} listos para "subir".`;
                }
            } else {
                if (files.length === 1) {
                    fileAdminInput.files = files;
                    if (videoFileAdminInput) videoFileAdminInput.value = '';
                    uploadStatus.textContent = `Archivo ${files[0].name} listo para "subir".`;
                } else {
                    uploadStatus.textContent = `Para esta categoría, arrastra solo un archivo.`;
                }
            }
            if (!docNombreAdminInput.value && files[0]) {
                docNombreAdminInput.value = files[0].name.split('.').slice(0, -1).join('.');
            }
        }
    });

    function createFileList(file) {
        const dataTransfer = new DataTransfer();
        if (file) {
            dataTransfer.items.add(file);
        }
        return dataTransfer.files;
    }

    renderEmpresas(); // Renderiza empresas al inicio
    loadLastView(); // Intenta cargar la última vista
    updateBreadcrumbs(); // Actualiza breadcrumbs después de cargar la última vista
    setActiveSelections(); // Asegura que la selección activa se muestre
    console.log("Llamada inicial a renderEmpresas y loadLastView completada.");
});

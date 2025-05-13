@echo off
title Gestor de Documentos - Servidor HTTP
echo Iniciando servidor HTTP para el Gestor de Documentos...
echo.
echo Para acceder desde otras PCs o celulares en la misma red, usa:
echo http://TU_IP_LOCAL:8000
echo. 
echo (Puedes encontrar TU_IP_LOCAL abriendo otra ventana de CMD y escribiendo 'ipconfig')
echo.
echo Presiona Ctrl+C en esta ventana para detener el servidor.
echo.
python -m http.server 8000
pause
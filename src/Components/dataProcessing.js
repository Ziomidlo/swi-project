export const scaleFaceData = (data) => ({
    headWidth: scaleValue(data['Bramki stracone'], 0, 50, 50, 150),
    eyeSize: scaleValue(data['Ilość żółtych kartek'], 0, 20, 5, 20),
    mouthWidth: scaleValue(data['Bramki zdobyte'], 0, 100, 30, 100),
    browTilt: scaleValue(data['Ilość przeprowadzonych zmian'], 0, 10, -10, 10),
    noseLength: scaleValue(data['Miejsce w tabeli'], 1, 20, 10, 50),
  });
  
  export const scaleValue = (value, min, max, scaledMin, scaledMax) => {
    return ((value - min) / (max - min)) * (scaledMax - scaledMin) + scaledMin;
  };
  
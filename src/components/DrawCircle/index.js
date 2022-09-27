import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet"

const DrawCircle = ({onCircleCreated}) => {
  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={onCircleCreated}
        draw={
          {
            circle: true,
            rectangle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: false
          }
        }
      />
    </FeatureGroup>
  )
}

export default DrawCircle
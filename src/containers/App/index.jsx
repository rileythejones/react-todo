import * as React from "react";
import './App.scss'
import Todos from 'containers/Todo'
import { Button, Card, Elevation, Collapse, H5, Pre, Switch} from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";


const App = () => {
  return (
    <div>
      <Card className="bp3-interactive" elevation={Elevation.TWO}>
        <h5><a href="react-todo">Card heading</a></h5>
        <p>Card content</p>
        <Button>Submit</Button>
        <div>
          We build products that make people better at their most important work.
        </div>
      </Card>
      <div className="root" data-test="root">
        <Collapse>
          <Card className="bp3-interactive make-higher" elevation={Elevation.TWO}>
            <h5><a href="react-todo">Card heading</a></h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
        </Collapse>
        <Todos />
        <Card className="bp3-interactive make-higher" elevation={Elevation.TWO}>
          <h5><a href="react-todo">Card heading</a></h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>
      </div>
      <Card className="bp3-interactive" elevation={Elevation.TWO}>
        <h5><a href="react-todo">Card heading</a></h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
    </div>
  )
}

export default App



export interface ICollapseExampleState {
    isOpen: boolean;
    keepChildrenMounted: boolean;
}

export class CollapseExample extends React.PureComponent<IExampleProps, ICollapseExampleState> {
    state: ICollapseExampleState = {
        isOpen: false,
        keepChildrenMounted: false,
    };

    handleChildrenMountedChange = handleBooleanChange(keepChildrenMounted => {
        this.setState({ keepChildrenMounted });
    });

    render() {
        const options = (
            <>
                <H5>Props</H5>
                <Switch
                    checked={this.state.keepChildrenMounted}
                    label="Keep children mounted"
                    onChange={this.handleChildrenMountedChange}
                />
            </>
        );

        return (
            <Example options={options} {...this.props}>
                <div style={{ width: "100%", height: "100%", margin: 0 }}>
                    <Button onClick={this.handleClick}>{this.state.isOpen ? "Hide" : "Show"} build logs</Button>
                    <Collapse isOpen={this.state.isOpen} keepChildrenMounted={this.state.keepChildrenMounted}>
                        <Pre>
                            [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms
                            <br />
                            [11:53:30] Starting 'typescript-typings-blueprint'...
                            <br />
                            [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms
                            <br />
                            [11:53:30] write ./blueprint.css
                            <br />
                            [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
                        </Pre>
                    </Collapse>
                </div>
            </Example>
        );
    }

  handleClick = () => this.setState({ isOpen: !this.state.isOpen });
}



